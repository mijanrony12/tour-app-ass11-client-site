import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrder = () => {
    const [ allOrders, setAllOders ] = useState([])

    //all order get
    useEffect(() => {
        axios('https://boiling-bastion-33130.herokuapp.com/allOrder')
            .then(res => {
                setAllOders(res.data)
                console.log(res.data);
        })
    }, [])
    
//delete single order
const handleDelete = id => {
        const proceed = window.confirm('Are You sure, You to want to delete?')
        if (proceed)
        {
             axios.delete(`https://boiling-bastion-33130.herokuapp.com/myOrder/${id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.deletedCount)
                {
                    alert('Your order deleted successfully')
                    const remaingOrder = allOrders.filter(order => order._id !== id)
                    setAllOders(remaingOrder)
                }
            })
        }
    }

//try pending approved
  const data={status: 'Approved'}
    const handleApporved = id => {
        axios.put(`https://boiling-bastion-33130.herokuapp.com/approve/${id}`, data)
            .then(res => {
                console.log(res.data)
                if (res.data.acknowledged)
                {
                    alert('Update your Order');
                    // const remaingAllOrder=allOrders.
                }
         })
    }
        


    return (
        //show all order
        <div className="container orders">
            <h1 className="miniTitle mb-5">We are Manage All Order</h1>
            
                  <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Number</th>
                                    <th>Order Process</th>
                                    <th>delete order</th>
                                </tr>
                            </thead>
                              {
                    allOrders.map(order =>
                              <tbody>
                                        <tr>
                                        <td>1</td>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td>{order.address}</td>
                                        <td>{order.number}</td>
                                        <td><button className="btn-design ms-5" onClick={()=>handleApporved(order._id)}>{order.status}</button></td>
                                        <td><button className="btn-design ms-5" onClick={()=>handleDelete(order._id)}>Delete</button></td>
                                        </tr>
                           </tbody>    
                        )
                       }
                </Table>

        </div>
    );
};

export default ManageAllOrder;