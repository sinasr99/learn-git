alert("hello world")

const logout = () => alert("logout")

const login = (username, password) => {
    if (username && password) {
        return true
    }
    return false
}

const getMe = async token => !!token

const changeName = newName => newName
