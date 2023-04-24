import GeneralLayout from "@/Layouts/GeneralLayout";
import { Head, Link } from "@inertiajs/react";
export default function Emplois({ data }) {
    console.log(data);
    return (
        <>
            <Head title="Emplois" />
            <GeneralLayout
                auth={{ user: { nom: "ali", prenom: "jalol" } }}
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
                <form>
                    <label htmlFor="g">Choisez votre groupe </label>
                    <input
                        className="rounded-md border border-slate-600"
                        id="g"
                        list="groups"
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <datalist id="groups">
                        <option value="DD101" />
                        <option value="DD102" />
                        <option value="DWFS201" />
                        <option value="DWFS202" />
                        <option value="OK" />
                    </datalist>
                    <input type="submit" hidden />
                </form>
                <hr className="my-1" />
                <table className="w-full shadow-2xl text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                /
                            </th>
                            <th scope="col" className="px-6 py-3">
                                08:30 - 11:00
                            </th>
                            <th scope="col" className="px-6 py-3">
                                11:00 - 13:30
                            </th>
                            <th scope="col" className="px-6 py-3">
                                13:30 - 16:00
                            </th>
                            <th scope="col" className="px-6 py-3">
                                16:00 - 18:30
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Supprimer
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white_ border-b_ dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Lundi
                            </th>
                            <td className="px-6 py-4">lk</td>
                            <td className="px-6 py-4">,m</td>
                            <td className="px-6 py-4">lk</td>
                            <td className="px-6 py-4">lk</td>
                            <td className="px-6 py-4">lk</td>
                        </tr>
                        <tr>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Mardi
                            </th>
                            <td className="p-5">lk</td>
                            <td className="p-5">lk</td>
                            <td className="p-5">lk</td>
                            <td className="p-5">lk</td>
                            <td className="p-5">lk</td>
                        </tr>
                        <tr>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Mercredi
                            </th>
                            <td className="p-5">lk</td>
                            <td className="p-5">lk</td>
                            <td className="p-5">lk</td>
                            <td className="p-5">lk</td>
                            <td className="p-5">lk</td>
                        </tr>
                        <tr>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Jeudi
                            </th>
                            <td className="p-5">lk</td>
                            <td className="p-5">lk</td>
                            <td className="p-5">lk</td>
                            <td className="p-5">lk</td>
                            <td className="p-5">lk</td>
                        </tr>
                        <tr>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Vendredi
                            </th>
                            <td className="p-5">lkjj</td>
                            <td className="p-5">lk</td>
                            <td className="p-5">lk</td>
                            <td className="p-5">lk</td>
                            <td className="p-5">lk</td>
                        </tr>
                        <tr>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Samedi
                            </th>
                            <td className="p-5">lk</td>
                            <td className="p-5">lk</td>
                            <td className="p-5">lk</td>
                            <td className="p-5">lk</td>
                            <td className="p-5">lk</td>
                        </tr>
                    </tbody>
                </table>
            </GeneralLayout>
        </>
    );
}
