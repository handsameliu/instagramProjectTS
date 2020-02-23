import 'react-native-gesture-handler';
import {YellowBox} from 'react-native';
import {enableScreens} from 'react-native-screens';

enableScreens();
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);
