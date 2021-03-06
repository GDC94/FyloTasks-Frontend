import React, { useContext } from 'react';
import TareaContext from "../../context/Tareas/tareaContext";
import ProyectoContext from "../../context/Proyectos/proyectoContext";





const Tarea = ({ tarea }) => {

    const proyectoContext = useContext(ProyectoContext);
    const { proyecto } = proyectoContext;
    //EXTRAIGO EL PROYECTO
    const [proyectoActual] = proyecto;
    //Obtenemos la funcion del context de tarea.
    const tareaContext = useContext(TareaContext);
    const { eliminarTarea, obtenerTareas, actualizarTarea, guardarTareaActual } = tareaContext;





    // Función que se ejecuta cuando el usuario presiona el btn de eliminar tarea
    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id)
    }



    // Función que modifica el estado de las tareas
    const cambiarEstado = tarea => {
        if (tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true
        }
        actualizarTarea(tarea);
    }

    //Con esta fn agregamos una tarea para poder editarla
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
    }




    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                {tarea.estado
                    ?
                    (
                        <button
                            type="button"
                            className="completo"
                            onClick={() => cambiarEstado(tarea)}
                        >Completo</button>
                    )

                    :

                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => cambiarEstado(tarea)}
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => seleccionarTarea(tarea)}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(tarea.id)}
                >Eliminar</button>
            </div>
        </li>
    );
}

export default Tarea;
