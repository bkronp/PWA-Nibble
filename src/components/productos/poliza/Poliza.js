import React, { useEffect } from 'react'
import Aos from 'aos'

const Poliza = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div>
            <h1 className="mt-8 text-center text-5xl text-green-800 font-bold" data-aos="zoom-out-up">Conoce nuestros productos</h1>
            <div className="bg-white dark:bg-gray-800">
                <div className="container px-6 py-8 mx-auto">
                    <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
                        <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-green-500 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700" data-aos="zoom-in">
                            <div className="flex-shrink-0">
                                <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-green-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                                    Póliza Remota
                                </h2>
                            </div>
                            <div className="flex-shrink-0">
                                <span
                                    className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100"
                                >
                                    $2,500.00
                                </span>
                                <span className="text-gray-500 dark:text-gray-400">
                                    +IVA 5 Horas
                                </span>
                            </div>
                            <ul className="flex-1 space-y-4 list-disc text-justify">
                                <li className="text-gray-500 dark:text-gray-400">
                                    Mantenimiento Integral
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Servicios de reparación
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Seguridad Informática
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Soporte y Administración de software
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Administración de redes LAN/WIFI
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Consultoría Tecnológica
                                </li>
                                <br/>
                                <p className='text-center'>Horas extra $430.00</p>
                            </ul>
                        </div>

                        <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-green-500 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700" data-aos="zoom-in-up">
                            <div className="flex-shrink-0">
                                <h2
                                    className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-green-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700"
                                >
                                    Póliza Starter
                                </h2>
                            </div>
                            <div className="flex-shrink-0">
                                <span
                                    className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100"
                                >
                                    $4,500.00
                                </span>
                                <span className="text-gray-500 dark:text-gray-400">
                                    +IVA 10 Horas
                                </span>
                            </div>
                            <ul className="flex-1 space-y-4 list-disc text-justify">
                                <li className="text-gray-500 dark:text-gray-400">
                                    Mantenimiento Integral
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Servicios de reparación
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Seguridad Informática
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Asistencia y mantenimiento Remoto
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Soporte y Administración de software
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Administración de redes LAN/WIFI
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Consultoría Tecnológica
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Asistencia técnica y mantenimiento a domicilio
                                </li>
                                <br/>
                                <p className='text-center'>Horas extra $380.00</p>
                            </ul>
                        </div>

                        <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-green-500 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700" data-aos="zoom-in-down">
                            <div className="flex-shrink-0">
                                <h2
                                    className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-green-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700"
                                >
                                    Póliza P.Y.M.E
                                </h2>
                            </div>
                            <div className="flex-shrink-0">
                                <span
                                    className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100"
                                >
                                    $7,300.00
                                </span>
                                <span className="text-gray-500 dark:text-gray-400">
                                    +IVA 18 Horas
                                </span>
                            </div>
                            <ul className="flex-1 space-y-4 list-disc text-justify">
                                <li className="text-gray-500 dark:text-gray-400">
                                    Mantenimiento Integral
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Servicios de reparación
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Seguridad Informática
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Asistencia y mantenimiento Remoto
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Soporte y Administración de software
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Administración de redes LAN/WIFI
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Consultoría Tecnológica
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Asistencia técnica y mantenimiento a domicilio
                                </li>
                                <br/>
                                <p className='text-center'>Horas extra $330.00</p>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800">
                <div className="container px-6 py-8 mx-auto">
                    <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
                        <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-green-500 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700" data-aos="zoom-in-left">
                            <div className="flex-shrink-0">
                                <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-green-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                                    Póliza Business
                                </h2>
                            </div>
                            <div className="flex-shrink-0">
                                <span
                                    className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100"
                                >
                                    $8,700.00
                                </span>
                                <span className="text-gray-500 dark:text-gray-400">
                                    +IVA 24 Horas
                                </span>
                            </div>
                            <ul className="flex-1 space-y-4 list-disc text-justify">
                            
                                <li className="text-gray-500 dark:text-gray-400">
                                    Mantenimiento Integral
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Servicios de reparación
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Seguridad Informática
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Asistencia y mantenimiento Remoto
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Soporte y Administración de software
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Administración de redes LAN/WIFI
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Consultoría Tecnológica
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Asistencia técnica y mantenimiento a domicilio
                                </li>
                                <br/>
                                <p className='text-center'>Horas extra $300.00</p>
                            </ul>
                        </div>

                        <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-green-500 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700" data-aos="zoom-in-right">
                            <div className="flex-shrink-0">
                                <h2
                                    className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-green-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700"
                                >
                                    Póliza Nibble
                                </h2>
                            </div>
                            <div className="flex-shrink-0">
                                <span
                                    className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100"
                                >
                                    $12,500.00
                                </span>
                                <span className="text-gray-500 dark:text-gray-400">
                                    +IVA 50 Horas
                                </span>
                            </div>
                            <ul className="flex-1 space-y-4 list-disc text-justify">
                                <li className="text-gray-500 dark:text-gray-400">
                                    Mantenimiento Integral
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Servicios de reparación
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Seguridad Informática
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Asistencia y mantenimiento Remoto
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Soporte y Administración de software
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Administración de redes LAN/WIFI
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Consultoría Tecnológica
                                </li>
                                <li className="text-gray-500 dark:text-gray-400">
                                    Asistencia técnica y mantenimiento a domicilio
                                </li>
                                <br/>
                                <p className='text-center'>Horas extra $200.00</p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full min-h-fit mb-8 flex justify-center items-center" data-aos="flip-up">
                <div
                    class="w-3/5 bg-green-100 rounded-lg shadow-sm p-5 border-dashed border border-green-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
                    <div class="flex flex-col sm:flex-row justify-start items-center gap-4">
                        <div class="bg-green-200 flex p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg></div>
                        <div class="text-center sm:text-left">
                            <h1 class="text-gray-700 font-bold tracking-wider">Al contratar cualquier póliza por 6 meses...</h1>
                            <p class="text-gray-500 font-semibold">GRATIS el 7° mes y el costo de la hora extra sera solo de $150.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poliza