import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signupUser } from '../API/user_authentication';

import "./styles.css";

const Registration = () => {
    const [ userStatus, setUserStatus ] = useState();
    const {
        register,
        handleSubmit
    } = useForm();
    const onSubmit = async (data) => {
        console.log('it',data);
        const user = {
            full_name: data.full_name,
            email: data.email,
            password: data.password
        }
        console.log(JSON.stringify({ user }))
        await signupUser(user).then((res) => {
            const message = res.status.code === 200 ? '' : 'Registration failed:'
            setUserStatus(`${message} ${res.status.message}`)})
        .catch((res)=> {
            console.log(res)
            setUserStatus('Error')
        });
        
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>User registration</h1>
            <label htmlFor="full_name">Full Name</label>
            <input placeholder="Bill" {...register("full_name")} />

            <label htmlFor="email">Email</label>
            <input
                placeholder="bluebill1049@hotmail.com"
                type="text"
                {...register("email")}
            />

            <label htmlFor="password">Password</label>
            <input type="password" {...register("password")} />

            <div style={{ color: "red" }}>
                {userStatus && userStatus}
            </div>
            <input type="submit" />
        </form>
    );
}

export default Registration;