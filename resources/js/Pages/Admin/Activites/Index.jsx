import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link, Head } from "@inertiajs/react";
import { TbTrashFilled, TbEdit } from "react-icons/tb";
import { IconContext } from "react-icons";
export default function Activites({ admin, activites }) {
    // activites = activites.reverse();
    console.log(activites);
    function createMarkup(arg) {
        return { __html: arg };
    }
    return (
        <>
            <Head title="Activites" />
            <AdminLayout
                auth={admin}
                header={
                    <Link href="/admin/activites">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Activites
                        </h2>
                    </Link>
                }
            >
                <PrimaryButton className="mt-2 ml-5">
                    <Link href={route("admin.activites.create")}>
                        Ajouter Activitee
                    </Link>
                </PrimaryButton>
                {/* <hr className="m-2" /> */}
                <div className="m-5 mr-1">
                    {activites.map((activite) => (
                        <div
                            key={activite.id}
                            className="border border-gray-200 shadow-sm p-2 rounded-lg mb-2"
                        >
                            <div className="">
                                <h1 className="text-xl inline pr-5">
                                    {activite.title}
                                </h1>
                                <div className="inline divide-x-2">
                                    <Link
                                        href={route(
                                            "admin.activites.edit",
                                            activite.id
                                        )}
                                        method="get"
                                        as="button"
                                        className="p-1 text-sm text-teal-500 rounded-md hover:bg-slate-200"
                                    >
                                        Modifier
                                        <IconContext.Provider
                                            value={{
                                                className:
                                                    "inline h-7 w-7 pl-1 text-teal-500",
                                            }}
                                        >
                                            <span>
                                                <TbEdit />
                                            </span>
                                        </IconContext.Provider>
                                    </Link>
                                    {/* ----------------- */}
                                    <Link
                                        href={route(
                                            "admin.activites.destroy",
                                            activite.id
                                        )}
                                        method="delete"
                                        as="button"
                                        className="p-1 text-sm text-red-500 rounded-md hover:bg-slate-200"
                                    >
                                        Supprimer
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
                                </div>
                            </div>
                            <sub
                                title="Date de publication"
                                className="bg-slate-300 px-1 rounded-md"
                            >
                                Publié : {activite.created_at}
                            </sub>
                            <p
                                className="m-1"
                                dangerouslySetInnerHTML={createMarkup(
                                    activite.body
                                )}
                            />
                        </div>
                    ))}
                </div>
                {/* <div className="m-5">
                <div className="mb-6">
                    <label
                        htmlFor="large-input"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Titre d'activite
                    </label>
                    <input
                        type="text"
                        id="large-input"
                        className="block w-1/2 p-4_ text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Ajouter Activite
                </label>
                <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ecrire ici..."
                ></textarea>
            </div> */}
            </AdminLayout>
        </>
    );
}
