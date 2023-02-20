import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../API/user_authentication';

const Login = () => {
    const navigate = useNavigate()
    const [ userStatus, setUserStatus ] = useState()
    const {
        register,
        handleSubmit
    } = useForm();
    const onSubmit = async (data) => {
        const user = {
            email: data.email,
            password: data.password
        }
        await loginUser(user).then((res)=> {
            setUserStatus(res.status.message)
            navigate('/users/:id')
        }).catch(() => {
            setUserStatus('Login failed');
        });
    };
    return (
        <>
            {userStatus  && <h3>{userStatus}</h3>}
            <form onSubmit={handleSubmit(onSubmit)} className="container-fluid d-flex flex-column gap-3">
                <h1 className='text-center'>User login</h1>

                <label htmlFor="email" className='mt-3'>Email</label>
                <input
                    placeholder="bluebill1049@hotmail.com"
                    type="text"
                    {...register("email")}
                />

                <label htmlFor="password" className='mt-3'>Password</label>
                <input type="password" {...register("password")} />

                <input type="submit" />
            </form>
        </>
    );
}

export default Login;