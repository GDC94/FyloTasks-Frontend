import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import ProyectoContext from '../../context/Proyectos/proyectoContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import AlertaContext from "../../context/alertas/alertaContext";

const ListadoProyectos = () => {


    // Extrar proyectos de state inicial
    const proyectoContext = useContext(ProyectoContext);
    const { mensaje, proyectos, obtenerProyectos } = proyectoContext;

    //Extraigo valores del contexto
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
        obtenerProyectos();
        // eslint-disable-next-line
    }, [mensaje]);


    // revisar si proyectos tiene contenido
    if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;





    return (

        <ul className="listado-proyectos">

            {alerta ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>) : null}
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto._id}
                        timeout={400}
                        className="proyecto"
                    >
                        <Proyecto
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}

export default ListadoProyectos;