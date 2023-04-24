import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import Footer from "@/Components/Footer";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import Card from "@/Components/Card";
export default function Home({ auth }) {
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
                                        href="/filieres"
                                        active={route().current("dashboard")}
                                    >
                                        Filieres
                                    </NavLink>
                                    <NavLink
                                        href="/contact"
                                        // active={route().current("dashboard")}
                                    >
                                        Contact
                                    </NavLink>

                                    <NavLink
                                        href="/emplois"
                                        // active={route().current("dashboard")}
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
                                        // active={route().current("dashboard")}
                                    >
                                        Institut
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

                <main className="mt-5">
                    <div className="relative">
                        <div className="absolute left-40 max-[700px]:left-16 max-[700px]:right-40 bottom-20 p-5 rounded-lg border border-gray-400 border-dashed_ border-solid backdrop-blur-[2px] text-4xl font-semibold text-gray-300 bg-slate-50_ z-20">
                            Bienvenue ISTA Larache
                        </div>
                        <img
                            src=".\img\ista_cover.jpg"
                            alt="Cover"
                            className="w-4/5 rounded-md h-96 filter blur-[1px]_ mx-auto"
                        />
                    </div>
                    <div className="flex justify-center max-[700px]:flex-col">
                        <Link href={route("faq")}>
                            <Card
                                title="FAQs"
                                content="Accédez à ce processus de directives "
                                path={
                                    <path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z" />
                                }
                            />
                        </Link>
                        <Card
                            title={"Filières"}
                            content="Accédez à ce processus de "
                            path={
                                <path d="M7.293.707A1 1 0 0 0 7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4H9v-.586A1 1 0 0 0 7.293.707z" />
                            }
                        />
                        <Link href={route("activites")}>
                            <Card
                                title={"Activités"}
                                content="Accédez à ce processus de directives "
                                path={
                                    <path
                                        fillRule="evenodd"
                                        d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
                                    />
                                }
                            />
                        </Link>
                        <Link href={route("emplois")}>
                            <Card
                                title={"Emploi de temps"}
                                content="Accédez à ce processus de :"
                                path={
                                    <path
                                        fillRule="evenodd"
                                        d="M2 0a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2H2zM0 8V3h16v2h-6a1 1 0 1 0 0 2h6v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4h6a1 1 0 1 0 0-2H0z"
                                    />
                                }
                            />
                        </Link>
                    </div>
                    {/* -------------- */}
                    <p className="m-5">Les activitées currentes</p>
                    <div className="m-5 bg-inherit">
                        <ol className="items-center sm:flex">
                            <li className="relative mb-6 sm:mb-0">
                                <div className="flex items-center">
                                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
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
                                    </div>
                                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                                <div className="mt-3 sm:pr-8">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Activite
                                    </h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        publié le 5 janvier 2022
                                    </time>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Maiores, nemo
                                        consequuntur saepe beatae iure unde
                                        suscipit nihil.
                                    </p>
                                </div>
                            </li>
                            <li className="relative mb-6 sm:mb-0">
                                <div className="flex items-center">
                                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
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
                                    </div>
                                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                                <div className="mt-3 sm:pr-8">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Activite
                                    </h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        publié le 5 janvier 2022
                                    </time>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Sunt, suscipit.
                                        Similique facilis sint iste ratione
                                        labore distinctio
                                    </p>
                                </div>
                            </li>
                            <li className="relative mb-6 sm:mb-0">
                                <div className="flex items-center">
                                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
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
                                    </div>
                                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                                <div className="mt-3 sm:pr-8">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Activite
                                    </h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        publié le 5 janvier 2022
                                    </time>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Quisquam dicta sint
                                        consectetur distinctio natus expedita.
                                    </p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}
