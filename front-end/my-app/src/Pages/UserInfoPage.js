import React, { useState, useEffect } from 'react'
import axios from 'axios';

export const UserInfoPage = () => {
const [data, setData] = useState([])

    const getData = async () => {
        const result = await axios.get(
            'http://localhost:8080/api/getAll',
        {
        
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
        console.log('result', result.data)
        setData(result.data);
        return result.data
    }

    useEffect(() => {
      getData()
    
      return () => {
        
      }
    }, [])
    
    return (
        <div className="page-container">
        <div className="content-container">
            <h1>User Info</h1>
            {!data && <h2>No Data</h2>}
            {data.map((item)=> {
               return <div key={item.id}>
                <div>UserName:{item.userName}</div>
                <div>Email:{item.email}</div>
                </div>
            })}
        </div>
        </div>
    )
}

