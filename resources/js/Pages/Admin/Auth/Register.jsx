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
        fname: "",
        lname: "",
        email: "",
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
        post(route("admin.register"));
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
                        className="mt-1 block w-3/4 max-sm:w-full"
                        autoComplete="fname"
                        isFocused={true}
                        handleChange={onHandleChange}
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
                        className="mt-1 block w-3/4 max-sm:w-full"
                        autoComplete="lname"
                        handleChange={onHandleChange}
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
                        className="mt-1 block  w-3/4 max-sm:w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
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
                        href={route("admin.login")}
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

