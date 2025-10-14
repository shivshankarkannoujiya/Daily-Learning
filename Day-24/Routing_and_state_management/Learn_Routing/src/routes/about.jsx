import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
    component: RouteComponent,
    defaultPreload: "Intent"
})

function RouteComponent() {
    return (
        <div>
            Hello "/about"!
            <h1>Welcome to About</h1>    
        </div>
    )
}
