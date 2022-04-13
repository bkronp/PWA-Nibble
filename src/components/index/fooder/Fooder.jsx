import React from 'react'
import Link from 'next/link'

const Fooder = () => {
  return (
    <div className="">
      <footer className="text-gray-600 body-font bg-gray-700">
        <div className="container px-2 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
             <img src='/Image/Logo.svg' className="w-16 h-16 text-white "/>
              <span className="ml-3 text-xl text-white">Nibble TI</span>
            </a>
            <p className="mt-2 text-sm text-white">Soluciones Informaticas</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/9 md:w-1/3 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">SOBRE NOSOTROS</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/">
                    <a className="text-white hover:text-green-300" >Inicio</a>
                  </Link>
                </li>
                <br />
                <li>
                  <Link href="/Producto">
                    <a className="text-white hover:text-green-300" >Productos</a>
                  </Link>
                </li>
                <br />
                <li>
                  <Link href="/Contacto">
                    <a className="text-white hover:text-green-300" >Contacto</a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">FORMA DE CONTACTO </h2>
              <nav className="list-none mb-10 ">
                <li>
                  <Link href="https://www.facebook.com/SistemasYRedesGdl">
                    <a className="text-white hover:text-green-300" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-7 w-1/4 px-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      33 3946 9083</a>
                  </Link>
                </li>
                <br />
                <li>
                  <Link href="mailto:adavalos@nibbleti.com?Subject=Interesado%20en%20sus%20">
                    <a className="text-white hover:text-green-300" >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-7 w-1/4 px-4 " viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      adavalos@nibbleti.com</a>
                  </Link>
                </li>
              </nav>
            </div>
            <img src='/Image/fondo.png' className=" opacity-80 text-white lg:w-1/3 md:w-1/4 "/>
          </div>
        </div>
        <div className="bg-gray-900">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">© 2020 Nibble TI —
              <a href="https://www.facebook.com/SistemasYRedesGdl" rel="noopener noreferrer" className="text-green-300 ml-1" target="_blank">@TODO LOS DERECHOS RESERVADOS</a>
            </p>
          </div>
        </div>
      </footer>
    </div>

  )
}

export default Fooder