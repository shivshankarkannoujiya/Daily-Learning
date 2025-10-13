import { MealMenu } from "./components/AiiChai"
import { ChaiCounter } from "./components/ChaiOrder"
import { useRandomQuote } from "./hooks/useRandomQoute.js"


export default function App() {

    const { quotes, loading, error } = useRandomQuote()

    if (loading) return <h2>Loading...</h2>
    if (error) return <p>Error: { error }</p>

    return (
        <div>
            <h1>Hello from App</h1>
            <ChaiCounter />
            <MealMenu />
            <div>
                {
                    quotes.map(quote => (
                        <div key={quote.id}>
                            <h3>{quote.author}</h3>
                            <p>{quote.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}