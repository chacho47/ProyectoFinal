import React from 'react';
import logoclinica from '../img/logoclinica.png';
import uno from '../img/uno.png';
import amanus from '../img/amanus.png';
import lafarmacia from '../img/lafarmacia.png';
import vallesalud from '../img/vallesalud.png';
import emec from '../img/emec.png';
import clinicasarmiento from '../img/clinicasarmiento.png';

const Footer = () => {
    return (
        <footer className='justify-content-center'>
            <section className='bg-dark py-3 text-center prefooter'>
                <div className='row'>
                    <div className='col-md-4 col-sm-6 mb-3'>
                        <img className='w-25' src={amanus} alt=""/>
                    </div>
                    <div className='col-md-4 col-sm-6 mb-3'>
                        <img className='w-25' src={uno} alt=""/>
                    </div>
                    <div className='col-md-4 col-sm-6 mb-3'>
                        <img className='w-25' src={lafarmacia} alt=""/>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <img className='w-25' src={vallesalud} alt=""/>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <img className='w-25' src={emec} alt=""/>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <img className='w-25' src={clinicasarmiento} alt=""/>
                    </div>
                </div>
            </section>
            <section className='bg-light text-dark'>
                <div className='container'>
                <div className='row'>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                            <h3 className='mb-3'>Nosotros</h3>
                            <img
                             className='w-50'
                             src={logoclinica} 
                             alt="logo de la clinica"/>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <h3 className='mb-3'>Clinica Favaloro</h3>
                        <ul className='list-unstyled'>
                            <li>Inicio</li>
                            <li>Nuestra empresa</li>
                            <li>Novedades</li>
                            <li>Contactos</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <h3 className='mb-3'>Servicios</h3>
                        <ul className='list-unstyled'>
                            <li>Pacientes</li>
                            <li>Nuestros profesionales</li>
                            <li>Residencias Medicas</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <h3 className='mb-3'>Informacion Util</h3>
                        <ul className='list-unstyled'>
                            <li>Turnos</li>
                            <li>Preguntas frecuentes</li>
                            <li>Horarios de atencion</li>
                            <li>Trabaja con nosotros</li>
                        </ul>
                    </div>
                </div>
                </div>
                <hr/>
                <div className='Container justify-content text-center'>
                    <p>Todos los derechos reservados - Comision 2i</p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;