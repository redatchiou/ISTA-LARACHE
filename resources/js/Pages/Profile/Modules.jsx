import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function ({ modules }) {
    console.log(1, modules);
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Mes Modules
                </h2>
            }
        >
            <Head title="Notes" />

            <div className="relative overflow-x-auto">
                {!!modules.length ? (
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    *
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Module
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {modules.map((m) => (
                                <tr className="bg-white border-b  ">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                    >
                                        {m.code}
                                    </th>
                                    <td className="px-6 py-4">{m.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="text-center py-2 font-semibold">
                        Il n'y a aucune modules à afficher . . .
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
