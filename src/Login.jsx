import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import { useLoaderData } from "react-router-dom"

import { loginUser } from "./fetches";

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
    
    const message = useLoaderData()
    const navigate = useNavigate()



    function handleSubmit(e) {
        e.preventDefault()

        async function logUserIn(creds) {
            try {
                setError(null)
                setStatus("submitting")

                const res = await loginUser(creds)

                setError(null)
                navigate("/host", { replace: true})

            } catch (e) {
                setError(e)
            } finally {
                setStatus("idle")
            }
        }

        logUserIn(loginFormData)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {error && <h2>{error.message}</h2>}
            {message && <h3>{message}</h3>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button disabled={status === "submitting" ? true : false} type="submit">
                    {status === "submitting" ? "Logging in" : "Log in"}
                </button>
            </form>
        </div>
    )
}

// 