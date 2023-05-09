import AdminLayout from "@/Layouts/AdminLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { BsXCircleFill } from "react-icons/bs";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Filieres({ filieres }) {
    console.log(filieres);
    const ts = filieres.filter(
        (filiere) => filiere.nf === "Technicien Spécialisé"
    );
    const t = filieres.filter((filiere) => filiere.nf === "Technicien");
    const q = filieres.filter((filiere) => filiere.nf === "Qualification");
    const s = filieres.filter((filiere) => filiere.nf === "Spécialisation");
    const {
        data,
        setData,
        delete: destroy,
        post,
        reset,
        processing,
    } = useForm({
        name: "",
        code: "",
        nf: "",
        description: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("admin.filieres.store"), {
            preserveScroll: true,
            onSuccess: reset(),
        });
    };
    const hundleDelete = (id) => {
        destroy(route("admin.filieres.destroy", id), {
            preserveScroll: true,
        });
    };
    return (
        <>
            <Head title="Les Filieres" />
            <AdminLayout
                header={
                    <Link href="/admin/filiers">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Fileres
                        </h2>
                    </Link>
                }
            >
                <div className="m-7 overflow-x-auto shadow-md sm:rounded-lg">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name">Nom</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={(e) => {
                                    setData("name", e.target.value);
                                }}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="code">Code</label>
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
                        <div>
                            <label htmlFor="nf">NF</label>
                            <select
                                id="nf"
                                name="nf"
                                onChange={(e) => {
                                    setData("nf", e.target.value);
                                }}
                                value={data.nf}
                                required
                            >
                                <option value="">Choissez</option>
                                <option value="Technicien Spécialisé">
                                    Technicien Spécialisé
                                </option>
                                <option value="Technicien">Technicien</option>
                                <option value="Qualification">
                                    Qualification{" "}
                                </option>
                                <option value="Spécialisation">
                                    Spécialisation{" "}
                                </option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="description">
                                Des
                                <textarea
                                    type="text"
                                    name="description"
                                    id="description"
                                    value={data.description}
                                    onChange={(e) => {
                                        setData("description", e.target.value);
                                    }}
                                    required
                                    cols="30"
                                    rows="2"
                                ></textarea>
                            </label>
                        </div>
                        <PrimaryButton processing={!data.name || processing}>
                            Ajouter
                        </PrimaryButton>
                    </form>
                </div>

                {!!filieres.length ? (
                    <>
                        {[ts, t, q, s].map(
                            (nf, i) =>
                                !!nf.length && (
                                    <fieldset
                                        key={i}
                                        className="border border-solid border-gray-300 mx-3 p-5"
                                    >
                                        <legend className="text-lg px-2">
                                            {nf[0].nf}
                                        </legend>

                                        <table className="table table-fixed w-full">
                                            <thead className="sr-only"></thead>
                                            <tbody>
                                                {nf.map((f) => (
                                                    <tr>
                                                        <td className="text-lg">
                                                            {f.name}
                                                        </td>
                                                        <td className="text-sm px-0.5 rounded-md">
                                                            {f.code}
                                                        </td>
                                                        {/* <p className="">{f.description}</p> */}
                                                        <td>
                                                            <button
                                                                onClick={() => {
                                                                    hundleDelete(
                                                                        f.id
                                                                    );
                                                                }}
                                                                className="text-white bg-red-500 rounded-md px-1"
                                                            >
                                                                Supprimer
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button
                                                                // onClick={() => {
                                                                //     hundleDelete(f.id);
                                                                // }}
                                                                className="text-white bg-green-500 rounded-md px-1"
                                                            >
                                                                Modifier
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button
                                                                // onClick={() => {
                                                                //     hundleDelete(f.id);
                                                                // }}
                                                                className="text-white bg-green-500 rounded-md px-1"
                                                            >
                                                                <a
                                                                    href={route(
                                                                        "filieres",
                                                                        {
                                                                            id: f.code,
                                                                        }
                                                                    )}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    Apercu
                                                                </a>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </fieldset>
                                )
                        )}
                    </>
                ) : (
                    <div>
                        <span className="text-lg m-1">
                            Il n'y a aucune filière à afficher
                        </span>
                        <BsXCircleFill className="inline" />
                    </div>
                )}
            </AdminLayout>
        </>
    );
}
