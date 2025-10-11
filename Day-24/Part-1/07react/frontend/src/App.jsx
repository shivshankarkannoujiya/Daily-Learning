import { useEffect, useState } from "react"


export function App() {

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    useEffect(() => {
        fetch(`/api`)
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch((err) => setError(err.message || `Failed to load`))
    }, [])
    
    return (
        <div>
            <h1>Welcome to chaicode</h1>
            {
                error && <p>ERROR: { error }</p>
            }
            <h2>{ message }</h2>
        </div>
    )
}