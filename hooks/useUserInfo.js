import Cookies from "js-cookie";


export default function UseUserInfo(role) {

    const user= Cookies.get(role)
    if(user){
        console.log("here")
        return JSON.parse(user)
    }
    return user


}