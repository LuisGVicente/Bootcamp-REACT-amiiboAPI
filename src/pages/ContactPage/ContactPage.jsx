import React from 'react'
import { useForm } from 'react-hook-form'
//comprobar que stá importado
export default function Contactpage(props) {
    
    const {register, handleSubmit, watch, errors, reset} = useForm();
    const onSubmit = (data) =>{console.log(data);reset()}


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
    
                <input type="text" name="name" placeholder="name" ref ={register({required: true})}/>
                {errors.name && <span>This field is required</span>}
          
                <input type="email" name="email" placeholder="email" ref ={register({required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}/>
                {errors.email && <span>This field is required</span>}
                <input type="text" name="fav" placeholder="favouriteAmiibo" ref ={register({required: true})}/>
                {errors.favouriteAmiibo && <span>This field is required</span>}
                <input type="textArea" name="message" placeholder="message" ref ={register({required: true, minLength: 5, maxLength: 255})}/>
                {errors.message && <span>This field is required</span>}
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}
