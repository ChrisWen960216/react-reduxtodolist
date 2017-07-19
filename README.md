## React-redux TodoLists App
该版本基于 7.17 部署的 [react-todoList（V1.0）](https://chriswen960216.github.io/ReactTodoList/react-example/build/index.html)，使用了 react-redux 和 AntDesign UI 框架进行开发。

说明文档将随着开发进度逐步更新。[项目预览地址点此跳转](https://chriswen960216.github.io/reduxtodolist/build/index.html).

### 2017.07.18 第一次 更新说明
1. 使用 create-react-app 框架对项目进行构建；
2. 对 create-react-app 进行 eject 操作，用以高度定制化；
3. 引入 Redux, React-redux 对技术栈进行更新；
4. 引入 AntDesign UI 框架进行开发；
5. 抽离部分组件，现在每个组件有且仅有唯一的一个功能，子组件使用 props 向父组件取值（`state`,`function`）；
6. 引入额外的功能组件 `FilterComponents`，作为额外的过滤器对所有事件进行分类显示，将在后续开发中完善此功能。