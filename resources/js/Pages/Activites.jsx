import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import FooterLayout from "@/Layouts/FooterLayout";
// import Header from "@/Layouts/Header";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
export default function Activite({ auth, header }) {
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

                <main className="my-5">
                    <div className="bg-slate-50 dark:bg-gray-900 p-5">
                        <ol className="relative border-l border-gray-200 dark:border-gray-700">
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        aria-hidden="true"
                                        className="w-3 h-3 text-blue-800 dark:text-blue-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                    Activte{" "}
                                    <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                                        Dernière
                                    </span>
                                </h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    publié le 2 décembre 2021
                                </time>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Sint deleniti numquam
                                    nihil tempore maxime quas quam natus
                                    inventore doloribus, quasi, dolorum harum
                                    beatae ut obcaecati id quae laborum dolorem
                                    ab! Earum laudantium, quas maxime animi
                                    corrupti iure voluptatibus quis hic nostrum
                                    ipsum qui iste incidunt sit minus. Iste
                                    incidunt ratione enim ipsa id repellat
                                    voluptatem iure. Eum temporibus qui
                                    dignissimos?
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    <svg
                                        className="w-4 h-4 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>{" "}
                                    Telecharger PDF
                                </a>
                            </li>
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        aria-hidden="true"
                                        className="w-3 h-3 text-blue-800 dark:text-blue-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                    Activite x
                                </h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    publié le 2 décembre 2021
                                </time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Porro soluta asperiores
                                    vero ullam quis voluptate in, ex id
                                    excepturi aliquid odio culpa velit incidunt!
                                    Animi, cumque! Asperiores harum consequatur
                                    saepe.
                                </p>
                            </li>
                            <li className="ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        aria-hidden="true"
                                        className="w-3 h-3 text-blue-800 dark:text-blue-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                    Activite : ----
                                </h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    publié le 2 décembre 2021
                                </time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Porro soluta asperiores
                                    vero ullam quis voluptate in, ex id
                                    excepturi aliquid odio culpa velit incidunt!
                                    Animi, cumque! Asperiores harum consequatur
                                    saepe.
                                </p>
                            </li>
                        </ol>
                    </div>
                </main>
            </div>
            <FooterLayout />
        </>
    );
}
