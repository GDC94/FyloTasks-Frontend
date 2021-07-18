import React, { useContext, useState, useEffect } from 'react';
import ProyectoContext from "../../context/Proyectos/proyectoContext";
import TareaContext from "../../context/Tareas/tareaContext";


const FormTarea = () => {



    /*Traemos el contecto para saber si el proyecto esta activo.Si lo está,
    mostramos el formulario para agregar tarea, sino, no.*/
    const proyectoContext = useContext(ProyectoContext);
    const { proyecto } = proyectoContext;

    //Obtenemos la funcion del context de tarea.
    const tareaContext = useContext(TareaContext);
    const { tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea, limpiarTarea } = tareaContext;





    // Effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if (tareaseleccionada !== null) {
            guardarTarea(tareaseleccionada)
        } else {
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada]);




    // State del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })



    //Si no hay un proyecto seleccionado, mostramos un mensaje:
    if (!proyecto) return null



    //Arr destructuring para extraer del estado el proyecto que se encuentra seleccionado
    const [proyectoActual] = proyecto;


    // extraer el nombre del proyecto
    const { nombre } = tarea;



    // Leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }




    const onSubmit = e => {
        e.preventDefault();
        //validar
        if (nombre.trim() === '') {
            validarTarea();
            return;
        }

        // Reviso si es edición o si es nueva tarea
        if (tareaseleccionada === null) {
            // agregar la nueva tarea al state de tareas
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea);
        } else {
            // actualizar tarea existente
            actualizarTarea(tarea);

            // Elimina la tarea seleccionada del state
            limpiarTarea();
        }



        //Obtener las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);
        //reiniciar form
        guardarTarea({
            nombre: ''
        })


    }



    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada ? 'Editar tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>

            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}


        </div>
    );
}

export default FormTarea;