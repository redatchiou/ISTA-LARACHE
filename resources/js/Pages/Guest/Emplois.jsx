import GeneralLayout from "@/Layouts/GeneralLayout";
import { Head, Link } from "@inertiajs/react";
import LBox from "@/Components/Listbox";
import { BsArrowRight } from "react-icons/bs";
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
                <div className="mt-2">
                    {!!groups.length ? (
                        <LBox
                            groups={groups}
                            current={!!emploi.length ? emploi[0].group : ""}
                            named_route="emplois"
                        />
                    ) : (
                        "Aucun Groupe"
                    )}
                </div>

                <div className="m-4 overflow-x-scroll">
                    {!!emploi.length && (
                        <table className="w-full mx-auto table-fixed_ text-center shadow-2xl border-collapse border  border-neutral-500 text-sm text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                                <tr>
                                    <th scope="col" className="w-1/8 px-0 py-3">
                                        /
                                    </th>
                                    <th
                                        scope="col"
                                        className="w-1/4 px-1 py-3 border border-neutral-500"
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
                                        className="w-1/4 px-1 py-3 border border-neutral-500"
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
                                        className="w-1/4 px-1 py-3 border border-neutral-500"
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
                                        className="w-1/4 px-1 py-3 border border-neutral-500"
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
                                {[
                                    "Lundi",
                                    "Mardi",
                                    "Mercredi",
                                    "Jeudi",
                                    "Vendredi",
                                    "Samedi",
                                ].map((day, i) => (
                                    <tr
                                        key={i}
                                        className="bg-white_ border-b_   hover:bg-gray-50 "
                                    >
                                        <th
                                            scope="row"
                                            className="px-1 py-4 font-medium text-gray-900 border border-neutral-500 whitespace-nowrap "
                                        >
                                            {day}
                                        </th>
                                        {["s1", "s2", "s3", "s4"].map(
                                            (quarter, index) => (
                                                <td
                                                    key={index}
                                                    className="p-1 border border-neutral-500"
                                                >
                                                    <div className="flex flex-row-reverse justify-around">
                                                        {filterDays(
                                                            day,
                                                            quarter
                                                        ).subject && (
                                                            <div className="">
                                                                <div className="text-lg">
                                                                    {
                                                                        filterDays(
                                                                            day,
                                                                            quarter
                                                                        )
                                                                            .subject
                                                                    }
                                                                </div>
                                                                <span className="underline">
                                                                    {
                                                                        filterDays(
                                                                            day,
                                                                            quarter
                                                                        )
                                                                            .trainer
                                                                    }
                                                                </span>
                                                                <code className="text-xs rounded-md font-sans bg-amber-400 text-white ml-1 p-0.5">
                                                                    {
                                                                        filterDays(
                                                                            day,
                                                                            quarter
                                                                        ).salle
                                                                    }
                                                                </code>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                            )
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </GeneralLayout>
        </>
    );
}
