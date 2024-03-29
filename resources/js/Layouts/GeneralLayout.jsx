import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import "../../css/news_bar.css";
export default function GeneralLayout({ header, children }) {
    const { user } = usePage().props.auth;
    const { annonce } = usePage().props;
    console.log(annonce);
    // console.log(1, user);
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    return (
        <div className="min-h-screen  bg-gray-100">
            <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
                {!!annonce && (
                    <div className="bg-blue-600 flex overflow-hidden">
                        <span className="inline-block text-white my-1 text-lg animate-scroll whitespace-nowrap">
                            {annonce.body}
                        </span>
                    </div>
                )}

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="flex justify-between h-16 ">
                        <div className="flex justify-end">
                            <div className="shrink-0 flex items-center ">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink
                                    href="/filieres"
                                    active={route().current("filieres")}
                                >
                                    Filieres
                                </NavLink>
                                <NavLink
                                    href="/activites"
                                    active={route().current("activites")}
                                >
                                    Activites
                                </NavLink>
                                <NavLink
                                    href="/emplois"
                                    active={route().current("emplois")}
                                >
                                    Emplois
                                </NavLink>
                                <NavLink
                                    href={route("faq")}
                                    active={route().current("faq")}
                                >
                                    Faqs
                                </NavLink>
                                <NavLink
                                    href="/institut"
                                    active={route().current("institut")}
                                >
                                    Institut
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                {!!user ? (
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
                    {!!user ? (
                        <ResponsiveNavLink
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                            href={route("dashboard")}
                        >
                            Espace Stagiaire
                        </ResponsiveNavLink>
                    ) : (
                        <div className="my-1 flex flex-col justify-center">
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
                    )}
                    <hr />
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href="/">Accueil</ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/filieres"
                            active={route().current("filieres")}
                        >
                            Filieres
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/activites"
                            active={route().current("activites")}
                        >
                            Activites
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/emplois"
                            active={route().current("emplois")}
                        >
                            Emplois
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("faq")}
                            active={route().current("faq")}
                        >
                            Faqs
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/institut"
                            active={route().current("institut")}
                        >
                            Institut
                        </ResponsiveNavLink>
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
            <main className="py-5">{children}</main>
        </div>
    );
}
