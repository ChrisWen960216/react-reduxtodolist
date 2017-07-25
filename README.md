## React-redux TodoLists App V2.0
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

### 2017.07.21
1. 增加了 `DetailsComponent` 现在输入框内只能输入对应的 `todos` 标题，而详细内容和时间安排必须要在 `DetailsComponent` 中进行;
2. 增加了一个 `SubButton` 来提交 `Input` 中的内容，使得布局看起来更加直观和合理。并且，极力避免了操作 `DOM` 元素；
3. 引入了 `UserDialog` ，在接下来的版本中将会提供用户的 注册/登录/密码找回 等等功能；
4. 完善说明文档，更新部署环境。

### 2017.07.24
1. 优化 `DetailsComponent` 组件，现在拥有独立的详情输入框和保护开关（防止误操作）。并且增加了一个 `DatePicker` 来进行时间的选择；
2. 留出时间登记接口，后续版本中将对事件的时间进行记录，并实现后续的功能（自动提醒，事件备忘录等）；
3. 暂时移去 `UserDialog` ,先移除部分需要雕琢的功能；
4. 暂时移去 `DatePicker` ，由于时间转换需要涉及到更多的库和逻辑代码，暂时不考虑实现该部分。其对应的功能将在随后进行实现；
5. 完善说明文档，更新部署环境。

### 2017.07.25
1. 重新设计 `UserDialog` 组件，该组件包含 登录、注册和找回密码 三个模块，包含完整的输入值验证（例如 `E-MAIL` , `PASSWORD` 的验证），将在之后连接数据库；
2. 修改了 即使验证没有通过也会登陆成功 的BUG;
3. 修改了 多次提交之后会清除对应 `Todo` 中的 `Deatils` 的问题；
4. 完善说明文档，更新部署环境。