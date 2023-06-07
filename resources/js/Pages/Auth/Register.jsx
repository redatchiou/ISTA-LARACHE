import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Select from "@/Components/Select";

export default function Register({ filieres, groups }) {
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
    useEffect(() => {
        reset("filiere", "group");
    }, [data.nf]);

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <GuestLayout className="pr-1">
            <Head title="Register" />
            <form onSubmit={submit}>
                {/* PRENOM */}
                <div>
                    <InputLabel forInput="fname" value="Prenom" />

                    <TextInput
                        id="fname"
                        name="fname"
                        value={data.fname}
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        autoComplete="fname"
                        isFocused={true}
                        handleChange={(e) => {
                            setData("fname", e.target.value);
                        }}
                        required
                    />

                    <InputError message={errors.fname} className="mt-2" />
                </div>
                {/* NOM */}
                <div className="mt-4">
                    <InputLabel forInput="lname" value="Nom" />

                    <TextInput
                        id="lname"
                        name="lname"
                        value={data.lname}
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        autoComplete="lname"
                        handleChange={(e) => {
                            setData("lname", e.target.value);
                        }}
                        required
                    />

                    <InputError message={errors.lname} className="mt-2" />
                </div>

                {/* EMAIL */}
                <div className="mt-4">
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        autoComplete="username"
                        handleChange={(e) => {
                            setData("email", e.target.value);
                        }}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>
                {/* PHONE */}
                <div className="mt-4">
                    <InputLabel forInput="tel" value="Tel" />

                    <TextInput
                        id="tel"
                        type="tel"
                        name="tel"
                        value={data.tel}
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        autoComplete="tel"
                        handleChange={(e) => {
                            setData("tel", e.target.value);
                        }}
                        required
                    />

                    <InputError message={errors.tel} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="nf" value="Niveau de formation" />
                    <Select
                        id="nf"
                        name="nf"
                        value={data.nf}
                        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        autoComplete="nf"
                        handleChange={(e) => {
                            setData("nf", e.target.value);
                        }}
                        required
                        defaultValue=""
                    >
                        <option value="">Choisissez un niveau</option>
                        <option value="Technicien Spécialisé">
                            Technicien Spécialisé{" "}
                        </option>
                        <option value="Technicien">Technicien</option>
                        <option value="Qualification">Qualification</option>
                        <option value="Spécialisation">Spécialisation</option>
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
                        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        handleChange={(e) => {
                            setData("filiere", e.target.value);
                        }}
                        defaultValue=""
                        required
                    >
                        <option value="">Choisissez une filière</option>
                        {allowed_filieres.map((filiere, index) => (
                            <option key={index} value={filiere.name}>
                                {filiere.name}
                            </option>
                        ))}
                    </Select>
                    <InputError message={errors.filiere} className="mt-2" />
                </div>
                {/* Groupe */}
                <div className="mt-4">
                    <InputLabel forInput="group" value="Groupe" />
                    <Select
                        id="group"
                        name="group"
                        value={data.group}
                        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        handleChange={(e) => {
                            setData("group", e.target.value);
                        }}
                        required
                        defaultValue=""
                    >
                        <option value="">Choisissez un Groupe</option>
                        {allowed_groups.map((filiere, index) => (
                            <option key={index} value={filiere.code}>
                                {filiere.code}
                            </option>
                        ))}
                    </Select>
                    <InputError message={errors.group} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password" value="Mot de passe" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        autoComplete="new-password"
                        handleChange={(e) => {
                            setData("password", e.target.value);
                        }}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
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
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        handleChange={(e) => {
                            setData("password_confirmation", e.target.value);
                        }}
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ml-4" processing={processing}>
                            S'inscrire
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
