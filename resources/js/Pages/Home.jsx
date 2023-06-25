import { Head, Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import Card from "@/Components/Card";
import GeneralLayout from "@/Layouts/GeneralLayout";
import { IconContext } from "react-icons";
import {
    BsPatchQuestionFill,
    BsFillSignpost2Fill,
    BsActivity,
    BsFillCalendarRangeFill,
} from "react-icons/bs";
import { MdEventNote } from "react-icons/md";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";

export default function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [index, setIndex] = useState(0);
    // useEffect(() => {
    //         setCurrentImageIndex((currentImageIndex + 1) % images.length);

    // }, [currentImageIndex, images.length]);
    const images = [
        "./img/ista_cover.jpg",
        "./img/ista_cover_2.jpg",
        "./img/img_1.jpg",
    ];
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentImageIndex, images.length]);
    return (
        <>
            <Head title="Accueil" />
            <GeneralLayout>
                <div class="min-h-screen_ flex items-center justify-center px-16 max-sm:px-0">
                    <div class="relative w-full max-w-lg">
                        <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                        <div class="m-8 max-sm:mx-2 relative space-y-4">
                            <div className="my-5">
                                <div className="text-center text-4xl font-semibold text-teal-600">
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
                            </div>
                            <div className="relative max-w-lg mx-auto">
                                <div className="relative h-56 overflow-hidden rounded-lg">
                                    {images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Image ${index}`}
                                            className={`mr-9 ml-auto shadow-lg shadow-gray-400  rounded-md items-end transition-all ease-in-out duration-100 ${
                                                index !== currentImageIndex &&
                                                "hidden"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                                <div className="flex-1 text-2xl font-extrabold">
                                    <Link href={route("filieres")}>
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-slate-500">
                                            Filières
                                        </span>
                                    </Link>
                                </div>
                                <div>
                                    <BsFillSignpost2Fill className="w-7 h-7 fill-purple-300" />
                                </div>
                            </div>
                            <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                                <div className="flex-1 text-2xl font-extrabold">
                                    <Link href={route("emplois")}>
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-slate-500">
                                            Emploi de temps
                                        </span>
                                    </Link>
                                </div>
                                <div>
                                    <BsFillCalendarRangeFill className="w-7 h-7 fill-purple-300" />
                                </div>
                            </div>
                            <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                                <div className="flex-1 text-2xl font-extrabold">
                                    <Link href={route("activites")}>
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-slate-500">
                                            Activités
                                        </span>
                                    </Link>
                                </div>
                                <div>
                                    <BsActivity className="w-7 h-7 fill-purple-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -------------- */}
                <Link href={route("requests")}>
                    <svg
                        className="w-14 h-14 fixed bottom-[20px] right-[40px] z-500"
                        viewBox="0 0 64 64"
                        fill="none"
                    >
                        <rect
                            width="64"
                            height="64"
                            rx="16"
                            fill="#0CB1F8"
                        ></rect>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M46.9519 42.0254C48.8768 39.1602 50 35.7113 50 32C50 22.0589 41.9411 14 32 14C22.0589 14 14 22.0589 14 32C14 41.9411 22.0589 50 32 50C35.101 50 38.0189 49.2158 40.5661 47.835L47.6181 49.5167C48.3669 49.6953 49.0282 48.9963 48.8085 48.2585L46.9519 42.0254Z"
                            fill="white"
                        ></path>
                        <circle
                            cx="24.3077"
                            cy="32.3077"
                            r="2.30769"
                            fill="#54CCFF"
                        ></circle>
                        <circle
                            cx="31.9232"
                            cy="32.3077"
                            r="2.30769"
                            fill="#54CCFF"
                        ></circle>
                        <circle
                            cx="39.5387"
                            cy="32.3077"
                            r="2.30769"
                            fill="#54CCFF"
                        ></circle>
                    </svg>
                </Link>
            </GeneralLayout>
            <hr className="mt-10" />
            <Footer />
        </>
    );
}
