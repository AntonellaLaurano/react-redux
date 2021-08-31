import { Redirect, Route } from "react-router-dom"

import Charging from "../pages/Charging"

const PublicRouter = ({ log, charging, component: Component, ...resto }) => {
    return (
        <Route 
            {...resto}
            component={(props) => 
                charging ? <Charging/> : log ? <Redirect to="/" /> : <Component {...props} />
            } 
        />
    )
}

export default PublicRouter
