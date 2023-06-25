import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";

import { useState } from "react";
import { TbTrashFilled } from "react-icons/tb";
import { IconContext } from "react-icons";

export default function Requests({ requests }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        message: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("request.store"), {
            preserveScroll: true,
            onSuccess: reset(),
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Mes demandes
                </h2>
            }
        >
            <Head title="Demande" />
            <div className="flex items-center justify-center p-5">
                <div className="w-full max-w-[550px]">
                    <form onSubmit={submit}>
                        <div className="mb-5">
                            <InputLabel
                                forInput="message"
                                value="Message"
                                className="mb-3 block ml-52 text-base font-medium text-[#07074D]"
                            />
                            <textarea
                                rows="4"
                                required
                                name="message"
                                id="message"
                                onChange={(e) => {
                                    setData("message", e.target.value);
                                }}
                                value={data.message}
                                placeholder="Entre votre demande"
                                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                            <InputError message={errors.message} />
                        </div>
                        <div className="text-right">
                            <button
                                disabled={processing}
                                type="submit"
                                className="block mr-3 ml-auto uppercase shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs p-3 rounded"
                            >
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {!!requests.length ? (
                <div className="mt-5 w-full table-fixed table-caption overflow-x-scroll shadow-md sm:rounded-lg">
                    <table className="w-full table-caption_ text-sm text-left text-gray-500 ">
                        <caption>Historique .. </caption>
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                            <tr className="text-center">
                                <th scope="col" className="px-6 py-3">
                                    Message
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Date de demande
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Supprimer
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map((item, index) => (
                                <tr
                                    key={index}
                                    className="bg-white border-b text-center  "
                                >
                                    <td className="px-6 py-4">
                                        {item.message}{" "}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.created_at}
                                    </td>

                                    <td>
                                        <Link
                                            method="delete"
                                            href={route(
                                                "profile.requests.destory",
                                                item.id
                                            )}
                                            id={item.id}
                                            className="font-medium hover:underline"
                                        >
                                            <IconContext.Provider
                                                value={{
                                                    className:
                                                        "inline h-6 w-6 pl-1  text-red-500",
                                                }}
                                            >
                                                <span>
                                                    <TbTrashFilled />
                                                </span>
                                            </IconContext.Provider>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center py-2 font-semibold">
                    Il n'y a aucune demande à afficher . . .
                </div>
            )}
        </AuthenticatedLayout>
    );
}
