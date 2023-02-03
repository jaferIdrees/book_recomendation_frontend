import { useState } from 'react';
import { useForm } from 'react-hook-form';

import "./styles.css";

const registerUser = (user) => fetch("http://localhost:4000/signup", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ user }),
    })
        .then((res) => {
            if (res.ok) {
                console.log(res.headers.get("Authorization"));
                localStorage.setItem("token", res.headers.get("Authorization"));
                return res.json();
            }
            return res.json;
        });

const Registration = () => {
    const [ userStatus, setUserStatus ] = useState();
    const {
        register,
        handleSubmit
    } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        const user = {
            full_name: data.full_name,
            email: data.email,
            password: data.password
        }
        console.log(JSON.stringify({ user }))
        await registerUser(user).then((res) => {
            console.log(res);
            const message = res.status === 200 ? '' : 'Registration failed:'
            setUserStatus(`${message} ${res.statusText}`)})
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