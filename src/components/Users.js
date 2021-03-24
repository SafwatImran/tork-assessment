import { render } from '@testing-library/react';
import React from 'react'

const Users = ({userData}) => {
    const User = ({id,live_type,title,user_id,user_name}) =>(
        <div className='users'>
            <p>id: {id}</p>
            <p>live_type: {live_type}</p>
            <p>title: {title}</p>
            <p>user_id: {user_id}</p>
            <p>user_name: {user_name}</p>
        </div>
      );
      function renderUsers(){
        let userList = [];
        if (userData!=null){
            userData.forEach((user)=>{
                let id = user['id']
                let live_type= user['live_type']
                let title = user['title']
                let user_id = user['user_id']
                let user_name = user['user_name']
                userList.push(<User id={id} title ={title} live_type={live_type} user_id={user_id} user_name={user_name}/>)
            })}
        return userList;   
    }
    render()
        return <div >{renderUsers()}</div>
    
    
}

export default Users;
