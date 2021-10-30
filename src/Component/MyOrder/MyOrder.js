import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import './MyOrder.css'
const MyOrder = () => {
    const { user } = useAuth();
    const [ myOrders, setMyOrders ] = useState([])
    
    //load myorder data
    useEffect(() => {
        axios.get('https://boiling-bastion-33130.herokuapp.com/myOrder')
            .then(res => {
            // console.log(res.data)
                setMyOrders(res.data)
        })
    }, [])
    
    const userOrders = myOrders.filter(order => order.email === user.email);
  
    //delete my order
    const handleDelete = id => {
        const proceed = window.confirm('Are You sure, You to want to delete?')
        if (proceed)
        {
             axios.delete(`https://boiling-bastion-33130.herokuapp.com/myOrder/${id}`)
            .then(res => {
               
                if (res.data.deletedCount)
                {
                    alert('Your order deleted successfully')
                    const remaingOrder = myOrders.filter(order => order._id !== id)
                    setMyOrders(remaingOrder)
                }
            })
        }
    }

    return (
        //my order table
        <div className="container  orders">
            <h1 className="miniTitle">this is My all Orders</h1>
          
               
            <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Number</th>
                        <th>Order Process</th>
                        <th>delete your order</th>
                        </tr>
                    </thead>
                        {
                    userOrders.map(order =>
                              <tbody>
                                        <tr>
                                        <td>1</td>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td>{order.address}</td>
                                        <td>{order.number}</td>
                                        <td>{order.status}</td>
                                        <td><button className="btn-design ms-5" onClick={()=>handleDelete(order._id)}>Delete</button></td>
                                        </tr>
                           </tbody>    
                        )
                       }
            </Table>               
    
             
   
        </div>
    );
};

export default MyOrder;