import { MealMenu } from "./components/AiiChai"
import { ChaiCounter } from "./components/ChaiOrder"


export default function App() {
    return (
        <div>
            <h1>Hello from App</h1>
            <ChaiCounter />
            <MealMenu/>
        </div>
    )
}