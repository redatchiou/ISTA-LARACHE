import Accordion from "@/Components/Accordion";

import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import FooterLayout from "@/Layouts/FooterLayout";
// import Header from "@/Layouts/Header";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
export default function Faq({ auth, header }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <Head title="Accueil" />
            <div className="min-h-screen bg-gray-100">
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

                {header && (
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                <main className="mt-5">
                    <div className="min-h-screen_ mt-10 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
                        <div className="w-full sm:max-w-5xl mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                            <Accordion>
                                <Accordion.Trigger>
                                    Qu'est-ce qu'"Ista"?
                                </Accordion.Trigger>
                                <Accordion.Content>
                                    <div className="block py-5 font-light">
                                        <p className="mb-2 text-gray-500 ">
                                            L'Institut Spécialisé des
                                            Technologies Appliquées, appelé
                                            aussi L’ISTA, est un établissement
                                            d’enseignement supérieur, suivant
                                            L’Office de la Formation
                                            Professionnelle et de la Promotion
                                            du Travail, qui assure aux étudiants
                                            de l'enseignement général intéressés
                                            par une formation professionnelle
                                            initiale au Maroc, dans divers
                                            filières tels que les réseaux
                                            informatiques, le développement
                                            Informatique, l'infographie…
                                        </p>
                                        {/* <p className="text-gray-500">
                                    Check out this guide to learn how to{" "}
                                    <a
                                        href="/docs/getting-started/introduction/"
                                        className="text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        get started
                                    </a>{" "}
                                    and start developing websites even faster
                                    with components on top of Tailwind CSS.
                                </p> */}
                                    </div>
                                </Accordion.Content>
                            </Accordion>
                            <Accordion>
                                <Accordion.Trigger>OFPPT?</Accordion.Trigger>
                                <Accordion.Content>
                                    <div className="block w-full py-5 font-light border-b border-gray-200">
                                        <p className="mb-2 text-gray-500 ">
                                            L'Office de la formation
                                            professionnelle et de la promotion
                                            du travail (OFPPT) est un opérateur
                                            public en formation professionnelle,
                                            couvrant le territoire marocain. Il
                                            a une capacité d'accueil de plus de
                                            500 000 stagiaires dans 187 filières
                                            diplômantes et 133 qualifiantes.
                                        </p>
                                        {/* <p className="text-gray-500">
                                    Check out this guide to learn how to{" "}
                                    <a
                                        href="/docs/getting-started/introduction/"
                                        className="text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        get started
                                    </a>{" "}
                                    and start developing websites even faster
                                    with components on top of Tailwind CSS.
                                </p> */}
                                    </div>
                                </Accordion.Content>
                            </Accordion>
                        </div>
                    </div>
                </main>
            </div>
            <FooterLayout />
        </>
    );
}
