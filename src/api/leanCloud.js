import AV from 'leancloud-storage';

const APP_ID = 'qmbXKx8N8g5ERnKYziWEAKby-gzGzoHsz'
const APP_KEY = 'I4udtVFBiL3G4xmSawjrT8HR'

//初始化应用API
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
})
export default AV;


//用户注册
export function signUp(username, password, email, successFn, errorFn) {
    // 新建 AVUser 对象实例
    let user = new AV.User()
    // 设置用户名
    user.setUsername(username)
    // 设置密码
    user.setPassword(password)
    // 设置邮箱
    user.setEmail(email)
    user.signUp().then(function(loginedUser) {
        let user = getUserFromAVUser(loginedUser)
        successFn.call(null, user)
    }, function(error) {
        errorFn.call(null, error)
    })
    return undefined
}

//用户登录
export function signIn(username, password, successFn, errorFn) {
    AV.User.logIn(username, password).then(function(loginedUser) {
        let user = getUserFromAVUser(loginedUser)
        successFn.call(null, user)
    }, function(error) {
        errorFn.call(null, error)
    })
}

//获取 记住用户
export function getCurrentUser() {
    let user = AV.User.current();
    if (user) {
        return getUserFromAVUser(user)
    } else {
        return null
    }

}

//用户登出
export function signOut() {
    AV.User.logOut();
    return undefined;
}

//找回密码
export function sendPasswordResetEmail(email, successFn, errorFn) {
    AV.User.requestPasswordReset(email).then(function(success) {
        successFn.call()
    }, function(error) {
        console.dir(error)
    })
}

function getUserFromAVUser(AVUser) {
    return {
        id: AVUser.id,
        ...AVUser.attributes
    }
}

//Todos增删改查
export const TodoModel = {
    getByUser(user, successFn, errorFn) {
        // 文档见 https://leancloud.cn/docs/leanstorage_guide-js.html#批量操作
        let query = new AV.Query('Todo')
        query.find().then((response) => {
            let array = response.map((t) => {
                return {
                    id: t.id,
                    ...t.attributes
                }
            })
            successFn.call(null, array)
        }, (error) => {
            errorFn && errorFn.call(null, error)
        })
    },
    create({completed, text, deleted, details} , successFn, errorFn) {
        let Todo = AV.Object.extend('Todo') // 记得把多余的分号删掉，我讨厌分号
        let todo = new Todo()
        todo.set('text', text)
        todo.set('completed', completed)
        todo.set('deleted', deleted)
        todo.set('details', details)

        // 根据文档 https://leancloud.cn/docs/acl-guide.html#单用户权限设置
        // 这样做就可以让这个 Todo 只被当前用户看到
        let acl = new AV.ACL()
        acl.setPublicReadAccess(false) // 注意这里是 false
        acl.setWriteAccess(AV.User.current(), true)
        acl.setReadAccess(AV.User.current(), true)

        todo.setACL(acl);

        todo.save().then(function(response) {
            successFn.call(null, response.id)
        }, function(error) {
            errorFn && errorFn.call(null, error)
        });

    },
    update({id, text, completed, deleted, details} , successFn, errorFn) {
        // 文档 https://leancloud.cn/docs/leanstorage_guide-js.html#更新对象
        let todo = AV.Object.createWithoutData('Todo', id)
        text = todo.set('text', text)
        completed = todo.set('completed', completed)
        deleted = todo.set('deleted', deleted)
        details = todo.set('details', details)
        // 为什么我要像上面那样写代码？
        // 考虑如下场景
        // update({id:1, text:'hi'})
        // 调用 update 时，很有可能没有传 completed 和 deleted
        // 也就是说，用户只想「局部更新」
        // 所以我们只 set 该 set 的
        // 那么为什么不写成 text && todo.set('text', text) 呢，为什么要多此一举跟 undefined 做对比呢？
        // 考虑如下场景
        // update({id:1, text: '', completed: null}}
        // 用户想将 text 和 completed 置空，我们要满足
        todo.save().then((response) => {
            successFn && successFn.call(console.log('成功', todo))
        }, (error) => errorFn && errorFn.call(null, error))
    },
    destroy(todoId, successFn, errorFn) {
        // 文档 https://leancloud.cn/docs/leanstorage_guide-js.html#删除对象
        TodoModel.update({
            id: todoId,
            deleted: true
        }, successFn, errorFn)
    }
}
