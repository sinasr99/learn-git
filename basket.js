 const login = (username, password) => {
    return true
 }

 const getMe = token => !!token

 const register = username => !!username

const showItems = () => {
    return ["item1", "item2", "item3"]
}

const logOut = () => {
    console.log("user logged out")
    return false
}
