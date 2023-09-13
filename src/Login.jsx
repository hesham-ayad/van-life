import { redirect, useLoaderData, Form, useActionData, useNavigation } from 'react-router-dom';

import { loginUser } from "./fetches";

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()

    const email = formData.get("email")
    const password = formData.get("password")

    try {

        const data = await loginUser({ email, password })

        localStorage.setItem("loggedin", true)

        const backToUrl = new URL(request.url).searchParams.get("redirectTo") || '/host'

        const response = redirect(backToUrl)
        response.body = true

        return response

    } catch (e) {
        return e.message
    }
}


export function Login() {

    const errorMsg = useActionData() ?? null

    const message = useLoaderData()
    const navInfo = useNavigation()

    return (
        <div>
            <h1>Sign in to your account</h1>
            {errorMsg && <h2>{errorMsg}</h2>}
            {message && <h3>{message}</h3>}
            <Form method='post' replace>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={navInfo.state === "submitting" ? true : false} type="submit">
                    {navInfo.state === "submitting" ? "Logging in" : "Log in"}
                </button>
            </Form>
        </div>
    )
}

