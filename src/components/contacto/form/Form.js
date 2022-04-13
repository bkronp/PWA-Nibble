import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from '../form/contacto.module.css'
import Aos from 'aos';


const Formulario = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


    return (
        <>
            <Formik
                initialValues={{
                    nombre: '',
                    compañia: '',
                    dirección: '',
                    ciudad: '',
                    estado: '',
                    codigo_postal: '',
                    telefono: '',
                    correo: '',
                    comentarios: ''
                }}
                validate={(valores) => {
                    let errores = {};

                    // Validacion nombre
                    if (!valores.nombre) {
                        errores.nombre = 'Por favor ingresa un nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                        errores.nombre = 'El nombre solo puede contener letras y espacios'
                    }

                    // Validacion compañia
                    if (!valores.compañia) {
                        errores.compañia = 'Por favor ingresa una compañia'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.compañia)) {
                        errores.compañia = 'Solo puede contener letras y espacios'
                    }

                    // Validacion dirección
                    if (!valores.dirección) {
                        errores.dirección = 'Por favor ingresa una dirección'
                    }

                    // Validacion ciudad
                    if (!valores.ciudad) {
                        errores.ciudad = 'Por favor ingresa una ciudad'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.ciudad)) {
                        errores.ciudad = 'El nombre solo puede contener letras y espacios'
                    }

                    // Validacion estado
                    if (!valores.estado) {
                        errores.estado = 'Por favor ingresa un estado'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.estado)) {
                        errores.estado = 'El nombre solo puede contener letras y espacios'
                    }

                    // Validacion codigo_postal
                    if (!valores.codigo_postal) {
                        errores.codigo_postal = 'Por favor ingresa un codigo_postal'
                    } else if (!/^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/.test(valores.codigo_postal)) {
                        errores.codigo_postal = 'En codigo postal solo figite numeros '
                    }

                    // Validacion telefono
                    if (!valores.telefono) {
                        errores.telefono = 'Por favor ingresa un telefono'
                    } else if (!/^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}$/.test(valores.telefono)) {
                        errores.telefono = 'el telefono solo puede contener solo nuemros sin espacio'
                    }

                    // Validacion correo
                    if (!valores.correo) {
                        errores.correo = 'Por favor ingresa un email'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                        errores.correo = 'El email solo puede contener letras, numeros, puntos, guiones y guion bajo.'
                    }

                    return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                    resetForm();
                    console.log('Formulario enviado');
                    cambiarFormularioEnviado(true);
                    setTimeout(() => cambiarFormularioEnviado(false), 2000);
                }}
            >
                {({ errors }) => (
                    <div className={styled.contenedor}>
                        <div className={styled.contactUs}>
                            <div className={styled.title}  data-aos="zoom-in">
                                <h1>Contacto</h1>
                            </div>
                            <div className={styled.box}>
                                {/* Formulario */}
                                <div className={styled.contact} data-aos="fade-down-right">
                                    <div className={styled.form}>
                                        <h7>¿Tienes dudas o comentarios?</h7>
                                        <Form >
                                            <div className={styled.formBox}>
                                                <div className={styled.row50}>
                                                    <div className={styled.inputBox}>
                                                        <label htmlFor="nombre">Nombre</label>
                                                        <Field
                                                            type="text"
                                                            id="nombre"
                                                            name="nombre"
                                                            placeholder="Nombre*"
                                                        />
                                                        <ErrorMessage name="nombre" component={() => (<div className={styled.error}>{errors.nombre}</div>)} />
                                                    </div>
                                                    <div className={styled.inputBox}>
                                                        <label htmlFor="compañia">Compañia</label>
                                                        <Field
                                                            type="text"
                                                            id="compañia"
                                                            name="compañia"
                                                            placeholder="Compañia*"
                                                        />
                                                        <ErrorMessage name="compañia" component={() => (<div className={styled.error}>{errors.compañia}</div>)} />
                                                    </div>
                                                </div>
                                                <div className={styled.row50}>
                                                    <div className={styled.inputBox}>
                                                        <label htmlFor="dirección">Dirección</label>
                                                        <Field
                                                            type="text"
                                                            id="dirección"
                                                            name="dirección"
                                                            placeholder="Dirección*"
                                                        />
                                                        <ErrorMessage name="dirección" component={() => (<div className={styled.error}>{errors.dirección}</div>)} />
                                                    </div>
                                                    <div className={styled.inputBox}>
                                                        <label htmlFor="ciudad">Ciudad</label>
                                                        <Field
                                                            type="text"
                                                            id="ciudad"
                                                            name="ciudad"
                                                            placeholder="Ciudad*"
                                                        />
                                                        <ErrorMessage name="ciudad" component={() => (<div className={styled.error}>{errors.ciudad}</div>)} />
                                                    </div>
                                                </div>
                                                <div className={styled.row100}>
                                                    <div className={styled.inputBox}>
                                                        <label htmlFor="estado">Estado</label>
                                                        <Field
                                                            type="text"
                                                            id="estado"
                                                            name="estado"
                                                            placeholder="Estado*"
                                                        />
                                                        <ErrorMessage name="estado" component={() => (<div className={styled.error}>{errors.estado}</div>)} />
                                                    </div>
                                                    <div className={styled.inputBox}>
                                                        <label htmlFor="codigo_postal">Codigo postal</label>
                                                        <Field
                                                            type="text"
                                                            id="codigo_postal"
                                                            name="codigo_postal"
                                                            placeholder="Codigo Postal*"
                                                        />
                                                        <ErrorMessage name="codigo_postal" component={() => (<div className={styled.error}>{errors.codigo_postal}</div>)} />
                                                    </div>
                                                    <div className={styled.inputBox}>
                                                        <label htmlFor="telefono">Telefono</label>
                                                        <Field
                                                            type="text"
                                                            id="telefono"
                                                            name="telefono"
                                                            placeholder="Telefono*"
                                                        />
                                                        <ErrorMessage name="telefono" component={() => (<div className={styled.error}>{errors.telefono}</div>)} />
                                                    </div>
                                                    <div className={styled.inputBox}>
                                                        <label htmlFor="email">Email</label>
                                                        <Field
                                                            type="text"
                                                            id="correo"
                                                            name="correo"
                                                            placeholder="correo@correo.com*"
                                                        />
                                                        <ErrorMessage name="correo" component={() => (<div className={styled.error}>{errors.correo}</div>)} />
                                                    </div>
                                                </div>

                                                <div className={styled.row100}>
                                                    <div className={styled.inputBox}>
                                                        <Field name="Conemtarios" as="textarea" placeholder="Comentarios*" />
                                                        
                                                    </div>
                                                </div>

                                                <div className={styled.row100}>
                                                    <div className={styled.inputBox}>
                                                        <input type='submit' value='Enviar' />
                                                        {formularioEnviado && <p className={styled.exito}>Formulario enviado con exito!</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                                {/* Contacto */}
                                <div >
                                    <div className={styled.info} data-aos="fade-down-left">
                                        <h7>Formas de contacto</h7>
                                        <div className={styled.infoBox}>
                                            <div >
                                                <span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg></span>
                                                <p>Sierra Nevada 1351 44340 Guadalajara, Jalisco, México</p>
                                            </div>
                                            <div>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                </svg></span>
                                                <a href="mailto:adavalos@nibbleti.com?Subject=Interesado%20en%20sus%20">adavalos@nibbleti.com</a>
                                            </div>
                                            <div>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                </svg></span>
                                                <a href='https://www.facebook.com/SistemasYRedesGdl' target="_blank">+52 33 3946 9083</a>
                                            </div>

                                            <ul className={styled.sci}>
                                                <li>
                                                    <a href='https://www.facebook.com/SistemasYRedesGdl' target="_blank"><img className={styled.img} src="/Image/facebook.png" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </Formik>
        </>
    )
}

export default Formulario