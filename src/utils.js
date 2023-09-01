import { redirect } from "react-router-dom"

export async function requireAuth() {
    const isLoggedIn = true

    if (!isLoggedIn) {
        const response = redirect("/login?message=must be logged in")
        response.body = true
        return response
    }
    return null
}