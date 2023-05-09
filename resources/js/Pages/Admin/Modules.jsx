import AdminLayout from "@/Layouts/AdminLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { BsXCircleFill } from "react-icons/bs";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Modules({ filieres, modules }) {
    const ts = filieres.filter((filiere) => filiere.nf === "Technicien Spécialisé");
    const t = filieres.filter((filiere) => filiere.nf === "Technicien");
    const q = filieres.filter((filiere) => filiere.nf === "Qualification");
    const s = filieres.filter((filiere) => filiere.nf === "Spécialisation");
    const {
        data,
        setData,
        post,
        reset,
        processing,
    } = useForm({
        name: "",
        description: '',
        code: '',
        filiere_id: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("admin.modules.store"), {
            preserveScroll: true,
            onSuccess: reset(),
        });
    };
    // const hundleDelete = (id) => {
    //     destroy(route("admin.modules.destroy", id), {
    //         preserveScroll: true,
    //     });
    // };
    return (
        <>
            <Head title="Les Filieres" />
            <AdminLayout
                header={
                    <Link href="/admin/filiers">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Modules
                        </h2>
                    </Link>
                }
            >
                {filieres.map(f=>(
                    <section>

                    <h1 className="underline">{f.name}</h1>
                    <ul role="list" className="list-disc">

                    {modules.filter(m=>m.filiere_id==f.id).map(i=>(
                        <li className="list-item">
                            {i.name}

                        </li>
                    ))}
                    </ul>
                    </section>
                ))
                }

                <div className="m-7 p-2 overflow-x-auto shadow-md sm:rounded-lg">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="group">Filiere</label>

                            <select
                                id="filiere_id"
                                name="filiere_id"
                                onChange={(e) => {
                                    setData("filiere_id", e.target.value);
                                }}
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>Choissez </option>
                                {[ts, t, q, s].map(
                                    (nf, i) =>
                                        !!nf.length && (
                                            <optgroup key={i} label={nf[0].nf}>
                                                {nf.map((f, i) => (
                                                    <option key={i} value={f.id}>
                                                        {f.name}
                                                    </option>
                                                ))}
                                            </optgroup>
                                        )
                                )}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="name">NOM modules</label>
                            <input
                                id="name"
                                type="name"
                                name="name"
                                value={data.name}
                                onChange={(e) => {
                                    setData("name", e.target.value);
                                }}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="description">description</label>
                            <input
                                id="description"
                                type="description"
                                name="description"
                                value={data.description}
                                onChange={(e) => {
                                    setData("description", e.target.value);
                                }}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="code">Code de  module</label>
                            <input
                                id="code"
                                type="text"
                                name="code"
                                value={data.code}
                                onChange={(e) => {
                                    setData("code", e.target.value);
                                }}
                                required
                            />
                        </div>
                        <PrimaryButton processing={!data.code || processing}>
                            Ajouter
                        </PrimaryButton>
                    </form>
                </div>

                {/* {!!groups.length ? (
                    groups.map((group) => (
                        <>
                            <div>{group.code}</div>
                            <div>{group.name}</div>
                        </>
                    ))
                ) : (
                    <div>
                        <span className="text-lg m-1">
                            Il n'y a aucune groupe à afficher
                        </span>
                        <BsXCircleFill className="inline" />
                    </div>
                )} */}
                {!!modules.length ?(
                    <div className="m-7 overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full table-caption text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    filiere
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    module
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    code module
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    date de creation
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Annuler
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {modules.map((item,index) => (
                                <tr
                                    key={item.index}
                                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {item.filieres}
                                    </th>
                                    <td className="px-6 py-4">{item.name}</td>
                                    <td className="px-6 py-4">{item.code}</td>
                                    <td className="px-6 py-4">{item.created_at}</td>
                                    <td className="px-6 py-4">{item.description}</td>

                                    <td>
                                        <Link
                                            as="button"
                                            method="delete"
                                            href={route(
                                                "admin.modules.destroy",
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

                ):(
                    <div>
                    <span className="text-lg m-1">
                        Il n'y a aucune Module à afficher
                    </span>
                    <BsXCircleFill className="inline" />
                </div>

                )
                }

            </AdminLayout>
        </>
    );
}

