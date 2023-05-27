import AdminLayout from "@/Layouts/AdminLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Select from "@/Components/Select";
import { Switch } from "@headlessui/react";
import { useState } from "react";

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
        patch,
        reset,
        errors,
        processing,
    } = useForm({
        id: "",
        name: "",
        parent: "",
        code: "",
        nf: "",
        description: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        !isUpdade
            ? post(route("admin.filieres.store"), {
                  preserveScroll: true,
                  onSuccess: reset(),
              })
            : patch(route("admin.filieres.update", data.id), {
                  preserveScroll: true,
                  onSuccess: reset(),
              });
    };
    const hundleDelete = (id) => {
        destroy(route("admin.filieres.destroy", id), {
            preserveScroll: true,
        });
    };
    const [enabled, setEnabled] = useState(false);
    const [isUpdade, setIsUpdate] = useState(false);
    // useEffect(() => {
    //     reset();
    // }, [enabled]);

    const hundleEdit = (param) => {
        reset();
        setIsUpdate(true);
        if (param.parent) {
            if (!enabled) {
                setEnabled(true);
            }
            setData({
                id: param.id,
                name: param.name,
                parent: param.parent,
                code: param.code,
                nf: param.nf,
                description: param.description,
            });
        } else {
            if (enabled) {
                setEnabled(false);
            }
            setData({
                id: param.id,
                name: param.name,
                code: param.code,
                nf: param.nf,
                description: param.description,
            });
        }
    };
    return (
        <>
            <Head title="Les Filières" />
            <AdminLayout
                header={
                    <Link href="/admin/filiers">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Filières
                        </h2>
                    </Link>
                }
            >
                <div className="bg-white m-5 p-5 overflow-x-auto shadow-md sm:rounded-lg">
                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-7 gap-6"
                    >
                        {!isUpdade && (
                            <div className="col-span-6 sm:col-span-6">
                                <InputLabel
                                    forInput="option"
                                    value="Filière | Option"
                                    className="block mb-2 text-sm font-medium leading-6 text-gray-900"
                                />
                                <Switch
                                    as="button"
                                    checked={enabled}
                                    onChange={setEnabled}
                                    className={`${
                                        enabled ? "bg-teal-900" : "bg-teal-700"
                                    }
          relative inline-flex h-5 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                                >
                                    <span className="sr-only">Use setting</span>
                                    <span
                                        aria-hidden="true"
                                        className={`${
                                            enabled
                                                ? "translate-x-6"
                                                : "translate-x-0"
                                        }
            pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                    />
                                </Switch>
                            </div>
                        )}

                        <div className="col-span-6 sm:col-span-3">
                            <InputLabel
                                forInput="nf"
                                value={
                                    !enabled ? "Niveau de formation" : "Filière"
                                }
                                className="block text-sm font-medium leading-6 text-gray-900"
                            />

                            <Select
                                id="nf"
                                autoComplete="nf"
                                name="nf"
                                className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                handleChange={(e) =>
                                    !enabled
                                        ? setData("nf", e.target.value)
                                        : setData("parent", e.target.value)
                                }
                                required
                                defaultValue={data.nf}
                            >
                                <option value="">Choisissez . . .</option>
                                {!enabled ? (
                                    <>
                                        <option value="Technicien Spécialisé">
                                            Technicien Spécialisé
                                        </option>
                                        <option value="Technicien">
                                            Technicien
                                        </option>
                                        <option value="Qualification">
                                            Qualification{" "}
                                        </option>
                                        <option value="Spécialisation">
                                            Spécialisation{" "}
                                        </option>
                                    </>
                                ) : (
                                    !!filieres.length && (
                                        <>
                                            {[ts, t, q, s].map(
                                                (nf, i) =>
                                                    !!nf.length && (
                                                        <optgroup
                                                            key={i}
                                                            label={nf[0].nf}
                                                        >
                                                            {nf.map(
                                                                (f, index) =>
                                                                    !f.parent && (
                                                                        <option
                                                                            key={
                                                                                index
                                                                            }
                                                                            value={
                                                                                f.id
                                                                            }
                                                                        >
                                                                            {
                                                                                f.name
                                                                            }
                                                                        </option>
                                                                    )
                                                            )}
                                                        </optgroup>
                                                    )
                                            )}
                                        </>
                                    )
                                )}
                            </Select>
                            <InputError className="mt-2" message={errors.nf} />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <InputLabel
                                forInput="name"
                                value={!enabled ? "Filière" : "Option"}
                                className="block text-sm font-medium leading-6 text-gray-900"
                            />
                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                autoComplete="name"
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={data.name}
                                handleChange={(e) => {
                                    setData("name", e.target.value);
                                }}
                                required
                            />
                            <InputError
                                className="mt-2"
                                message={errors.name}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-1">
                            <InputLabel
                                forInput="code"
                                value="Code"
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

                        <div className="col-span-7 sm:col-span-7">
                            <InputLabel
                                forInput="description"
                                value="Description"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            />
                            <textarea
                                type="text"
                                name="description"
                                id="description"
                                value={data.description}
                                onChange={(e) => {
                                    setData("description", e.target.value);
                                }}
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Description , Condition d'accès , Contenu de programme . . ."
                                required
                            ></textarea>
                            <InputError
                                className="mt-2"
                                message={errors.description}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-6">
                            <PrimaryButton processing={processing}>
                                {!!isUpdade
                                    ? "Mettre à jour"
                                    : " Ajouter Filière"}
                            </PrimaryButton>
                            {!!isUpdade && (
                                <>
                                    <br />
                                    <PrimaryButton
                                        className="mt-5"
                                        onClick={() => {
                                            setIsUpdate(false);
                                            reset();
                                        }}
                                    >
                                        Anuller
                                    </PrimaryButton>
                                </>
                            )}
                        </div>
                    </form>
                </div>

                {!!filieres.length ? (
                    <>
                        {[ts, t, q, s].map(
                            (nf, i) =>
                                !!nf.length && (
                                    <fieldset
                                        key={i}
                                        className="bg-white border-0 border-solid border-gray-300 mx-3 p-5"
                                    >
                                        <legend className="text-lg px-2">
                                            {nf[0].nf}
                                        </legend>

                                        <table className="table table-fixed min-w-full sm:min-w-full _w-full">
                                            <thead className="sr-only"></thead>
                                            <tbody>
                                                {nf.map((f, i) => (
                                                    <tr key={i}>
                                                        <td className="text-lg">
                                                            <span className="uppercase pr-1">
                                                                {f.code}:
                                                            </span>
                                                            {f.name}
                                                            {f.parent && (
                                                                <span className="bg-amber-500 text-white text-sm font-semibold ml-1 px-1 rounded-md">
                                                                    {f.parent}
                                                                </span>
                                                            )}
                                                        </td>
                                                        <td className="flex flex-col items-stretch space-x-1 max-sm:space-y-1 sm:flex-row ">
                                                            <button
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    confirm(
                                                                        "sure"
                                                                    )
                                                                        ? hundleDelete(
                                                                              f.id
                                                                          )
                                                                        : e.preventDefault();
                                                                }}
                                                                className="text-white bg-red-500 rounded-md px-1"
                                                            >
                                                                Supprimer
                                                            </button>

                                                            <button
                                                                onClick={() => {
                                                                    hundleEdit(
                                                                        f
                                                                    );
                                                                }}
                                                                className="text-white bg-green-500 rounded-md px-1"
                                                            >
                                                                Modifier
                                                            </button>

                                                            <button className="text-white bg-blue-500 rounded-md px-1">
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
                    <div className="text-center py-2 font-semibold">
                        Il semble qu'il n'y ait aucune donnée disponible à
                        afficher !
                    </div>
                )}
            </AdminLayout>
        </>
    );
}
