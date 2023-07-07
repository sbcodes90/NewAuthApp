import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Home() {
const [data, setData] = useState([])

    const url = `http://localhost:8080/api/getAll`;
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
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
        <div className="content-container">
            <h1>Home</h1>
            {data.map((item)=> {
               return <div key={item.id}>
                <div>UserName:{item.name}</div>
                <div>Email:{item.email}</div>
                </div>
            })}
        </div>
    )
}

export default Home