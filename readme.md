项目基于android开发

会用到的命令行

- 运行程序 **yarn run android**  相当于 **yarn react-native run-android**

- 清空缓存 **cd android && ./gradlew clean**

- 打包应用 **cd android && ./gradlew assembleRelease** 初次打包前需要做设置

初始化配置

- 允许http （ios9，android9 以后默认只支持https）

    - android 添加appliction标签中添加 android:usesCleartextTraffic="true" 属性

    - ios info.plist NSAppTransportSecurity 属性添加 NSAllowsArbitraryLoads属性为 true

- android 的 minifast 权限检查

    - runtime permission (android 6)

- 删除不相关的文件 例如ios的tvOS和tvOSTests项目（mac环境下操作即可）

- react-native-gesture-handlew // 手势组件（react-navigation必需）

- react-native-screens // 提升react-navigation性能的可选组件

js代码配置

- 屏蔽一些无意义的警告

- 运行时权限检查

- Redux全家桶
    
    - redux

    - react-redux // 链接react组件

    - redux-sage // 处理异步副作用

    - redux-persist // 持久记录redux状态

    - redux-type-actions // 增强类型提示

    - immer // 简化不可变类型状态的修改

    - reselect // 缓存selector以减少不必要的状态计算

    - @types/react-redux // react-redux的类型声明

- 二级目录配置package.json  // 方便相对路径的引用