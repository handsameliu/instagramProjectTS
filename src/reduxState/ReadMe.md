### 何为redux？

- 某小区物业（Provider）提供了公用的公告板（Store）

    - 小区内的所有人都可以看到并可以发布消息

- 公告板分多个板块，且每个板块都有专人审核编辑（Reducer）

- 某天某妹子发出（Dispatch）一则启示（Action）

    - 没错，她发布的是已有的类型（Type）征婚启示，并附带了信息（Payload）

    - 经过审核编辑（Reducer）后公布到公告板（Store）上

- 此时关注（Connect）公告板的单身狗们（Component）自然都看到了消息，于是开始捯饬（render）自己以符合要求。


### Redux-XXX 又是什么鬼？

- 标配的redux有一个问题不能很好的用同步过程来表达

    - 即所谓的有**操作无状态**的**副作用（Side Effects）**

        - 公告板上没有变化

- 常见的副作用场景有

    - 异步获取数据（不能立即得到新数据/状态）

    - 一些与界面无关的操作（不需要状态）

- 常见的中间件解决方案有：

    - redux-saga, redux-thunk, redux-observable

redux-sage 可以解决，**推荐使用**

与界面渲染无关的一些逻辑副作用操作，统一放到saga中。

```javascript
function handleSideEffect() {
    // 1. 监听
    const 事件 = 监听(某个数据的事件);
    // 2. 处理数据
    const 处理后的数据 = 根据事件及其携带的数据进行相应的处理(事件.携带的数据);
    // 3. 将处理完的数据发出到下一个事件
    发出(下一个事件(处理后的数据)); 
}


function* handleSideEffect() {
    const action = yield take(SOMEACTION);
    const result = yield call(doSomething, action.payload);
    yield put(ANOTHERACTION(result));
}
```

