import { Head, Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import GeneralLayout from "@/Layouts/GeneralLayout";
export default function Activite({ activites }) {
    function createMarkup(arg) {
        return { __html: arg };
    }
    return (
        <>
            <Head title="Activites" />
            <GeneralLayout
                header={
                    <div className="flex flex-row max-sm:flex-col justify-start">
                        <Link href="/activites">
                            <h2
                                title="Activites"
                                className="font-semibold text-xl text-gray-800 leading-tight"
                            >
                                Activites
                            </h2>
                        </Link>
                    </div>
                }
            >
                <div className="bg-slate-50  p-5">
                    <ol className="relative border-l border-gray-200 ">
                        {activites.map((activite) => (
                            <li className="ml-6" key={activite.id}>
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white ">
                                    <svg
                                        aria-hidden="true"
                                        className="w-3 h-3 text-blue-800"
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
                                <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
                                    {activite.title}
                                </h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                                    publié le {activite.created_at}
                                </time>
                                <p
                                    className="text-base font-normal text-gray-500 "
                                    dangerouslySetInnerHTML={createMarkup(
                                        activite.body
                                    )}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </GeneralLayout>
            <hr className="my-5 border-none" />
            <Footer />
        </>
    );
}
