import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import FooterLayout from "@/Layouts/FooterLayout";
// import Header from "@/Layouts/Header";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import Carde from "@/Components/cardniveau";
import Cardts from "@/Components/cardts";


export default function TechnicienS({ auth, header }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <Head title="Accueil" />
            <div className="max-h-screen bg-gray-100">
                <nav className="bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                        <div className="flex justify-between h-16 ">
                            <div className="flex justify-end">
                                <div className="shrink-0 flex items-center ">
                                    <Link href="/">
                                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                    </Link>
                                </div>

                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        href={route("dashboard")}
                                        active={route().current("dashboard")}
                                    >
                                        Docs
                                    </NavLink>
                                    <NavLink
                                        href={route("dashboard")}
                                        // active={route().current("dashboard")}
                                    >
                                        Contact
                                    </NavLink>
                                    <NavLink
                                        href={route("dashboard")}
                                        // active={route().current("dashboard")}
                                    >
                                        Institut
                                    </NavLink>
                                    <NavLink
                                        href={route("dashboard")}
                                        // active={route().current("dashboard")}
                                    >
                                        Emplois
                                    </NavLink>
                                </div>
                            </div>

                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="ml-3 relative">
                                    {auth.user ? (
                                        <Link
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            href={route("dashboard")}
                                        >
                                            Espace Stagiaire
                                        </Link>
                                    ) : (
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                    >
                                                        Espace Stagiaire
                                                        <svg
                                                            className="ml-2 -mr-0.5 h-4 w-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("register")}
                                                >
                                                    Inscription
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route("login")}
                                                >
                                                    Connextion
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    )}
                                </div>
                            </div>

                            <div className="-mr-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
                                        )
                                    }
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ----------------------------| MOBILE |--------------------------------------------- */}

                    <div
                        className={
                            (showingNavigationDropdown ? "block" : "hidden") +
                            " sm:hidden"
                        }
                    >
                        <div className="pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Dashboard
                            </ResponsiveNavLink>
                        </div>
                        <hr />
                        <div className="my-1 flex flex-col justify-center">
                            <p className="mr-1">Espace Stagiaire</p>
                            <div className="pt-1 pb-3 space-y-1 px-auto">
                                <ResponsiveNavLink href={route("register")}>
                                    <span className="underline">
                                        Inscription
                                    </span>
                                </ResponsiveNavLink>
                            </div>
                            <div className="pt-1 pb-3 space-y-1">
                                <ResponsiveNavLink href={route("login")}>
                                    <span className="underline">
                                        Connextion
                                    </span>
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
            <div className=" bg-gray-100 w-full h-auto pt-5  md:w-full md:h-auto ">
                <h5 className="  text-center  text-blue-600 text-xl">Les conditions pour ce Niveau</h5>
                <ul className="  ml-10 mt-3 text-lg md:ml-60">
                    <li className="m-5">
                    1)Avoir au minimum le niveau de la 6ème année de l’enseignement primaire
                    </li>
                     <li className="m-5">
                     2) Etre âgé de 30 ans au maximum à la date d’inscription.
                    </li>

                </ul>
                <h5 className="  text-center  text-blue-600 text-xl">Les Filier de ce Niveau </h5>

                <main className="mt-0 mb-4 h-96  ">

<div className="flex justify-center max-[700px]:flex-col">
        <Link href={route('niveau.TS')} >
        <Cardts

            title="Developpement Digital"
        />
        </Link>

    <Link href={route('niveau.T')}>
    <Cardts
        title={"Gestion d'entreprise "}

    />
    </Link>






</div>

{/* -------------- */}


</main>


            </div>

            <FooterLayout/>
        </>
    );
}
