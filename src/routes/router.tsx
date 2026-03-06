import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../root-layout"
import Carrinho from "../pages/carrinho"
import Favoritos from "../pages/favoritos"
import Feedback from "../pages/feedback"
import HomePage from "../pages/home-page"
import Login from "../pages/login"
import PijamaIndividual from "../pages/pijama-individual"
import Pijamas from "../pages/pijamas"
import Registro from "../pages/registro"

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "/favoritos",
                element: <Favoritos/>
            },
            {
                path: "/feedback",
                element: <Feedback/>
            },
            {
                path: "/carrinho",
                element: <Carrinho/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/pijama/:id",
                element: <PijamaIndividual/>
            },
            {
                path: "/pijamas/:filtroDeClasse",
                element: <Pijamas/>
            },
            {
                path: "/registro",
                element: <Registro/>
            },
        ]
    }
])

export default router