import App from "./App"
import Collection from "./pages/Collection"
import Enlisted from "./pages/Enlisted"
import ErrorPage from "./pages/ErrorPage"

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
            }
        ]
    }
]

export default routes