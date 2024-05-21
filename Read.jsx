import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

function Read() {
    const {id} = useParams();
    const [contact, setContact] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/read/'+id)
        .then(res => {
           console.log(res)
           setContact(res.data)
        })
        .catch(err => console.log(err))
    }, [])
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h2>Contact Details</h2>
                <h2>{contact.ID}</h2>
                <h2>{contact.name}</h2>
                <h2>{contact.email}</h2>
            </div>
        </div>
    )
}

export default Read;