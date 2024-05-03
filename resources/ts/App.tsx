import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MemberRouter from './router/MemberRouter'
import { createRoot } from 'react-dom/client'

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <MemberRouter />
            </BrowserRouter>
        </>
    )
}

if (document.getElementById('app')) {
    const root = createRoot(document.getElementById('app')!)
    root.render(<App />)
}
