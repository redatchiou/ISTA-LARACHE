import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link, Head } from "@inertiajs/react";
// import { TbTrashFilled, TbEdit } from "react-icons/tb";
// import { IconContext } from "react-icons";
import Annonce from "./Ad";
export default function Activites({ activites }) {
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
                            Activités
                        </h2>
                    </Link>
                }
            >
                <Annonce />
                <div className="bg-white mx-5 mt-2 shadow-md rounded-md max-sm:mx-0">
                    <Link href={route("admin.activites.create")}>
                        <PrimaryButton className="mt-2 ml-4 px-8">
                            Ajouter
                        </PrimaryButton>
                    </Link>
                    {!!activites.data.length ? (
                        <section>
                            <div className="py-1">
                                {activites.data.map((activite) => (
                                    <div
                                        key={activite.id}
                                        className="bg-white border border-gray-200 shadow-sm p-2 m-2  rounded-lg mb-2"
                                    >
                                        <div className="flex flex-col-reverse">
                                            <h1 className="text-xl inline pr-5">
                                                {activite.title}
                                            </h1>
                                            <div className="inline space-x-1">
                                                <Link
                                                    href={route(
                                                        "admin.activites.edit",
                                                        activite.id
                                                    )}
                                                    method="get"
                                                    as="button"
                                                    className="font-semibold p-1 text-white text-sm bg-teal-500 rounded-md hover:bg-teal-700"
                                                >
                                                    Modifier
                                                    {/* <IconContext.Provider
                                            value={{
                                                className:
                                                    "inline h-7 w-7 pl-1 text-teal-500",
                                            }}
                                        >
                                            <span>
                                                <TbEdit />
                                            </span>
                                        </IconContext.Provider> */}
                                                </Link>
                                                {/* ----------------- */}
                                                <Link
                                                    className=" font-semibold p-1 text-white text-sm bg-red-500 rounded-md hover:bg-red-700"
                                                    href={route(
                                                        "admin.activites.destroy",
                                                        activite.id
                                                    )}
                                                    method="delete"
                                                    as="button"
                                                    preserveScroll={true}
                                                    onClick={(e) => {
                                                        !confirm(
                                                            "Êtes-vous sûr de vouloir supprimer définitivement cette FAQ"
                                                        ) && e.preventDefault();
                                                    }}
                                                >
                                                    Supprimer
                                                </Link>
                                            </div>
                                        </div>
                                        <sub
                                            title="Date de publication"
                                            className="px-1 rounded-md italic"
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
                            {activites.total > activites.per_page && (
                                <nav
                                    aria-label="Page navigation example"
                                    className="block py-4 mx-auto"
                                >
                                    <ul className="inline-flex -space-x-px">
                                        {activites.links.map((link, index) => (
                                            <li key={index} className="">
                                                <Link
                                                    preserveScroll={true}
                                                    href={link.url}
                                                    className={
                                                        link.active
                                                            ? "px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700   "
                                                            : index === 0
                                                            ? "px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700     "
                                                            : index ===
                                                              activites.links
                                                                  .length -
                                                                  1
                                                            ? "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700     "
                                                            : "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700     "
                                                    }
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            )}
                        </section>
                    ) : (
                        <div className="text-center py-2 font-sans">
                            Il semble qu'il n'y ait aucune donnée disponible à
                            afficher.
                        </div>
                    )}
                </div>
            </AdminLayout>
        </>
    );
}
