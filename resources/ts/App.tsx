import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MemberRouter from './router/MemberRouter'
import { createRoot } from 'react-dom/client'
import Loading from './components/Atoms/Loading'

const App: React.FC = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <BrowserRouter>
                    <MemberRouter />
                </BrowserRouter>
            </Suspense>
        </>
    )
}

if (document.getElementById('app')) {
    const root = createRoot(document.getElementById('app')!)
    root.render(<App />)
}
