import Cookies from "js-cookie";
import {useRouter} from "next/router";


export default function UseLogout(role){

    Cookies.remove(role)

}