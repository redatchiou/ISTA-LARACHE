import { Head, Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import Card from "@/Components/Card";
import GeneralLayout from "@/Layouts/GeneralLayout";
import { IconContext } from "react-icons";
import { useState, useEffect } from "react";
import {
    BsPatchQuestionFill,
    BsFillSignpost2Fill,
    BsActivity,
    BsFillCalendarRangeFill,
} from "react-icons/bs";
import { MdEventNote } from "react-icons/md";
import Typewriter from "typewriter-effect";

export default function Home({ user, activites }) {
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const pictures = [
        './img/ista_cover.jpg',
        './img/img_1.jpg',
        './img/img_2.jpeg',
        // './img/img_3.jpeg',
        // './img/img_4.jpeg',

    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setElapsedTime((prevElapsedTime) => prevElapsedTime + 100);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (elapsedTime >= 5000) {
            setCurrentPictureIndex((currentPictureIndex + 1) % pictures.length);
            setElapsedTime(0);
        }
    }, [elapsedTime, currentPictureIndex, pictures.length]);

    return (
        <>
            <Head title="Accueil" />
            {activites.map((item) => (
                <div className="bg-slate-900_ bg-blue-700 flex overflow-hidden">
                    <span className="inline-block text-gray-100 my-1 text-lg animate-scroll whitespace-nowrap">
                        {item.body}
                    </span>
                </div>

            ))

            }

            <GeneralLayout user={user}>

                <div className="flex flex-row items-center mx-40 my-10">
                    <div className="flex-1  text-4xl font-semibold text-teal-600">
                        <Typewriter
                            options={{
                                strings: [
                                    "Bienvenue ISTA Larache",
                                    "NTIC Larache",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    {/* <div>
                        <img
                            src=".\img\ista_cover.jpg"
                            alt="Cover"
                            className="shadow-lg flex-1  shadow-gray-400 w-[340px] h-[255px] rounded-md items-end"
                        />
                    </div> */}
                    <img
                        src={pictures[currentPictureIndex]}
                        alt={`Picture ${currentPictureIndex + 1}`}
                        className="transition-opacity shadow-lg flex-1  shadow-gray-400 w-[340px] h-[255px] rounded-md items-end duration-1000 ease-in-out opacity-100"
                    />
                </div>
                <div className="flex flex-wrap justify-center items-baseline max-[700px]:flex-col">
                    <Link href={route("faq")} className="flex-1">
                        <Card
                            title="FAQs"
                            content="Accédez à ce processus de directives "
                            icon={<BsPatchQuestionFill />}
                        />
                    </Link>
                    <Link href={route("filieres")} className="flex-1">
                        <Card
                            title="Filières"
                            content="Accédez à ce processus de "
                            icon={<BsFillSignpost2Fill />}
                        />
                    </Link>
                    <Link href={route("activites")} className="flex-1">
                        <Card
                            title={"Activités"}
                            content="Accédez à ce processus de directives "
                            icon={<BsActivity />}
                        />
                    </Link>
                    <Link href={route("emplois")} className="flex-1">
                        <Card
                            title={"Emploi de temps"}
                            content="Accédez à ce processus de :"
                            icon={<BsFillCalendarRangeFill />}
                        />
                    </Link>
                </div>

                {/* -------------- */}
                <p className="m-5">Les activitées currentes</p>
                <div className="m-5 bg-inherit">
                    <ol className="items-center sm:flex">
                        {/* {activites.map((item) => (
                            <li className="relative mb-6 sm:mb-0">
                                <div className="flex items-center">
                                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">

                                        <IconContext.Provider
                                            value={{
                                                className:
                                                    "w-4 h-4 text-blue-800 dark:text-blue-300",
                                            }}
                                        >
                                            <div>
                                                <MdEventNote />
                                            </div>
                                        </IconContext.Provider>
                                    </div>
                                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                                <div className="mt-3 sm:pr-8">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {item.title}
                                    </h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        publié le {item.created_at}
                                    </time>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                        {item.body}
                                    </p>
                                </div>
                            </li>
                        ))

                        } */}

                        {/* <li className="relative mb-6 sm:mb-0">
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
                                    adipisicing elit. Sunt, suscipit. Similique
                                    facilis sint iste ratione labore distinctio
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
                        </li> */}
                    </ol>
                </div>
            </GeneralLayout>
            <Footer />
        </>
    );
}
