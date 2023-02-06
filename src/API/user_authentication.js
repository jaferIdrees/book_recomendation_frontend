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