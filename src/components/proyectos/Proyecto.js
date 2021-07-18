import React, { useContext } from 'react';
import ProyectoContext from "../../context/Proyectos/proyectoContext";
import TareaContext from "../../context/Tareas/tareaContext";


const Proyecto = ({ proyecto }) => {

    //Obtener el state de proyectos
    const proyectoContext = useContext(ProyectoContext);
    const { proyectoActual } = proyectoContext;

    //Obtenemos la funcion del context de tarea.
    const tareaContext = useContext(TareaContext);
    const { obtenerTareas } = tareaContext;




    //Funcion para traer el proyecto actual y sus tareas
    const seleccionarProyecto = id => {
        proyectoActual(id); //Fija un proyecto como actual
        obtenerTareas(id); //Trae las tareas de ese proyecto

    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-project"
                onClick={() => seleccionarProyecto(proyecto._id)}

            >{proyecto.nombre} </button>
        </li>
    );
}

export default Proyecto;