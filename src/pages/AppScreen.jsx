import { useSelector } from "react-redux"

import FormAdd from "../components/FormAdd";
import Navbar from "../components/Navbar"
import Element from "../components/Element"

const AppScreen = () => {
    
    const name = useSelector((state) => state.auth.displayName);

    const data = useSelector((state) => state.nomina.data);

    return (
        <>
            <Navbar />
            <div className="container animate__animated animate__zoomIn">
                <h1 className="center">Hello {name}</h1>
                <hr/>
                <FormAdd />
                <table className="centered">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((elemento) => {
                                return <Element key={elemento.id} data={elemento} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AppScreen
