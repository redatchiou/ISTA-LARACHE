import AdminLayout from "@/Layouts/AdminLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { BsXCircleFill } from "react-icons/bs";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Filieres({ filieres, groups }) {
    console.log(filieres);
    console.log(groups);
    // const filieres_list = [...filieres.name];
    // console.log(filieres_list);
    const filieres_names = filieres.map((filiere) => filiere.name);
    console.log(filieres_names);

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
        code: "",
        filiere_id: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("admin.groups.store"), {
            preserveScroll: true,
            onSuccess: reset(),
        });
    };
    const hundleDelete = (id) => {
        destroy(route("admin.groups.destroy", id), {
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
                            Groupes
                        </h2>
                    </Link>
                }
            >
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
                                            <optgroup label={nf[0].nf}>
                                                {nf.map((f) => (
                                                    <option value={f.id}>
                                                        {f.name}
                                                    </option>
                                                ))}
                                            </optgroup>
                                        )
                                )}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="code">Code de Groupe</label>
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

                {!!groups.length ? (
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
                )}
            </AdminLayout>
        </>
    );
}
