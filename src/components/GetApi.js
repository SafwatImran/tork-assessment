import axios from 'axios'
import React, {useState} from 'react'

const GetApi = () => {
    const [data,setData] = useState('')
    let url = 'https://examplebd.com/api/get-csrf-token'
    const buttonOnClick = (event)=>{
        axios.get(url).then(response=>{
            setData(response.data['csrf_token'])
        })
    }
    
    return (
        <div>
            <button type='button' className='btn' onClick={buttonOnClick}>Get</button>
            {data ? <h2>CSRF Token: {data}</h2>:''}
        </div>
    )
}

export default GetApi
