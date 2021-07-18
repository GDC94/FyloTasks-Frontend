import React, { Fragment, useContext } from 'react';
import Tarea from "./Tarea";
import ProyectoContext from "../../context/Proyectos/proyectoContext";
import TareaContext from "../../context/Tareas/tareaContext";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoTareas = () => {


    //Obtener el state del form
    const proyectoContext = useContext(ProyectoContext);
    const { proyecto, eliminarProyecto } = proyectoContext;


    //Obtenemos las tareas del proyecto.
    const tareaContext = useContext(TareaContext);
    const { tareasproyecto } = tareaContext;


    //Si no hay un proyecto seleccionado, mostramos un mensaje:
    if (!proyecto) return <h2>selecciona un proyecto</h2>
    const [proyectoActual] = proyecto;



    //Fn para eliminar un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual._id)
    }

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre} </h2>

            <ul className="listado-tareas">
                {tareasproyecto.length === 0

                    ?
                    (<li className="tarea"><p>No hay tareas</p></li>)
                    :
                    <TransitionGroup>
                    {tareasproyecto.map(tarea => (
                        <CSSTransition
                            key={tarea.id}
                            timeout={300}
                            classNames="tarea"
                        >
                            <Tarea 
                                tarea={tarea}
                            />
                        </CSSTransition>
                    ))}
                    </TransitionGroup>

                }


            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>




        </Fragment>
    );
}

export default ListadoTareas;