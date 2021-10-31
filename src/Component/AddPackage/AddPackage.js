import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddPackage.css'
const AddPackage = () => {
     const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://boiling-bastion-33130.herokuapp.com/addPackage', data)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId)
                {
                    alert('package add successfully');
                    reset()
                }
        })
    };
    return (
        //you can add your package.
        <div className="add-package">
             <h4 className="miniTitle ">Please Give Your Address</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <input  {...register("name")} placeholder="name"/>
                    <input {...register("price")} placeholder="Price" />
                    <input {...register("time")} placeholder="time" />
                    <input {...register("title")} placeholder="title" />
                    <input {...register("img")} placeholder="image url" />
                    
                    
                    
                    <input type="submit" />
           </form>
        </div>
    );
};

export default AddPackage;