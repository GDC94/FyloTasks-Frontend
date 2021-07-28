import React from 'react';
import { Link } from "react-router-dom";
import banner from "../../images/banner-image-1-1.png";
import google from "../../images/partner-1-2.png";
import box from "../../images/partner-1-3.png";
import pay from "../../images/partner-1-1.png";
import circle from "../../images/icons8-círculo-48.png";
import circle2 from "../../images/icons8-orange-circle-48.png";
import circle3 from "../../images/icons8-yellow-circle-48.png";
import security from "../../images/icons8-seguridad-96.png";
import soporte from "../../images/icons8-mensajería-96.png";
import devices from "../../images/icons8-múltiples-dispositivos-96.png";
import folder from "../../images/icons8-carpeta-96.png";
import man from "../../images/cta-2-1.png";
import montaje from "../../images/boost-1-1.png";
import check from "../../images/icons8-cuenta-verificada-48.png";


const Landing = () => {
    return (

        <div className="land">


            <section className="container__landing">
                <header className="header__landing">
                    <svg width="176" height="52" xmlns="http://www.w3.org/2000/svg"><g fill="#a10761" fill-rule="evenodd"><path d="M0 16.372v.128l29.754 13.764 29.859-13.811v-.035L29.754 2.608 0 16.372zm10.727.064l19.028-8.802 19.03 8.802-19.031 8.801-19.027-8.801zM29.754 35.61L0 22.052v5.014l29.754 13.59L59.613 27.02v-5.015L29.754 35.61zm0 10.17L0 32.22v5.015l29.754 13.591L59.613 37.19v-5.014L29.754 45.78zM169.216 26.22a8.564 8.564 0 0 0-2.285-5.892 7.675 7.675 0 0 0-2.473-1.768 7.259 7.259 0 0 0-3.015-.636 7.259 7.259 0 0 0-3.015.636 7.674 7.674 0 0 0-2.473 1.768 8.565 8.565 0 0 0-2.285 5.893 8.564 8.564 0 0 0 2.285 5.893 7.674 7.674 0 0 0 2.473 1.767 7.258 7.258 0 0 0 3.015.637 7.258 7.258 0 0 0 3.015-.637 7.675 7.675 0 0 0 2.473-1.767 8.563 8.563 0 0 0 2.285-5.893zm6.784 0c0 2.044-.377 3.937-1.13 5.681a13.849 13.849 0 0 1-3.11 4.526c-1.319 1.273-2.866 2.279-4.64 3.017-1.775.739-3.667 1.108-5.677 1.108s-3.894-.37-5.653-1.108a14.659 14.659 0 0 1-4.617-3.04 14.116 14.116 0 0 1-3.11-4.55c-.753-1.744-1.13-3.622-1.13-5.633 0-1.98.385-3.842 1.154-5.586a14.718 14.718 0 0 1 3.133-4.573 14.457 14.457 0 0 1 4.617-3.064c1.759-.739 3.627-1.108 5.606-1.108 2.01 0 3.902.369 5.677 1.108 1.774.738 3.321 1.744 4.64 3.017 1.32 1.272 2.356 2.789 3.11 4.549.753 1.76 1.13 3.645 1.13 5.657zm-31.422 13.483a9.087 9.087 0 0 1-1.814.613 9.217 9.217 0 0 1-2.096.236c-1.005 0-1.971-.134-2.898-.4a6.347 6.347 0 0 1-2.426-1.297c-.69-.597-1.24-1.375-1.649-2.334-.408-.958-.612-2.113-.612-3.465V.717h6.925v31.16c0 1.132.228 1.91.683 2.334.456.425.997.637 1.625.637.786 0 1.54-.236 2.262-.707v5.562zM130.02 12.55l-12.249 32.386c-.91 2.42-2.104 4.164-3.58 5.233-1.476 1.068-3.235 1.603-5.277 1.603a8.4 8.4 0 0 1-1.036-.071 7.784 7.784 0 0 1-1.083-.212l-2.262-6.317a8.974 8.974 0 0 0 1.65.59 6.61 6.61 0 0 0 1.6.211c1.069 0 2.042-.243 2.922-.73.879-.488 1.554-1.391 2.025-2.711l.943-2.734-10.506-27.248h7.396l6.266 17.536 5.889-17.536h7.302zm-28.502-4.102H83.806v8.769h17.478v5.94H83.806v16.688h-7.16V2.179h24.873v6.27z" /></g></svg>
                    <ul>
                        <li>Nosotros</li>
                        <li>Testimonios</li>
                        <Link className="linker" to={"/nueva-cuenta"}>Registrarse</Link>
                    </ul>
                </header>
            </section>

            <div className="burbuja">
                <img className="circle" src={circle} alt="" />
                <img className="circle2" src={circle2} alt="" />
                <img className="circle3" src={circle3} alt="" />

            </div>

            <section className="main-section">
                <div className="info-landing">
                    <div className="title-land">
                        <p className="title"> Fylo te permite almacenar todos tus proyectos de una
                            manera <span className="span-color">rapida, facil y segura</span>
                        </p>
                        <p className="empresas">Ya confian en nosotros</p>
                        <p className="support">

                            <img className="support-img" src={google} alt="" />
                            <img className="support-img" src={box} alt="" />
                            <img className="support-img" src={pay} alt="" />
                        </p>
                        <button className="info-button"><Link to={"/login"}>Comenzar</Link></button>
                    </div>

                    <img className="banner" src={banner} alt="" />




                </div>
            </section>




            <section className="whyfylo">

                <div className="features">
                    <div className="features2">
                        <div class="feature">
                            <img src={devices} alt="Access anywhere" />
                            <h2>Accesibilidad</h2>

                        </div>
                        <div class="feature">
                            <img src={security} alt="Security" />
                            <h2>Seguridad</h2>

                        </div>
                    </div>


                    <div className="rocket">
                        <img src={man} alt="" width="400px" />
                    </div>


                    <div className="features2">
                        <div class="feature">
                            <img src={soporte} alt="collaboration" />
                            <h2>Soporte las 24hs</h2>

                        </div>
                        <div class="feature">
                            <img src={folder} alt="Any file" />
                            <h2>Almacenamiento</h2>

                        </div>
                    </div>
                </div>

            </section>



            <section className="bost">
                <div className="container__landing">
                    <div className="info-landing">
                        <div className="organized">
                            <h1>¿Como comenzar?</h1>
                            <div className="list">
                                <p className="pe"><img src={check} alt="" />Introduzca sus datos y registre su cuenta</p>
                                <p className="pe"><img src={check} alt="" />Ya en el panel de usuarios, verás la opción "Nuevo proyecto"</p>
                                <p className="pe"><img src={check} alt="" />Creá un proyecto y comenzá a agregarle tareas</p>
                                <p className="pe"><img src={check} alt="" />Podrás editarlas o eliminarlas</p>
                                <p className="pe"><img src={check} alt="" />¿Terminaste ese proyecto? Creá otro !</p>
                            </div>
                        </div>
                        <img className="cohete" alt="" src={montaje} />
                    </div>
                </div>


            </section>


            <div class="early_access">
                <div className="footer-info">
                    <h2>Si tiene alguna duda o pregunta, nuestro equipo de asistencia estará encantado de ayudarle.</h2>

                </div>
                <form class="form">
                    <input type="email" id="mail" placeholder="email@example.com" />
                    <button type="submit" id="submit" className="button">  Enviar </button>
                </form>
            </div>

            <footer class="main-footer">
                <div class="logo">


                    <svg width="176" height="52" xmlns="http://www.w3.org/2000/svg"><g fill="#a10761" fill-rule="evenodd"><path d="M0 16.372v.128l29.754 13.764 29.859-13.811v-.035L29.754 2.608 0 16.372zm10.727.064l19.028-8.802 19.03 8.802-19.031 8.801-19.027-8.801zM29.754 35.61L0 22.052v5.014l29.754 13.59L59.613 27.02v-5.015L29.754 35.61zm0 10.17L0 32.22v5.015l29.754 13.591L59.613 37.19v-5.014L29.754 45.78zM169.216 26.22a8.564 8.564 0 0 0-2.285-5.892 7.675 7.675 0 0 0-2.473-1.768 7.259 7.259 0 0 0-3.015-.636 7.259 7.259 0 0 0-3.015.636 7.674 7.674 0 0 0-2.473 1.768 8.565 8.565 0 0 0-2.285 5.893 8.564 8.564 0 0 0 2.285 5.893 7.674 7.674 0 0 0 2.473 1.767 7.258 7.258 0 0 0 3.015.637 7.258 7.258 0 0 0 3.015-.637 7.675 7.675 0 0 0 2.473-1.767 8.563 8.563 0 0 0 2.285-5.893zm6.784 0c0 2.044-.377 3.937-1.13 5.681a13.849 13.849 0 0 1-3.11 4.526c-1.319 1.273-2.866 2.279-4.64 3.017-1.775.739-3.667 1.108-5.677 1.108s-3.894-.37-5.653-1.108a14.659 14.659 0 0 1-4.617-3.04 14.116 14.116 0 0 1-3.11-4.55c-.753-1.744-1.13-3.622-1.13-5.633 0-1.98.385-3.842 1.154-5.586a14.718 14.718 0 0 1 3.133-4.573 14.457 14.457 0 0 1 4.617-3.064c1.759-.739 3.627-1.108 5.606-1.108 2.01 0 3.902.369 5.677 1.108 1.774.738 3.321 1.744 4.64 3.017 1.32 1.272 2.356 2.789 3.11 4.549.753 1.76 1.13 3.645 1.13 5.657zm-31.422 13.483a9.087 9.087 0 0 1-1.814.613 9.217 9.217 0 0 1-2.096.236c-1.005 0-1.971-.134-2.898-.4a6.347 6.347 0 0 1-2.426-1.297c-.69-.597-1.24-1.375-1.649-2.334-.408-.958-.612-2.113-.612-3.465V.717h6.925v31.16c0 1.132.228 1.91.683 2.334.456.425.997.637 1.625.637.786 0 1.54-.236 2.262-.707v5.562zM130.02 12.55l-12.249 32.386c-.91 2.42-2.104 4.164-3.58 5.233-1.476 1.068-3.235 1.603-5.277 1.603a8.4 8.4 0 0 1-1.036-.071 7.784 7.784 0 0 1-1.083-.212l-2.262-6.317a8.974 8.974 0 0 0 1.65.59 6.61 6.61 0 0 0 1.6.211c1.069 0 2.042-.243 2.922-.73.879-.488 1.554-1.391 2.025-2.711l.943-2.734-10.506-27.248h7.396l6.266 17.536 5.889-17.536h7.302zm-28.502-4.102H83.806v8.769h17.478v5.94H83.806v16.688h-7.16V2.179h24.873v6.27z" /></g></svg>
                </div>



            </footer>


            <footer>
                <p class="atribution">
                    <a href="!#">Coded by German Derbes Catoni</a>.
                </p>
            </footer>
        </div>






    );
}

export default Landing;