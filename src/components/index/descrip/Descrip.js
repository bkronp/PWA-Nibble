import React, { useEffect } from 'react'
import Aos from 'aos'

const Descrip = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);
    return (
        <div>
            <main className="py-12 md:px-20 sm:px-14 px-6">
                <div className="sm:flex items-center shadow-md" data-aos="fade-right">
                    <div className="md:px-10 sm:px-5">
                        <h1 className="text-gray-800 font-bold text-2xl my-2">¿Quienes somos?</h1>
                        <p className="text-gray-700 mb-2 md:mb-6">
                            Empresa Mexicana, representante de Bluesun solar Canadian e importador de tecnología Led ligthing....</p>
                    </div>
                    <div className='relative overflow-hidden bg-no-repeat bg-cover'>
                        <img className="bg-cover hover:scale-110 transition duration-300 ease-in-out" src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    </div>
                </div>
                <div className="mt-6 md:flex space-x-6">
                    <div className="shadow-md" data-aos="fade-up">
                        <img src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
                        <div className="px-4">
                            <h1 className="mt-3 text-gray-800 text-2xl font-bold my-2">Misión</h1>
                            <p className="text-gray-700 mb-2">
                                Compartir las mejores propuestas de tecnología para empresarios y usuarios domésticos que tenga la visión de ahorrar al máximo en su recibo CFE....</p>
                        </div>
                    </div>
                    <div className="shadow-md space-x-6" data-aos="fade-down">
                        <img src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
                        <div className="px-6">
                            <h1 className="mt-3 text-gray-800 text-2xl font-bold my-2">Visión</h1>
                            <p className="text-gray-700 mb-2">
                                Ser desarrolladores de integraciones inteligentes para personas con visiones globales....</p>
                        </div>
                    </div>
                    <div className="shadow-md" data-aos="fade-up">
                        <img src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
                        <div className="px-4">
                            <h1 className="mt-3 text-gray-800 text-2xl font-bold my-2">Valores</h1>
                            <p className="text-gray-700 mb-2">Honestidad, Sinceridad, Fidelidad y Amistad....</p>
                        </div>
                    </div>
                </div>
                <div className="sm:flex items-center shadow-md mt-10" data-aos="fade-left">
                    <div>
                        <img className="bg-cover" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    </div>
                    <div className="md:px-10 sh sm:px-5">
                        <h1 className="text-gray-800 font-bold text-2xl my-2">Objetivos</h1>
                        <p className="text-gray-700 mb-2 md:mb-6">
                            Poner al alcance del mercado nacional, todas las nuevas tecnologías y propuestas que hay en el primer mundo con las mejores opciones fiscales en México....</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Descrip