const baseURL = 'http://localhost:4000'
const signupURL = baseURL + '/signup'
const loginURL = baseURL + '/login'

export const signupUser = (user) => fetch(signupURL, {
    method: "post",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
})
    .then((res) => {
        if (res.ok) {
            localStorage.setItem("token", res.headers.get("Authorization"));
        }
        return res.json();
    });

export const loginUser = (user) => fetch(loginURL, {
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

export const user_logged = async() => {
    const token = localStorage.getItem("token");
    if (!token) return false;
    const current_user_url = baseURL + '/current_user'
    return await fetch(current_user_url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
        },
    }).then((res) => res.ok );
}