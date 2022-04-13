import React, { useEffect } from 'react'
import Aos from 'aos'

const Provedores = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])
  return (
    <div>
    <div>
    <h1 className="mt-8 text-center text-4xl text-green-800 font-bold" data-aos="zoom-out-up">Algunos de nuestros clientes</h1>
    </div>
    <div className="flex flex-wrap items-center pt-8">
    <div className="w-full md:w-6/12 px-4 mr-auto ml-auto ">
      <div className="justify-center flex flex-wrap relative">
        <div className="my-4 w-full lg:w-6/12 px-4" data-aos="fade-right">
          <a href="https://akron.com.mx/" target="_blank">
            <div className="bg-green-600 shadow-lg rounded-lg text-center p-8">
              <img alt="..." className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src="https://pbs.twimg.com/profile_images/948587754132262912/md7bnklB_400x400.jpg"/>
              <p className="text-lg text-white mt-4 font-semibold">Akron Savings</p>
            </div>
          </a>
          <a href="https://www.hp.com/mx-es/home.html" target="_blank">
            <div className="bg-gray-800 shadow-lg rounded-lg text-center p-8 mt-8">
              <img alt="..." className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src="https://logodownload.org/wp-content/uploads/2014/04/hp-logo-1.png"/>
              <p className="text-lg text-white mt-4 font-semibold">HP</p>
            </div>
          </a>
          <a href="https://www.ibm.com/mx-es" target="_blank">
            <div className="bg-green-600 shadow-lg rounded-lg text-center p-8 mt-8">
              <img alt="..." className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src="https://logosvector.net/wp-content/uploads/2012/04/ibm-logo-vector-200x200.png"/>
              <p className="text-lg text-white mt-4 font-semibold">IBM</p>
            </div>
          </a>
        </div>
        <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16" data-aos="fade-left">
          <a href="http://www.imss.gob.mx/" target="_blank">
            <div className="bg-gray-800 shadow-lg rounded-lg text-center p-8">
              <img alt="..." className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src="https://cdn.worldvectorlogo.com/logos/imss-1.svg"/>
              <p className="text-lg text-white mt-4 font-semibold">
                IMSS
              </p>
            </div>
          </a>
          <a href="https://naturesweet.com/es/" target="_blank">
            <div className="bg-green-600 shadow-lg rounded-lg text-center p-8 mt-8">
              <img alt="..." className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src="https://trademarks.justia.com/media/og_image.php?serial=88061202"/>
              <p className="text-lg text-white mt-4 font-semibold">Naturesweet Tomatoes</p>
            </div>
          </a>
          <a href="https://portal.omnilife.com/start" target="_blank">
            <div className="bg-gray-800 shadow-lg rounded-lg text-center p-8 mt-8">
              <img alt="..." className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src="https://media.glassdoor.com/sqll/779799/omnilife-squarelogo-1583501720297.png"/>
              <p className="text-lg text-white mt-4 font-semibold">Omnilife</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  
    <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-16"  data-aos="zoom-in-down">
      <div className=" bg-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
        <i className="fas fa-drafting-compass text-xl">
        <img src='/Image/Logo.svg' className="w-14 h-14 text-white"/>
        </i>
      </div>
      <h3 className="text-3xl mb-2 font-semibold leading-normal">
        Nibble TI
      </h3>
      <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
        Con nuestras pólizas de servicio y mantenimiento estarás trabajando de una manera segura, fácil y cómoda con tod a tu
        infrestuctura, podras prevenir problemas costosos y pérdida de tiempo con nuestros servicios profecionales.
        Para Nibble sera un placer colaborar en sus proyectos y llevar con exito cada uno... 
      </p>
      <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
        !Protegerte no es una opción, con nuestras pólzas tendrás a un experto para que puedas
        trabajar seguro¡
      </p>
    
      <a href="https://www.facebook.com/SistemasYRedesGdl" target="_blank" className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150">
        Conocenos..
        <i className="fa fa-angle-double-right ml-1 leading-relaxed">

        </i>
      </a>
    </div>
  </div>
  </div>
  )
}

export default Provedores