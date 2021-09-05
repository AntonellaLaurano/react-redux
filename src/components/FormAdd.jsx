import { useState } from "react";
import { useDispatch } from "react-redux";
import { crearRegristro } from "../actions/nomina";

import M from "materialize-css"

import "../css/Buttons.css"
import "../css/FormAdd.css"

const FormAdd = () => {

    const dispatch = useDispatch();

    const [viewForm, setViewForm] = useState(false)
    const [cantidadPago, setCantidadPago] = useState(
        {
            precioHora: '',
            horas: ''
        }
    )

    const { precioHora, horas } = cantidadPago;

    const handleAdd = () => {
        setViewForm(!viewForm);
            var elems = document.querySelectorAll('.modal');
            M.Modal.init(elems);
    }

    const handleChange = (event) => {
        setCantidadPago({
            ...cantidadPago,
            [event.target.name] : event.target.value
        });
    }

    const handleSave = () => {
        if(!isNaN(horas) && !isNaN(precioHora)) {
            const cantidadFinal = parseInt(horas) * parseInt(precioHora);
            dispatch(crearRegristro(cantidadFinal));
        } else {
            alert('Error');
        }
        setCantidadPago({
            precioHora: '',
            horas: ''
        });
    }

    return (
        <div>
            <button onClick={handleAdd} className="btn buttons modal-trigger" data-target="modalAdd">Add</button>
                <div id="modalAdd" className="modal animate__animated animate__fadeIn">
                    <div className="input-field col s12">
                        <label htmlFor="icon_prefix1">Hourly</label>
                        <input 
                            id="icon_prefix1"
                            type="text" 
                            value={precioHora} 
                            onChange={handleChange}
                            name="precioHora" />
                    </div> 
                    <div className="input-field col s12">
                        <label htmlFor="icon_prefix2">Working hours</label>
                        <input 
                            id="icon_prefix2"
                            type="text" 
                            value={horas} 
                            onChange={handleChange}
                            name="horas" />
                    </div> 
                    <button onClick={handleSave} className="btn buttons modal-close">Calculate and save</button>
                </div>
        </div>
    )
}

export default FormAdd
