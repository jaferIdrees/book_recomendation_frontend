import { useForm } from 'react-hook-form';

const registerUser = (user) => {
    fetch("http://localhost:4000/login", {
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
            } else {
                throw new Error(res);
            }
        })
        .then((json) => console.dir(json))
        .catch((err) => console.error(err));
}

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        const user = {
            email: data.email,
            password: data.password
        }
        console.log(JSON.stringify({ user }))
        await registerUser(user);
        /*await sleep(2000);
        if (data.username === "bill") {
            alert(JSON.stringify(data));
        } else {
            alert("There is an error");
        }*/
    };

    return (
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

            <div style={{ color: "red" }}>
                {Object.keys(errors).length > 0 &&
                    "There are errors, check your console."}
            </div>
            <input type="submit" />
        </form>
    );
}

export default Login;