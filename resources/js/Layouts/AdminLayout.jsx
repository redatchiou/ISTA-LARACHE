import NavLink from "@/Components/NavLink";
import { Head, Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo"
import FooterLayout from "./FooterLayout";


export default function AdminLayout({ children }) {
    return (
        <><div className="w-full h-14 bg-white">
            <div className="shrink-0 flex items-center pt-2 pl-6 ">
                <Link href="/">
                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                </Link>
            </div>
        </div>
            <div className="flex flex-row mt-0 h-full mb-3 bg-gray-100  border-b_ border-gray-200 dark:border-gray-700">
                <Head title="Accueil | Admin" />
                <div className="w-1/4  bg-blue-400 text-2xl text-white  flex flex-col items-start text-sm font-medium text-center text-gray-500 dark:text-gray-400">

                    <div className="mr-2">
                        <Link
                            href={route("admin.dashboard")}
                            class={
                                route().current("admin.dashboard")
                                    ? "inline-flex p-4 border-b-2 border-cyan-400 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                                    : "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                            }


                        >
                            <svg
                                class="w-5 h-5 mr-2 text-white group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            Accueil
                        </Link>
                    </div>
                    <div className="mr-2">
                        <Link
                            href={route("admin.stagiaires")}
                            class={
                                route().current("admin.stagiaires")
                                    ? "inline-flex p-4 border-b-2 border-cyan-400 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                                    : "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                            }
                        >
                            <svg
                                class="w-5 h-5 mr-2 text-white group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"

                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                            </svg>
                            Stagiares
                        </Link>
                    </div>
                    <div className="mr-2">
                        <Link
                            href={route("admin.demands")}
                            class={
                                route().current("admin.demands")
                                    ? "inline-flex p-4 border-b-2 border-cyan-400 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                                    : "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                            }
                        >
                            <svg
                                class="w-5 h-5 mr-2 text-white group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                            </svg>
                            Demandes
                        </Link>
                    </div>
                    <div className="mr-2">
                        <Link
                            href={route("admin.activites")}
                            class={
                                route().current("admin.activites")
                                    ? "inline-flex p-4 border-b-2 border-cyan-400 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                                    : "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                            }
                        >
                            <svg
                                class="w-5 h-5 mr-2 text-white group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                <path
                                    fillRule="evenodd"
                                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            Activites
                        </Link>
                    </div>
                    <div className="mr-2">
                        <Link
                            href={route("admin.emplois")}
                            class={
                                route().current("admin.emplois")
                                    ? "inline-flex p-4 border-b-2 border-cyan-400 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                                    : "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="w-5 h-5 mr-2 text-white group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.402 10.246c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-4.118 9.79c1.258 0 2-1.067 2-2.872 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684c.047.64.594 1.406 1.703 1.406zm-2.89-5.435h-.633A12.6 12.6 0 0 0 4.5 8.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675V7.354z" />
                            </svg>
                            Emplois
                        </Link>
                    </div>
                    <div className="mr-2">
                        <Link
                            href={route("admin.activites")}
                            class={
                                route().current("admin.activites")
                                    ? "inline-flex p-4 border-b-2 border-cyan-400 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                                    : "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                            }
                        >
                            <svg
                                class="w-5 h-5 mr-2 text-white group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                <path
                                    fillRule="evenodd"
                                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            Groupes
                        </Link>
                    </div>
                    <div className="mr-2">
                        <Link
                            href={route("admin.activites")}
                            class={
                                route().current("admin.activites")
                                    ? "inline-flex p-4 border-b-2 border-cyan-400 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                                    : "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                            }
                        >
                            <svg
                                class="w-5 h-5 mr-2 text-white group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                <path
                                    fillRule="evenodd"
                                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            Les filier
                        </Link>
                    </div>
                </div>
                <div className="w-3/4 bg-red-400_">{children}</div>
            </div>
            <FooterLayout />
        </>


    );
}
