import React from 'react';
import './PlaceOrder.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const PlaceOrder = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        axios.post('http://localhost:5000/placeOrder', data)
            .then(res => {
               
                if (res.data.insertedId)
                {
                    alert('we got Your address , Thanks!')
                    reset()
                }
        })
    };
    return (
        <div className="placeOrder">
                       <h4 className="miniTitle ">Please Give Your Address</h4>
             <form onSubmit={handleSubmit(onSubmit)}>
                   
                    <input  {...register("name")} placeholder="Your Name"/>
                    <input  {...register("email")} placeholder="Your Email"/>
                    <input  {...register("address")} placeholder="Your Address"/>
                    
                    <input {...register("number", { required: true })}  placeholder="Your Number"/>
                    
                    {errors.number && <span>This field is required</span>}
                    
                    <input className="btn-color" type="submit" />
         </form>

   </div>
    );
};

export default PlaceOrder;