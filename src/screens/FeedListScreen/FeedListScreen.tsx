import React, {useState, useEffect, useRef, useCallback} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {Report, ScreensParamList} from 'types/types';
import {selectUser} from 'reduxState/selectors';
import {useSelector} from 'react-redux';
import {useIsFocused, useRoute, RouteProp} from '@react-navigation/native';
import {get} from 'utils/request';
import qs from 'qs';
import FeedItem from './FeedItem';

interface Props {}

type FeedListScreenRouteProp = RouteProp<ScreensParamList, 'FeedListScreen'>;

const limit = 10;

export default function FeedListScreen({}: Props) {
  const user = useSelector(selectUser);
  const [dataList, setDataList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState<string | null>(null);
  const isEndReached = useRef(false);
  const isFetching = useRef(false);
  const isFocused = useIsFocused();
  const route = useRoute<FeedListScreenRouteProp>();
  const showMe = route.params?.showMe ?? false;

  const getDataList = useCallback(
    async function getDataList(isRefresh?: boolean) {
      if (isFetching.current) {
        return;
      }
      if (!isRefresh && isEndReached.current) {
        return;
      }
      isFetching.current = true;
      setLoading(isRefresh ? 'refresh' : 'more');
      const {data} = await get(
        `/feef?${qs.stringify({
          offset: isRefresh ? 0 : offset,
          limit,
          userId: showMe ? user.id : undefined,
        })}`,
      );
      setLoading(null);
      if (data && data.rows) {
        let currentCount;
        if (isRefresh) {
          currentCount = data.rows.length;
          setDataList(data.rows);
        } else {
          currentCount = data.rows.length + dataList.length;
          setDataList(dataList.concat(data.rows));
        }
        setOffset(currentCount);
        isEndReached.current = currentCount >= data.count;
      }
      isFetching.current = false;
    },
    [dataList, offset, showMe, user.id],
  );

  useEffect(() => {
    if (isFocused) {
      getDataList(true);
    }
  }, [getDataList, isFocused]);

  return (
    <SafeAreaView>
      <FlatList<Report>
        keyExtractor={item => String(item.id)}
        data={dataList}
        renderItem={({item}) => <FeedItem item={item} />}
        refreshing={loading === 'refresh'}
        onRefresh={() => getDataList(true)}
        onEndReached={() => getDataList()}
      />
    </SafeAreaView>
  );
}
