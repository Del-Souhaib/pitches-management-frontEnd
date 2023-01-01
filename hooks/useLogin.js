import Cookies from 'js-cookie'
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

function getSavedValue(){

}
export default function UseLogin(data) {
    const [value,setValue]=useState(data)
    const userInfos=JSON.parse(value)

    // console.log("from hook")
    // console.log(JSON.parse(value))

    useEffect(() => {


        if(userInfos) {
            // Cookies.set('test', value);
            // console.log("cookie :" + Cookies.get('test'))
            const formData = new FormData();

            formData.append("username", userInfos?.email)
            formData.append("password", userInfos?.password)

            fetch('http://localhost:8080/api/login', {
                method: 'POST', // or 'PUT'
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('reponse '+data)
                    if (data != null) {
                        Cookies.set('client', JSON.stringify(data));
                    }

                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [value]);

    return [value,setValue]
}