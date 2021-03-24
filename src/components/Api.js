import axios from 'axios'
import React, {useState} from 'react'
import Users from './Users'

const Api = () => {
    const [userData,setUserData] = useState('')
    let url = "https://examplebd.com/api/live-classes?user_id=10089"
    const buttOnClick = (event) =>{
        axios.post(url).then(response=>{
            console.log(response.data)
            setUserData(response.data)
        })}
    return (
        <div>
            {userData ?<Users userData = {userData}/>:''}
            <button className='btn'type="button" onClick={buttOnClick}>POST</button>
        </div>
    )
}

export default Api;
