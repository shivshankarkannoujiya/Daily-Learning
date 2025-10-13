import { useEffect, useState } from "react";

export function MealMenu() {
    const [menu, setMenu] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://api.freeapi.app/api/v1/public/meals`)
            .then(res => res.json())
            .then(data => setMenu(data.data.data))
            .catch((err) => setError(err.message))
    }, [])
    
    return (
        <div>
            <h2>Available Meals</h2>
            {error && <p>ERROR: { error }</p>}
            <ul>
                {
                    menu.map((meal) => (
                        <li key={meal.idMeal}>{ meal.strMeal }</li>
                    ))
                }
            </ul>
        </div>
    )
}