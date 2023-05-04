import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Select from "@/Components/Select";
import { Link, useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import SecondaryButton from "@/Components/SecondaryButton";
export default function UpdateProfileInformation({
    className,
    stagiaire,
    onClose,
    allowed_nf,
    allowed_filiere,
    allowed_group,
}) {
    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        patch,
        errors,
        recentlySuccessful,
    } = useForm({
        fname: stagiaire.fname,
        lname: stagiaire.lname,
        tel: stagiaire.tel,
        nf: stagiaire.nf,
        filiere: stagiaire.filiere,
        group: stagiaire.group,
        email: stagiaire.email,
    });
    const allowed_filiere_f = allowed_filiere.filter(
        (filiere) => filiere.nf === data.nf
    );
    const submit = (e) => {
        e.preventDefault();

        patch(route("stagiaire.update", { id: stagiaire.id }));
    };
    console.log(data.nf);

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route("stagiaire.destroy", { id: stagiaire.id }), {
            preserveScroll: true,
            onSuccess: () => onClose(),
            onFinish: () => reset(),
        });
    };

    return (
        <section className={className}>
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-3">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-base font-semibold leading-6 text-gray-900">
                                Profile Information
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Mettre à jour les informations de profil de ce
                                compte.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 md:col-span-3 md:mt-0">
                        <form onSubmit={submit} className="mt-6_  space-y-6">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6 w-full">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <InputLabel
                                                forInput="fname"
                                                value="Prenom"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            />
                                            <TextInput
                                                id="fname"
                                                type="text"
                                                name="fname"
                                                autoComplete="fname"
                                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                value={data.fname}
                                                handleChange={(e) =>
                                                    setData(
                                                        "fname",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />
                                            <InputError
                                                className="mt-2"
                                                message={errors.fname}
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <InputLabel
                                                forInput="lname"
                                                value="Nom"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            />
                                            <TextInput
                                                id="lname"
                                                type="text"
                                                name="lname"
                                                autoComplete="lname"
                                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                value={data.lname}
                                                handleChange={(e) =>
                                                    setData(
                                                        "lname",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />
                                            <InputError
                                                className="mt-2"
                                                message={errors.lname}
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <InputLabel
                                                forInput="email"
                                                value="Email"
                                            />

                                            <TextInput
                                                id="email"
                                                type="email"
                                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                value={data.email}
                                                handleChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                autoComplete="email"
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.email}
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-4">
                                            <InputLabel
                                                forInput="tel"
                                                value="Telephone"
                                            />

                                            <TextInput
                                                id="tel"
                                                type="tel"
                                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                value={data.tel}
                                                handleChange={(e) =>
                                                    setData(
                                                        "tel",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                autoComplete="tel"
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.tel}
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <InputLabel
                                                forInput="nf"
                                                value="Niveau de formation"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            />
                                            <Select
                                                id="nf"
                                                autoComplete="nf"
                                                name="nf"
                                                className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                handleChange={(e) =>
                                                    setData(
                                                        "nf",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                defaultValue={data.nf}
                                                // value={data.nf}
                                            >
                                                {allowed_nf.map((i) => (
                                                    <option key={i} value={i}>
                                                        {i}
                                                    </option>
                                                ))}
                                            </Select>

                                            <InputError
                                                className="mt-2"
                                                message={errors.nf}
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <InputLabel
                                                forInput="filiere"
                                                value="Filiere"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            />
                                            <Select
                                                id="filiere"
                                                autoComplete="filiere"
                                                name="filiere"
                                                className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                handleChange={(e) =>
                                                    setData(
                                                        "filiere",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                defaultValue={data.filiere}
                                            >
                                                {allowed_filiere_f.map(
                                                    (filiere) => (
                                                        <option
                                                            key={filiere.name}
                                                            value={filiere.name}
                                                        >
                                                            {filiere.name}
                                                        </option>
                                                    )
                                                )}
                                            </Select>

                                            <InputError
                                                className="mt-2"
                                                message={errors.filiere}
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <InputLabel
                                                forInput="group"
                                                value="Groupe"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            />
                                            <Select
                                                id="group"
                                                autoComplete="group"
                                                name="group"
                                                className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                handleChange={(e) =>
                                                    setData(
                                                        "group",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                defaultValue={data.group}
                                            >
                                                {allowed_group.map((group) => (
                                                    <option
                                                        key={group}
                                                        value={group}
                                                    >
                                                        {group}
                                                    </option>
                                                ))}
                                            </Select>

                                            <InputError
                                                className="mt-2"
                                                message={errors.group}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 flex justify-end">
                                    <div className="block mx-5">
                                        <SecondaryButton onClick={onClose}>
                                            Annuler
                                        </SecondaryButton>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3 mx-5">
                                        <PrimaryButton
                                            type="submit"
                                            onClick={onClose}
                                            processing={processing}
                                            className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                        >
                                            Enregistrer
                                        </PrimaryButton>

                                        <Transition
                                            show={recentlySuccessful}
                                            enterFrom="opacity-0"
                                            leaveTo="opacity-0"
                                            className="transition ease-in-out"
                                        >
                                            <p className="text-sm text-gray-600">
                                                Enregistrée.
                                            </p>
                                        </Transition>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
