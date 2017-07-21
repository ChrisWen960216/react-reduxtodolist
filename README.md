## React-redux TodoLists App
该版本基于 7.17 部署的 [react-todoList（V1.0）](https://chriswen960216.github.io/ReactTodoList/react-example/build/index.html)，使用了 react-redux 和 AntDesign UI 框架进行开发。

说明文档将随着开发进度逐步更新。[项目预览地址点此跳转](https://chriswen960216.github.io/reduxtodolist/build/index.html).

### 2017.07.18 
1. 使用 `create-react-app` 框架对项目进行构建；
2. 对 `create-react-app` 进行 `eject` 操作，用以高度定制化；
3. 引入 `Redux`, `React-redux` 对技术栈进行更新；
4. 引入 `AntDesign UI` 框架进行开发；
5. 抽离部分组件，现在每个组件有且仅有唯一的一个功能，子组件使用 props 向父组件取值（`state`,`function`）；
6. 引入额外的功能组件 `FilterComponents`，作为额外的过滤器对所有事件进行分类显示，将在后续开发中完善此功能。

### 2017.07.19 
1. 引入 `loggerConst` 中间件，打印对应的 `action` 状态和 `state`;
2. 使用 `combineReducers` 对 `reducer`进行组合，便于后续组件的增加;
3. 学习 `middleware` 将酌情添加更多中间件用以跟踪 `action`；
4. 完善说明文档，更新部署环境;

### 2017.07.20
1. 完成 `FilterComponent` 的引入，现在对应状态的 `todos` 将会拥有自己独立的 `Filter`来进行查看；
2. 加入部分 `AntDesign UI` 框架，略微增加部分 `SCSS` 文件，美化样式；
3. 使用了 `Redux-Dev-Tools` 插件进行开发，现在本系统中所有 `Redux` 的 `State` 和 `Dispatch` 都能直观的可视化，并且进行跟踪；
4. 完善说明文档，更新部署环境；
5.  [代码分支点此跳转](https://github.com/ChrisWen960216/reduxtodolist/tree/720)。

### 2017.07.21
1.