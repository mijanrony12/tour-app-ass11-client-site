import React from 'react';
import './PlaceOrder.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';

const PlaceOrder = () => {
    const {user}=useAuth()
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // post place order in database
        data.status = 'Pending..';
        axios.post('https://boiling-bastion-33130.herokuapp.com/placeOrder', data)
            .then(res => {
               
                if (res.data.insertedId)
                {
                    alert('we got Your address , Thanks!')
                    reset()
                }
        })
    };
    return (
        
        //form for place order
        <div className="placeOrder">
                       <h4 className="miniTitle ">Please Give Your Address</h4>
             <form onSubmit={handleSubmit(onSubmit)}>
                   
                    <input defaultValue={user.displayName} {...register("name")} placeholder="Your Name"/>
                    <input defaultValue={user.email} {...register("email")} placeholder="Your Email"/>
                    <input  {...register("address")} placeholder="Your Address"/>
                    
                    <input {...register("number", { required: true })}  placeholder="Your Number"/>
                    
                    {errors.number && <span>This field is required</span>}
                    
                    <input className="btn-color" type="submit" />
         </form>

   </div>
    );
};

export default PlaceOrder;