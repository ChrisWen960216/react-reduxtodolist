import AV from 'leancloud-storage';

const APP_ID = 'qmbXKx8N8g5ERnKYziWEAKby-gzGzoHsz'
const APP_KEY = 'I4udtVFBiL3G4xmSawjrT8HR'

//初始化应用API
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
})
export default AV;


//注册函数
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
