import React, {useEffect, useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'react'

function Home() {
    const  [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center '>
            <div className='w-50 bg-white rounded p-3'>
                <h2>Contact List</h2>
                <div className='d-flex justify-content-end'>
                    <Link to="/create" className='btn btn-success'>Create+</Link>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((contact, index) =>{
                            return <tr key= {index}>
                                <td>{contact.id}</td>
                                <td>{contact.name}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.email}</td>
                                <td>
                                    <Link to={`/read/${contact.ID}`}className='btn btn-sm btn-info'>Read</Link>
                                    <button className='btn btn-sm btn-primary mx-2'>Edit</button>
                                    <button className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;