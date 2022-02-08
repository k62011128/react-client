import ajax from "./ajax";
import jsonp from 'jsonp'
import { message } from "antd";
export function reqLogin(username, password) {
    return ajax('/login', {
        username,
        password
    }, 'POST');
}

export const reqAddUser=(user)=>ajax('/manager/user/add',user,'POST')

export const reqWeather=()=>{
    return new Promise((resolve,reject)=>{
        const url='https://restapi.amap.com/v3/weather/weatherInfo?key=ee53048384ee8cb207a0c649029c2eb6&city=321000'
        jsonp(url,{},(err,data)=>{
            if(!err&&data.status==='1')
            {
                const {city,weather}=data.lives[0]
                resolve({city,weather});
            }
            else{
                message.error('获取天气数据失败')
            }
        })
    })

}
