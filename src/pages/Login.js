import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const registerUser = (user) => fetch("http://localhost:4000/login", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ user }),
    })
        .then((res) => {
            if (res.ok) {
                localStorage.setItem("token", res.headers.get("Authorization"));
                return res.json();
            }
        });


const Login = () => {
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
        await registerUser(user).then((res)=> {
            setUserStatus(res.status.message);
        }).catch(() => {
            setUserStatus('Login failed');
        });
    };
    return (
        <>
            {userStatus  && <h3>{userStatus}</h3>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>User login</h1>

                <label htmlFor="email">Email</label>
                <input
                    placeholder="bluebill1049@hotmail.com"
                    type="text"
                    {...register("email")}
                />

                <label htmlFor="password">Password</label>
                <input type="password" {...register("password")} />

                <input type="submit" />
            </form>
        </>
    );
}

export default Login;