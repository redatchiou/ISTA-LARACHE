import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";

export default function Demands({ requests }) {
    console.log(requests);
    return (
        <AdminLayout
            header={
                <Link href={route("admin.requests")}>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Demandes
                    </h2>
                </Link>
            }
        >
            <Head title="Les demandes" />

            <div className="m-7 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Sujet
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Stagiaire
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Groupe
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Date de demande
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Reponse
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Annuler
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {requests.map((item) => (
                            <tr
                                key={item.id}
                                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item.message}
                                </th>
                                <td className="px-6 py-4">{item.fname} {item.lname} </td>
                                <td className="px-6 py-4">{item.email}</td>
                                <td className="px-6 py-4">{item.group}</td>
                                <td className="px-6 py-4">{item.created_at}</td>
                                <td className="px-6 py-4">
                                    <a
                                        href={`mailto:${item.email}`}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="mx-auto"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
                                        </svg>
                                    </a>
                                </td>
                                <td>
                                    <Link
                                        as="button"
                                        method="delete"
                                        href={route(
                                            "admin.requests.destory",
                                            item.id
                                        )}
                                        id={item.id}

                                        className=" inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                    >
                                        Supprimer
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
