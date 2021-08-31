import { useState } from "react";
import { useDispatch } from "react-redux";
import { crearRegristro } from "../actions/nomina";

const FormAdd = () => {

    const dispatch = useDispatch();

    const [viewForm, setViewForm] = useState(false)
    const [cantidadPago, setCantidadPago] = useState(
        {
            precioHora: 0,
            horas: 0
        }
    )

    const { precioHora, horas } = cantidadPago;

    const handleAdd = () => {
        setViewForm(!viewForm);
    }

    const handleChange = (event) => {
        setCantidadPago({
            ...cantidadPago,
            [event.target.name] : event.target.value
        });
    }

    const handleSave = () => {
        const cantidadFinal = horas * precioHora;
        dispatch(crearRegristro(cantidadFinal));
        setCantidadPago({
            precioHora: 0,
            horas: 0
        });
    }

    return (
        <div>
            <button onClick={handleAdd} className="btn green">
                {
                    viewForm ? "Cerrar" : "Agregar"
                }
            </button>
            {
                viewForm && 
                <div className=" animate__animated animate__fadeIn">
                    <div className="input-field col s12">
                        <label htmlFor="icon_prefix1">Pago por hora: </label>
                        <input 
                            id="icon_prefix1"
                            type="text" 
                            value={precioHora} 
                            onChange={handleChange}
                            name="precioHora" />
                    </div> 
                    <div className="input-field col s12">
                        <label htmlFor="icon_prefix2">Pago por horas laboradas: </label>
                        <input 
                            id="icon_prefix2"
                            type="text" 
                            value={horas} 
                            onChange={handleChange}
                            name="horas" />
                    </div> 
                    <button onClick={handleSave} className="btn purple">Calcular y guardar</button>
                </div>
            }
        </div>
    )
}

export default FormAdd
