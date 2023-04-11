import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function ({ auth }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Mes Notes
                </h2>
            }
        >
            <Head title="Notes" />

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Module
                            </th>
                            <th scope="col" className="px-6 py-3">
                                C1
                            </th>
                            <th scope="col" className="px-6 py-3">
                                C2
                            </th>
                            <th scope="col" className="px-6 py-3">
                                C3
                            </th>
                            <th scope="col" className="px-6 py-3">
                                EFM
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b  ">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                            >
                                Aproch Agile
                            </th>
                            <td className="px-6 py-4">11</td>
                            <td className="px-6 py-4">13</td>
                            <td className="px-6 py-4">15</td>
                            <td className="px-6 py-4">9</td>
                        </tr>
                        <tr className="bg-white border-b ">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                            >
                                Gestion de donne
                            </th>
                            <td className="px-6 py-4">17</td>
                            <td className="px-6 py-4">12</td>
                            <td className="px-6 py-4">17</td>
                            <td className="px-6 py-4">12</td>
                        </tr>
                        <tr className="bg-white ">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                            >
                                Develepemt back-end
                            </th>
                            <td className="px-6 py-4">19</td>
                            <td className="px-6 py-4">17</td>
                            <td className="px-6 py-4">14</td>
                            <td className="px-6 py-4">12</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
