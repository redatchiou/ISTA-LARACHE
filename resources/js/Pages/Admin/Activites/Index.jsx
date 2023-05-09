import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link, Head } from "@inertiajs/react";
import { TbTrashFilled, TbEdit } from "react-icons/tb";
import { IconContext } from "react-icons";
import Annonce from "./Ad";
export default function Activites({ annonce, activites }) {
    // activites = activites.reverse();

    console.log(activites);
    function createMarkup(arg) {
        return { __html: arg };
    }
    return (
        <>
            <Head title="Activites" />
            <AdminLayout
                header={
                    <Link href="/admin/activites">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Activites
                        </h2>
                    </Link>
                }
            >
                <Link href={route("admin.activites.create")}>
                    <PrimaryButton className="mt-2 ml-5">
                        Ajouter Activitee
                    </PrimaryButton>
                </Link>
                <Link href={route("admin.activites.ad")}>
                    <PrimaryButton className="mt-2 ml-5">
                        Ajouter Annonce
                    </PrimaryButton>
                </Link>
                <Annonce />
                <hr className="m-2" />

                {/* <div className="border border-gray-200 shadow-sm p-2 rounded-lg mb-2">
                    {annonce.body}
                </div> */}
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
            </AdminLayout>
        </>
    );
}
