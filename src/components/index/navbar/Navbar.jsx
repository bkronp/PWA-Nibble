import React, { useCallback, useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import { useRouter } from "next/router";


function Navbar() {

	const router = useRouter();


	const toRouter = useCallback(url => () => {
		router.push(url);
	}, [router]);

	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className=" shadow-sm w-full z-10">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<a href="/" class="flex">
								<img src='/Image/Logo.svg' className="w-10 h-10 text-white"/>
								<h1 className=" font-bold text-xl cursor-pointer">
									Nibble<span className="text-green-600">TI</span>
								</h1>
								</a>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link
										activeClass="Inicio"
										to="Inicio"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-green-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
										onClick={toRouter("/")}
									>
										Inicio
									</Link>
									<Link
										activeClass="Servicio"
										to="Servicio"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-green-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
										onClick={toRouter("/Servicio")}
									>
										Servicios
									</Link>
									<Link
										activeClass="Producto"
										to="Producto"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-green-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
										onClick={toRouter("/Producto")}
									>
										Productos
									</Link>

									<Link
										activeClass="Contacto"
										to="Contacto"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
										onClick={toRouter("/Contacto")}
									>
										Contacto
									</Link>
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-green-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Abrir menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<Link
									onClick={toRouter("/")}
									activeClass="Inicio"
									to="Inicio"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-green-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Inicio
								</Link>
								<Link
									onClick={toRouter("/Servicio")}
									activeClass="Servicio"
									to="Servicio"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-green-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Servicios
								</Link>

								<Link
									onClick={toRouter("/Producto")}
									activeClass="Pruducto"
									to="Pruducto"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-green-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Productos
								</Link>

								<Link
									onClick={toRouter("/Contacto")}
									activeClass="Contacto"
									to="Contacto"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-green-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Contacto
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;