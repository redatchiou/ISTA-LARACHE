import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";
import LBox from "@/Components/Listbox";
import { BsArrowRight } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import PrimaryButton from "@/Components/PrimaryButton";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import Modal from "@/Components/Modal";
export default function Emplois({ emploi, groups }) {
    function filterDays(day, quarter) {
        const result = emploi.filter(
            (i) => i.day_of_week === day && i.quarter === quarter
        );
        return result[0];
    }
    const {
        data,
        setData,
        processing,
        reset,
        patch,
        delete: destroy,
        errors,
        recentlySuccessful,
    } = useForm({
        id: "",
        subject: "",
        quarter: "",
        trainer: "",
        salle: "",
    });

    const [isOpen, setIsOpen] = useState(false);
    const getData = (data) => {
        console.table(data);
        setIsOpen(true);
        setData({
            id: data.id,
            subject: data.subject,
            quarter: data.quarter,
            salle: data.salle,
            trainer: data.trainer,
        });
    };
    const clearData = (data) => {
        console.table(data);
        // setIsOpen(true);

        setData({
            id: data.id,
        });
        confirm("sure")
            ? destroy(route("admin.emplois.destroy", data.id), {
                  preserveScroll: true,
                  onFinish: () => reset(),
              })
            : reset();
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route("admin.emplois.update", data.id), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    return (
        <>
            <Head title="Les Emplois | Admin" />
            <AdminLayout
                header={
                    <Link href="/admin/emplois">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Emplois
                        </h2>
                    </Link>
                }
            >
                <Modal show={isOpen} onClose={closeModal} maxWidth="sm">
                    <form
                        onSubmit={handleSubmit}
                        className="p-5"
                        autoComplete="off"
                    >
                        <div className="mb-6">
                            <label
                                htmlFor="module"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Module
                            </label>
                            <input
                                defaultValue={data.subject}
                                onChange={(e) =>
                                    setData("subject", e.target.value)
                                }
                                type="text"
                                id="module"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="trainer"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Formateur
                            </label>
                            <input
                                defaultValue={data.trainer}
                                onChange={(e) =>
                                    setData("trainer", e.target.value)
                                }
                                type="text"
                                id="trainer"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="salle"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Salle
                            </label>
                            <input
                                defaultValue={data.salle}
                                onChange={(e) =>
                                    setData("salle", e.target.value)
                                }
                                type="text"
                                id="salle"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                                required
                            />
                        </div>
                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full_ sm:w-auto px-5 py-2.5 text-center   "
                            >
                                Submit
                            </button>
                            <PrimaryButton onClick={closeModal} className="">
                                Fermer
                            </PrimaryButton>
                        </div>
                    </form>
                </Modal>
                <div className="mt-2">
                    {!!groups.length ? (
                        <LBox
                            groups={groups}
                            current={!!emploi.length ? emploi[0].group : ""}
                            named_route="admin.emplois"
                        />
                    ) : (
                        <div className="text-center py-2 font-semibold">
                            Il n'y a aucune groupe à afficher . . .
                        </div>
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
                                            className="px-0 py-4 font-medium text-gray-900 border border-neutral-500 whitespace-nowrap "
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
                                                        <span className="pl-1 space-y-1">
                                                            <BsPencilFill
                                                                className="cursor-pointer p-0.5 rounded-sm text-green-400  hover:text-white  hover:bg-green-400"
                                                                size={19}
                                                                onClick={() => {
                                                                    getData(
                                                                        filterDays(
                                                                            day,
                                                                            quarter
                                                                        )
                                                                    );
                                                                }}
                                                            />
                                                            {filterDays(
                                                                day,
                                                                quarter
                                                            ).subject && (
                                                                <MdDelete
                                                                    className="cursor-pointer p-0.5 rounded-sm text-red-500 hover:text-white hover:bg-red-500"
                                                                    size={22}
                                                                    onClick={() => {
                                                                        clearData(
                                                                            filterDays(
                                                                                day,
                                                                                quarter
                                                                            )
                                                                        );
                                                                    }}
                                                                />
                                                            )}
                                                        </span>
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
            </AdminLayout>
        </>
    );
}
