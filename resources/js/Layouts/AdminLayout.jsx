import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
export default function AdminLayout({ header, children }) {
    const { admin } = usePage().props.auth;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="shrink-0 flex items-center">
                                    <Link href="/">
                                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                    </Link>
                                </div>

                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        href={route("admin.dashboard")}
                                        active={route().current(
                                            "admin.dashboard"
                                        )}
                                    >
                                        Accueil
                                    </NavLink>
                                </div>
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        href={route("stagiaire.index")}
                                        active={route().current(
                                            "stagiaire.index"
                                        )}
                                    >
                                        Stagaires
                                    </NavLink>
                                </div>
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        href={route("admin.requests")}
                                        active={route().current(
                                            "admin.requests"
                                        )}
                                    >
                                        Demandes
                                    </NavLink>
                                </div>
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        href={route("admin.activites")}
                                        active={route().current(
                                            "admin.activites"
                                        )}
                                    >
                                        Activites
                                    </NavLink>
                                </div>
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        href={route("admin.emplois")}
                                        active={route().current(
                                            "admin.emplois"
                                        )}
                                    >
                                        Emplois
                                    </NavLink>
                                </div>
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        href={route("admin.filieres")}
                                        active={route().current(
                                            "admin.filieres"
                                        )}
                                    >
                                        Filieres
                                    </NavLink>
                                </div>
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        href={route("admin.modules")}
                                        active={route().current(
                                            "admin.modules"
                                        )}
                                    >
                                        Modules
                                    </NavLink>
                                </div>
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        href={route("admin.groups")}
                                        active={route().current("admin.groups")}
                                    >
                                        Groupes
                                    </NavLink>
                                </div>
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        href={route("admin.faq")}
                                        active={route().current("admin.faq")}
                                    >
                                        FAQs
                                    </NavLink>
                                </div>
                            </div>

                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="ml-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    <span className="mr-2">
                                                        {admin.fname +
                                                            " " +
                                                            admin.lname}
                                                    </span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z" />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("admin.edit")}
                                            >
                                                Parametres
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("admin.register")}
                                            >
                                                Ajouter Admin
                                            </Dropdown.Link>
                                            <div>
                                                <div className="block w-full px-4 py-1 text-left text-lg leading-5 text-gray-700  focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                                                    {admin.fname +
                                                        " " +
                                                        admin.lname}
                                                </div>
                                                <div className="block w-full px-4 text-left text-sm leading-5 text-gray-700  focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                                                    {admin.email}
                                                </div>
                                            </div>
                                            <hr />
                                            <Dropdown.Link
                                                href={route("admin.logout")}
                                                method="post"
                                                as="button"
                                            >
                                                <div className="flex items-center text-red-500 mt-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="14"
                                                        height="14"
                                                        className="mr-2"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                                                        />
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                                                        />
                                                    </svg>
                                                    Se déconnecter
                                                </div>
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
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

                    {/* MOBILE */}

                    <div
                        className={
                            (showingNavigationDropdown ? "block" : "hidden") +
                            " sm:hidden"
                        }
                    >
                        <div className="pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink
                                href={route("admin.dashboard")}
                                active={route().current("admin.dashboard")}
                            >
                                Accueil
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("stagiaire.index")}
                                active={route().current("stagiaire.index")}
                            >
                                Stagaires
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("admin.requests")}
                                active={route().current("admin.requests")}
                            >
                                Demandes
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("admin.activites")}
                                active={route().current("admin.activites")}
                            >
                                Activites
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("admin.emplois")}
                                active={route().current("admin.emplois")}
                            >
                                Emplois
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("admin.filieres")}
                                active={route().current("admin.filieres")}
                            >
                                Filieres
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("admin.modules")}
                                active={route().current("admin.modules")}
                            >
                                Modules
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("admin.groups")}
                                active={route().current("admin.groups")}
                            >
                                Groupes
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("admin.faq")}
                                active={route().current("admin.faq")}
                            >
                                FAQs
                            </ResponsiveNavLink>
                        </div>

                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="px-4">
                                <div className="font-medium text-base text-gray-800">
                                    {admin.fname + " " + admin.lname}
                                </div>
                                <div className="font-medium text-sm text-gray-500">
                                    {admin.email}
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Parametres
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    href={route("admin.register")}
                                >
                                    Ajouter Admin
                                </ResponsiveNavLink>

                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Se déconnecter
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

                <main>{children}</main>
            </div>
        </>
    );
}
