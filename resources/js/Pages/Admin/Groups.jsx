import AdminLayout from "@/Layouts/AdminLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { BsXCircleFill } from "react-icons/bs";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Select from "@/Components/Select";
import { CiViewTimeline } from "react-icons/ci";

export default function Filieres({ filieres, groups }) {
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
        errors,
        processing,
    } = useForm({
        code: "",
        filiere_id: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.groups.store"), {
            preserveScroll: true,
            onSuccess: reset("code"),
        });
    };
    const hundleDelete = (id) => {
        destroy(route("admin.groups.destroy", id), {
            preserveScroll: true,
        });
    };
    return (
        <>
            <Head title="Les Groupes" />
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
                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-6 gap-6"
                    >
                        <div className="col-span-6 sm:col-span-3">
                            <InputLabel
                                forInput="group"
                                value="Filière"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            />
                            <Select
                                id="nf"
                                autoComplete="nf"
                                name="filiere_id"
                                className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                handleChange={(e) =>
                                    setData("filiere_id", e.target.value)
                                }
                                required
                                // value={data.filiere_id}
                                defaultValue={data.filiere_id}
                            >
                                <option value="">Choissez </option>
                                {[ts, t, q, s].map(
                                    (nf, i) =>
                                        !!nf.length && (
                                            <optgroup key={i} label={nf[0].nf}>
                                                {nf.map((f) => (
                                                    <option
                                                        key={f.id}
                                                        value={f.id}
                                                    >
                                                        {f.name}
                                                        {f.parent &&
                                                            " - " + f.parent}
                                                    </option>
                                                ))}
                                            </optgroup>
                                        )
                                )}
                            </Select>
                            <InputError
                                className="mt-2"
                                message={errors.filiere_id}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-2">
                            <InputLabel
                                forInput="code"
                                value="Code de Groupe"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            />
                            <TextInput
                                id="code"
                                type="text"
                                name="code"
                                autoComplete="code"
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={data.code}
                                handleChange={(e) => {
                                    setData("code", e.target.value);
                                }}
                                required
                            />
                            <InputError
                                className="mt-2"
                                message={errors.code}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-6">
                            <PrimaryButton processing={processing}>
                                Ajouter
                            </PrimaryButton>
                        </div>
                    </form>
                </div>

                {!!groups.length ? (
                    <table className="min-w-full table-fixed text-center border-collapse">
                        <thead>
                            <tr className="border border-gray-300">
                                <th>CODE</th>
                                <th>GROUPE</th>
                                <th>Emplois de temps</th>
                            </tr>
                        </thead>
                        <tbody>
                            {groups.map((group, i) => (
                                <tr key={i}>
                                    <td className="border border-gray-300">
                                        {group.code}
                                    </td>
                                    <td className="border border-gray-300">
                                        {group.name}
                                    </td>
                                    <td className="border border-gray-300">
                                        <Link
                                            as="button"
                                            className="w-full"
                                            href={route("emplois", group.code)}
                                        >
                                            <CiViewTimeline className="mx-auto text-blue-600" />
                                        </Link>
                                    </td>
                                    <td className="border border-gray-300">
                                        <button
                                            onClick={(e) => {
                                                confirm("sure")
                                                    ? hundleDelete(group.code)
                                                    : e.preventDefault();
                                            }}
                                            className="text-white bg-red-500 rounded-md px-1"
                                        >
                                            Supprimer
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="text-center py-2 font-semibold">
                        Il n'y a aucune groupe à afficher . . .
                    </div>
                )}
            </AdminLayout>
        </>
    );
}
