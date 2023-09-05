import { redirect } from "react-router-dom"

export async function requireAuth(request) {
    const isLoggedIn = localStorage.getItem("loggedin")

    if (!isLoggedIn) {
        const pathname = new URL(request.url).pathname

        const response = redirect(`/login?message=must be logged in&redirectTo=${pathname}`)
        response.body = true

        return response
    }
    return null
}