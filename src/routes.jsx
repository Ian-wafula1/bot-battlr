import App from "./App"
import Collection from "./pages/Collection"
import Enlisted from "./pages/Enlisted"
import ErrorPage from "./pages/ErrorPage"
import BotPage from './pages/BotPage'

const routes = [
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <App />,
        children: [
            {
                path: '/collection',
                element: <Collection />,
            },
            {
                path: '/enlisted',
                element: <Enlisted />
            },
            {
                path: '/bots/:id',
                element: <BotPage />
            }
        ]
    }
]

export default routes