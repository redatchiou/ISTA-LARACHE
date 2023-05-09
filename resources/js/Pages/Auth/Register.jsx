import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Select from "@/Components/Select";

export default function Register({ filieres, groups }) {
    console.log("f", filieres);
    console.log("g", groups);

    const { data, setData, post, processing, errors, reset } = useForm({
        fname: "",
        lname: "",
        email: "",
        tel: "",
        nf: "",
        filiere: "",
        group: "",
        password: "",
        password_confirmation: "",
    });
    const allowed_filieres = filieres.filter(
        (filiere) => filiere.nf === data.nf
    );
    const allowed_groups = groups.filter(
        (filiere) => filiere.name === data.filiere
    );
    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);
    // useEffect(() => {
    //     console.log(data);
    // }, [data]);
    useEffect(() => {
        reset("filiere", "group");
    }, [data.nf]);

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    const [part, setPart] = useState(0);
    return (
        <GuestLayout className="pr-1">
            <Head title="Register" />
            <form onSubmit={submit}>
                {/* PRENOM */}
                {part === 0 && (
                    <>
                        <div>
                            <InputLabel forInput="fname" value="Prenom" />

                            <TextInput
                                id="fname"
                                name="fname"
                                value={data.fname}
                                className="mt-1 block w-3/4 max-sm:w-full"
                                autoComplete="fname"
                                isFocused={true}
                                handleChange={(e) => {
                                    setData("fname", e.target.value);
                                }}
                                // required
                            />

                            <InputError
                                message={errors.fname}
                                className="mt-2"
                            />
                        </div>
                        {/* NOM */}
                        <div className="mt-4">
                            <InputLabel forInput="lname" value="Nom" />

                            <TextInput
                                id="lname"
                                name="lname"
                                value={data.lname}
                                className="mt-1 block w-3/4 max-sm:w-full"
                                autoComplete="lname"
                                handleChange={(e) => {
                                    setData("lname", e.target.value);
                                }}
                                // required
                            />

                            <InputError
                                message={errors.lname}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <Link
                                href={route("login")}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Déjà enregistré?
                            </Link>
                            <PrimaryButton
                                // type="button"
                                className="ml-4"
                                onClick={() => {
                                    if (errors.fname || errors.lname) {
                                        console.log("pas v");
                                    } else {
                                        return setPart(1);
                                    }
                                }}
                            >
                                Suivant
                            </PrimaryButton>
                        </div>
                    </>
                )}
                {/* EMAIL */}
                {part === 1 && (
                    <>
                        <div className="mt-4">
                            <InputLabel forInput="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block  w-3/4 max-sm:w-full"
                                autoComplete="username"
                                handleChange={(e) => {
                                    setData("email", e.target.value);
                                }}
                                // required
                            />

                            <InputError message={errors.tel} className="mt-2" />
                        </div>
                        {/* PHONE */}
                        <div className="mt-4">
                            <InputLabel forInput="tel" value="Tel" />

                            <TextInput
                                id="tel"
                                type="tel"
                                name="tel"
                                value={data.tel}
                                className="mt-1 block w-3/4 max-sm:w-full"
                                autoComplete="tel"
                                handleChange={(e) => {
                                    setData("tel", e.target.value);
                                }}
                                // required
                            />

                            <InputError message={errors.tel} className="mt-2" />
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <PrimaryButton
                                type="button"
                                className="ml-4"
                                onClick={() => setPart(0)}
                            >
                                Retour
                            </PrimaryButton>
                            <PrimaryButton
                                className="ml-4"
                                onClick={() => {
                                    if (errors.tel || errors.email) {
                                        console.log("pas v");
                                    } else {
                                        return setPart(2);
                                    }
                                }}
                            >
                                Suivant
                            </PrimaryButton>
                        </div>
                    </>
                )}

                {/* Niveau de formation */}
                {part === 2 && (
                    <>
                        <div className="mt-4">
                            <InputLabel
                                forInput="nf"
                                value="Niveau de formation"
                            />
                            <Select
                                id="nf"
                                name="nf"
                                value={data.nf}
                                className="border mt-1  border-gray-300 text-gray-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block"
                                autoComplete="nf"
                                handleChange={(e) => {
                                    setData("nf", e.target.value);
                                }}
                                required
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Choisissez un niveau
                                </option>
                                <option value="Technicien Spécialisé">
                                    Technicien Spécialisé{" "}
                                </option>
                                <option value="Technicien">Technicien</option>
                                <option value="Qualification">
                                    Qualification
                                </option>
                                <option value="Spécialisation">
                                    Spécialisation
                                </option>
                            </Select>
                            <InputError message={errors.nf} className="mt-2" />
                        </div>
                        {/* Filiere */}
                        <div className="mt-4">
                            <InputLabel forInput="filiere" value="Filiere" />
                            <Select
                                id="filiere"
                                name="filiere"
                                value={data.filiere}
                                className="border mt-1  border-gray-300 text-gray-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block"
                                handleChange={(e) => {
                                    setData("filiere", e.target.value);
                                }}
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Choisissez une filière
                                </option>
                                {allowed_filieres.map((filiere) => (
                                    <option value={filiere.name}>
                                        {filiere.name}
                                    </option>
                                ))}
                            </Select>
                            <InputError
                                message={errors.filiere}
                                className="mt-2"
                            />
                        </div>
                        {/* Groupe */}
                        <div className="mt-4">
                            <InputLabel forInput="group" value="Groupe" />
                            <Select
                                id="group"
                                name="group"
                                value={data.group}
                                className="border mt-1  border-gray-300 text-gray-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block"
                                handleChange={(e) => {
                                    setData("group", e.target.value);
                                }}
                                required
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Choisissez un Groupe
                                </option>
                                {allowed_groups.map((filiere) => (
                                    <option value={filiere.code}>
                                        {filiere.code}
                                    </option>
                                ))}
                            </Select>
                            <InputError
                                message={errors.group}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <PrimaryButton
                                type="button"
                                className="ml-4"
                                onClick={() => setPart(1)}
                            >
                                Retour
                            </PrimaryButton>
                            <PrimaryButton
                                className="ml-4"
                                onClick={() => {
                                    if (
                                        errors.nf ||
                                        errors.filiere ||
                                        errors.group
                                    ) {
                                        console.log("pas v");
                                    } else {
                                        return setPart(3);
                                    }
                                }}
                            >
                                Suivant
                            </PrimaryButton>
                        </div>
                    </>
                )}
                {part === 3 && (
                    <>
                        <div className="mt-4">
                            <InputLabel
                                forInput="password"
                                value="Mot de passe"
                            />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-3/4 max-sm:w-full"
                                autoComplete="new-password"
                                handleChange={(e) => {
                                    setData("password", e.target.value);
                                }}
                                required
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                forInput="password_confirmation"
                                value="Confirmez le mot de passe"
                            />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-3/4 max-sm:w-full"
                                handleChange={(e) => {
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    );
                                }}
                                required
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                            <div className="flex items-center justify-between mt-4">
                                <PrimaryButton
                                    type="button"
                                    className="ml-4"
                                    onClick={() => setPart(2)}
                                >
                                    Retour
                                </PrimaryButton>
                                <PrimaryButton
                                    className="ml-4"
                                    processing={processing}
                                >
                                    S'inscrire
                                </PrimaryButton>
                            </div>
                        </div>
                    </>
                )}
            </form>
        </GuestLayout>
    );
}
