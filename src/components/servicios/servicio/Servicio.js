import React, { useEffect } from 'react'
import Aos from 'aos'

const Servicio = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);
    return (
        <div>
            <div>
                <h1 className="mt-8 text-center text-5xl text-green-800 font-bold"  data-aos="flip-down">Conoce nuestros servicios</h1>
                <div className="md:flex md:justify-center md:space-x-10 md:px-14" data-aos="flip-left">

                    <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0" >
                        <div className="w-sm">
                            <img className="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg" alt="" />
                            <div className="mt-4 text-green-600 text-center">
                                <h1 className="text-xl font-bold">Mantenimiento  Integral</h1>
                                <p className="mt-4 text-gray-600">Logramos potenciar tus equipos, con ingenieros especializados 
                                para mantener operando los procesos internos de la empresa...</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div className="w-sm">
                            <img className="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3b242447f922540fbe750cab/fdf.jpg" alt="" />
                            <div className="mt-4 text-gray-700 text-center">
                                <h1 className="text-xl font-bold">Servicios de reparación</h1>
                                <p className="mt-4 text-gray-600">La póliza incluye el servivio de reparació en tus equipos, dentro de la vigencia de la misma, y solo
                                se aplicara el coste de refacción de previamente autorizado por el cliente. La póliza incluye la configuración de componentes externos,
                                como impresoras y camaras web...</p>
                            </div>
                        </div>
                    </div>


                    <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div className="w-sm">
                            <img className="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg" alt="" />
                            <div className="mt-4 text-green-600 text-center">
                                <h1 className="text-xl font-bold">Seguridad Informática</h1>
                                <p className="mt-4 text-gray-600">Implementacón de respaldos periódicos y medidas de seguridad pra protejer la 
                                información empresarial. Adminisreación de Politicas de Seguridad de T.I...</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div className="w-sm">
                            <img className="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg" alt="" />
                            <div className="mt-4 text-gray-700 text-center">
                                <h1 className="text-xl font-bold">Asistencia y mantenimiento Remoto</h1>
                                <p className="mt-4 text-gray-600">Nuestra primer opción para resolver de imediata la mayoria de los porblemas
                                es a través de conexión remota, usando generalmente los programas de TeamViewer o Anydesk...</p>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>

            <div>
                <div className="md:flex md:justify-center md:space-x-10 md:px-14" data-aos="flip-right">

                    <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div className="w-sm">
                            <img className="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg" alt="" />
                            <div className="mt-4 text-gray-700 text-center">
                                <h1 className="text-xl font-bold">Soporte y Administración de software</h1>
                                <p className="mt-4 text-gray-600">Administración de softwares adquiridos por la empresa y sus derivadas(Software adminstrativos 
                                y gestión de correos electronicos)...</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div className="w-sm">
                            <img className="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3b242447f922540fbe750cab/fdf.jpg" alt="" />
                            <div className="mt-4 text-green-600 text-center">
                                <h1 className="text-xl font-bold">Administración de redes LAN/WIFI</h1>
                                <p className="mt-4 text-gray-600">Administración profecional en accesos locales y remotas...</p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div className="w-sm">
                            <img className="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg" alt="" />
                            <div className="mt-4 text-gray-700 text-center">
                                <h1 className="text-xl font-bold">Consultoría Tecnológica</h1>
                                <p className="mt-4 text-gray-600">Consultoría profecional en servicios, software y equipos de cómputo actuales. Análisis de tecnología actual...</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div className="w-sm">
                            <img className="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg" alt="" />
                            <div className="mt-4 text-green-600 text-center">
                                <h1 className="text-xl font-bold">Asistencia técnica y mantenimiento a domicilio</h1>
                                <p className="mt-4 text-gray-600">La asistencia a domicilio tiene un plazo de 4 a 24 horas 
                                según la urgencia del reporte realizado por le cliente. Nuestros horarios de atención es en horario de oficina...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicio