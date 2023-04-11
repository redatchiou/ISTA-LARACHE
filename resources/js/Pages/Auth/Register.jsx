import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Select from "@/Components/Select";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        prenom: "",
        nom: "",
        email: "",
        tel: "",
        nf: "",
        spe: "",
        groupe: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

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
                    <InputLabel forInput="prenom" value="Prenom" />

                    <TextInput
                        id="prenom"
                        name="prenom"
                        value={data.prenom}
                        className="mt-1 block w-3/4 max-sm:w-full"
                        autoComplete="prenom"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.prenom} className="mt-2" />
                </div>
                {/* NOM */}
                <div className="mt-4">
                    <InputLabel forInput="nom" value="Nom" />

                    <TextInput
                        id="nom"
                        name="nom"
                        value={data.nom}
                        className="mt-1 block w-3/4 max-sm:w-full"
                        autoComplete="nom"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.nom} className="mt-2" />
                </div>

                {/* EMAIL */}

                <div className="mt-4">
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block  w-3/4 max-sm:w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
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
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.tel} className="mt-2" />
                </div>

                {/* Niveau de formation */}
                <div className="mt-4">
                    <InputLabel forInput="nf" value="Niveau de formation" />
                    <Select
                        id="nf"
                        name="nf"
                        value={data.nf}
                        className="border mt-1  border-gray-300 text-gray-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block"
                        autoComplete="nf"
                        handleChange={onHandleChange}
                        required
                    >
                        <option defaultValue>Choisissez un niveau</option>
                        <option value="ts">Technicien Spécialisé </option>
                        <option value="t">Technicien</option>
                        <option value="q">Qualification</option>
                        <option value="s">Spécialisation</option>
                    </Select>
                    <InputError message={errors.nf} className="mt-2" />
                </div>
                {/* Filiere */}
                <div className="mt-4">
                    <InputLabel forInput="spe" value="Filiere" />
                    <Select
                        id="spe"
                        name="spe"
                        value={data.spe}
                        className="border mt-1  border-gray-300 text-gray-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block"
                        handleChange={onHandleChange}
                        required
                    >
                        <option defaultValue>Choisissez une filière</option>

                        <option value="ge">Gestion des Entreprises</option>
                        <option value="dd">Développement Digital</option>
                    </Select>
                    <InputError message={errors.spe} className="mt-2" />
                </div>
                {/* Groupe */}
                <div className="mt-4">
                    <InputLabel forInput="groupe" value="Groupe" />
                    <Select
                        id="groupe"
                        name="groupe"
                        value={data.groupe}
                        className="border mt-1  border-gray-300 text-gray-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block"
                        handleChange={onHandleChange}
                        required
                    >
                        <option defaultValue>Choisissez un Groupe</option>
                        <option value="g1">xx-G1-xx</option>
                        <option value="g2">xx-G2-xx</option>
                        <option value="g3">xx-G3-xx</option>
                        <option value="g4">xx-G4-xx</option>
                    </Select>
                    <InputError message={errors.groupe} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password" value="Mot de passe" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-3/4 max-sm:w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
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
                        className="mt-1 block w-3/4 max-sm:w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Déjà enregistré?
                    </Link>

                    <PrimaryButton className="ml-4" processing={processing}>
                        S'inscrire
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}

