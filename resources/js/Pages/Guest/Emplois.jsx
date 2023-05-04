import GeneralLayout from "@/Layouts/GeneralLayout";
import { Head, Link } from "@inertiajs/react";
import LBox from "@/Components/Listbox";
import { BsArrowRight } from "react-icons/bs";
import Footer from "@/Components/Footer";

export default function Emplois({ emploi, groups }) {
    
    function filterDays(day, quarter) {
        const result = emploi.filter(
            (i) => i.day_of_week === day && i.quarter === quarter
        );
        return result[0];
    }
    return (
        <>
            <Head title="Emplois" />
            <GeneralLayout
                header={
                    <div className="flex flex-row max-sm:flex-col justify-start">
                        <Link href="/emplois">
                            <h2
                                title="Contact"
                                className="font-semibold text-xl text-gray-800 leading-tight"
                            >
                                Emplois
                            </h2>
                        </Link>
                    </div>
                }
            >
                {!!groups.length ? (
                    <LBox
                        groups={groups}
                        current={!!emploi.length ? emploi[0].group : ""}
                        named_route="emplois"
                    />
                ) : (
                    "Aucun Groupe"
                )}

                <div className="m-4 overflow-x-scroll">
                    {!!emploi.length && (
                        <table className="w-full mx-auto table-fixed_ text-center shadow-2xl border-collapse border  border-neutral-500 text-sm text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-0 py-3">
                                        /
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-1 py-3 border border-neutral-500"
                                    >
                                        <div className="flex flex-row p-1 ">
                                            <span className="flex-1 text-left">
                                                08:30
                                            </span>
                                            <BsArrowRight
                                                size={15}
                                                className="text-center"
                                            />
                                            <span className="flex-1 text-right">
                                                11:00
                                            </span>
                                        </div>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-1 py-3 border border-neutral-500"
                                    >
                                        <div className="flex flex-row p-1 ">
                                            <span className="flex-1 text-left">
                                                11:00
                                            </span>
                                            <BsArrowRight
                                                size={15}
                                                className="text-center"
                                            />
                                            <span className="flex-1 text-right">
                                                13:30
                                            </span>
                                        </div>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-1 py-3 border border-neutral-500"
                                    >
                                        <div className="flex flex-row p-1 ">
                                            <span className="flex-1 text-left">
                                                13:30
                                            </span>
                                            <BsArrowRight
                                                size={15}
                                                className="text-center"
                                            />
                                            <span className="flex-1 text-right">
                                                16:00
                                            </span>
                                        </div>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-1 py-3 border border-neutral-500"
                                    >
                                        <div className="flex flex-row p-1 ">
                                            <span className="flex-1 text-left">
                                                16:00
                                            </span>
                                            <BsArrowRight
                                                size={15}
                                                className="text-center"
                                            />
                                            <span className="flex-1 text-right">
                                                18:30
                                            </span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white_ border-b_ dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th
                                        scope="row"
                                        className="px-0 py-4 font-medium text-gray-900 border border-neutral-500 whitespace-nowrap dark:text-white"
                                    >
                                        Lundi
                                    </th>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {filterDays("Lundi", "s1").subject}
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Lundi", "s1").salle}
                                        </code>
                                        <div className="underline">
                                            {filterDays("Lundi", "s1").trainer}
                                        </div>
                                    </td>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {filterDays("Lundi", "s2").subject}
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Lundi", "s2").salle}
                                        </code>
                                        <div className="underline">
                                            {filterDays("Lundi", "s2").trainer}
                                        </div>
                                    </td>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {filterDays("Lundi", "s3").subject}
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Lundi", "s3").salle}
                                        </code>
                                        <div className="underline">
                                            {filterDays("Lundi", "s3").trainer}
                                        </div>
                                    </td>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {filterDays("Lundi", "s4").subject}
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Lundi", "s4").salle}
                                        </code>
                                        <div className="underline">
                                            {filterDays("Lundi", "s4").trainer}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th
                                        scope="row"
                                        className="px-0 py-4 font-medium text-gray-900 border border-neutral-500 whitespace-nowrap dark:text-white"
                                    >
                                        Mardi
                                    </th>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {filterDays("Mardi", "s1").subject}
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Mardi", "s1").salle}
                                        </code>
                                        <div className="underline">
                                            {filterDays("Mardi", "s1").trainer}
                                        </div>
                                    </td>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {filterDays("Mardi", "s2").subject}
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Mardi", "s2").salle}
                                        </code>
                                        <div className="underline">
                                            {filterDays("Mardi", "s2").trainer}
                                        </div>
                                    </td>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {filterDays("Mardi", "s3").subject}
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Mardi", "s3").salle}
                                        </code>
                                        <div className="underline">
                                            {filterDays("Mardi", "s3").trainer}
                                        </div>
                                    </td>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {filterDays("Mardi", "s4").subject}
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Mardi", "s4").salle}
                                        </code>
                                        <div className="underline">
                                            {filterDays("Mardi", "s4").trainer}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th
                                        scope="row"
                                        className="px-0 py-4 font-medium text-gray-900 border border-neutral-500 whitespace-nowrap dark:text-white"
                                    >
                                        Mercredi
                                    </th>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {
                                                filterDays("Mercredi", "s1")
                                                    .subject
                                            }
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Mercredi", "s1").salle}
                                        </code>
                                        <div className="underline">
                                            {
                                                filterDays("Mercredi", "s1")
                                                    .trainer
                                            }
                                        </div>
                                    </td>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {
                                                filterDays("Mercredi", "s2")
                                                    .subject
                                            }
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Mercredi", "s2").salle}
                                        </code>
                                        <div className="underline">
                                            {
                                                filterDays("Mercredi", "s2")
                                                    .trainer
                                            }
                                        </div>
                                    </td>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {
                                                filterDays("Mercredi", "s3")
                                                    .subject
                                            }
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Mercredi", "s3").salle}
                                        </code>
                                        <div className="underline">
                                            {
                                                filterDays("Mercredi", "s3")
                                                    .trainer
                                            }
                                        </div>
                                    </td>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {
                                                filterDays("Mercredi", "s4")
                                                    .subject
                                            }
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Mercredi", "s4").salle}
                                        </code>
                                        <div className="underline">
                                            {
                                                filterDays("Mercredi", "s4")
                                                    .trainer
                                            }
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th
                                        scope="row"
                                        className="px-0 py-4 font-medium text-gray-900 border border-neutral-500 whitespace-nowrap dark:text-white"
                                    >
                                        Jeudi
                                    </th>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {filterDays("Jeudi", "s1").subject}
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Jeudi", "s1").salle}
                                        </code>
                                        <div className="underline">
                                            {filterDays("Jeudi", "s1").trainer}
                                        </div>
                                    </td>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {filterDays("Jeudi", "s2").subject}
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Jeudi", "s2").salle}
                                        </code>
                                        <div className="underline">
                                            {filterDays("Jeudi", "s2").trainer}
                                        </div>
                                    </td>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {filterDays("Jeudi", "s3").subject}
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Jeudi", "s3").salle}
                                        </code>
                                        <div className="underline">
                                            {filterDays("Jeudi", "s3").trainer}
                                        </div>
                                    </td>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {filterDays("Jeudi", "s4").subject}
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Jeudi", "s4").salle}
                                        </code>
                                        <div className="underline">
                                            {filterDays("Jeudi", "s4").trainer}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th
                                        scope="row"
                                        className="px-0 py-4 font-medium text-gray-900 border border-neutral-500 whitespace-nowrap dark:text-white"
                                    >
                                        Vendredi
                                    </th>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {
                                                filterDays("Vendredi", "s1")
                                                    .subject
                                            }
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Vendredi", "s1").salle}
                                        </code>
                                        <div className="underline">
                                            {
                                                filterDays("Vendredi", "s1")
                                                    .trainer
                                            }
                                        </div>
                                    </td>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {
                                                filterDays("Vendredi", "s2")
                                                    .subject
                                            }
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Vendredi", "s2").salle}
                                        </code>
                                        <div className="underline">
                                            {
                                                filterDays("Vendredi", "s2")
                                                    .trainer
                                            }
                                        </div>
                                    </td>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {
                                                filterDays("Vendredi", "s3")
                                                    .subject
                                            }
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Vendredi", "s3").salle}
                                        </code>
                                        <div className="underline">
                                            {
                                                filterDays("Vendredi", "s3")
                                                    .trainer
                                            }
                                        </div>
                                    </td>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {
                                                filterDays("Vendredi", "s4")
                                                    .subject
                                            }
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Vendredi", "s4").salle}
                                        </code>
                                        <div className="underline">
                                            {
                                                filterDays("Vendredi", "s4")
                                                    .trainer
                                            }
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th
                                        scope="row"
                                        className="px-0 py-4 font-medium text-gray-900 border border-neutral-500 whitespace-nowrap dark:text-white"
                                    >
                                        Samedi
                                    </th>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {filterDays("Samedi", "s1").subject}
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Samedi", "s1").salle}
                                        </code>
                                        <div className="underline">
                                            {filterDays("Samedi", "s1").trainer}
                                        </div>
                                    </td>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {filterDays("Samedi", "s2").subject}
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Samedi", "s2").salle}
                                        </code>
                                        <div className="underline">
                                            {filterDays("Samedi", "s2").trainer}
                                        </div>
                                    </td>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {filterDays("Samedi", "s3").subject}
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Samedi", "s3").salle}
                                        </code>
                                        <div className="underline">
                                            {filterDays("Samedi", "s3").trainer}
                                        </div>
                                    </td>
                                    <td className="px-0 py-0 border border-neutral-500">
                                        <span className="text-lg">
                                            {filterDays("Samedi", "s4").subject}
                                        </span>
                                        <code className="text-xs rounded-md font-sans bg-green-400 ml-1 p-0.5">
                                            {filterDays("Samedi", "s4").salle}
                                        </code>
                                        <div className="underline">
                                            {filterDays("Samedi", "s4").trainer}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                </div>
            </GeneralLayout>
            <Footer/>
        </>
    );
}
