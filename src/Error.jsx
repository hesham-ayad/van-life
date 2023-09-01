import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError()

    return (
        <main>
            <h1>Error: {error.message}</h1>
            <pre>{error.status} - {error.statusText}</pre>
        </main>
    )
}