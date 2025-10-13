import { useState, useEffect } from "react";

export function useRandomQuote() {

    const [quotes, setQuotes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch(`https://api.freeapi.app/api/v1/public/quotes`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Failed to fetch Quotes`)
                }
                return res.json()
            })
            .then((data) => {
                setQuotes(data?.data.data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message || `Something went wrong`)
                setLoading(false)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return { quotes, loading, error };
}
