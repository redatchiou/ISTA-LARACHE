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
                <div className="flex flex-row items-center mx-40 my-10">
                    <div className="flex-1 text-4xl font-semibold text-teal-600">
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
                    <div className="flex-1">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image ${index}`}
                                className={`shadow-lg shadow-gray-400 w-[340px] h-[255px] rounded-md items-end transition-all ease-in-out duration-100 ${
                                    index !== currentImageIndex && "hidden"
                                }`}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap justify-center items-baseline max-[700px]:flex-col">
                    <Link href={route("faq")} className="flex-1">
                        <Card title="FAQs" icon={<BsPatchQuestionFill />} />
                    </Link>
                    <Link href={route("filieres")} className="flex-1">
                        <Card title="Filières" icon={<BsFillSignpost2Fill />} />
                    </Link>
                    <Link href={route("activites")} className="flex-1">
                        <Card title={"Activités"} icon={<BsActivity />} />
                    </Link>
                    <Link href={route("emplois")} className="flex-1">
                        <Card
                            title={"Emploi de temps"}
                            icon={<BsFillCalendarRangeFill />}
                        />
                    </Link>
                </div>
                <section className="hidden">
                    <h1 className="font-bold">Espace Stagaire</h1>
                </section>

                {/* -------------- */}
                <Link href={route("requests")}>
                    <svg
                        class="w-14 h-14 fixed bottom-[20px] right-[40px] z-500"
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
            <hr />
            <Footer />
        </>
    );
}
