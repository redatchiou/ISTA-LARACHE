import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Register({ admins }) {
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
        <AdminLayout
            header={
                <Link href="/admin">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Les Admins
                    </h2>
                </Link>
            }
        >
            <Head title="Register" />
            <div className="max-w-7xl m-3 sm:px-6 lg:px-8">
                <form onSubmit={submit} className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-2">
                        <InputLabel forInput="fname" value="Prenom" />

                        <TextInput
                            id="fname"
                            name="fname"
                            value={data.fname}
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            autoComplete="fname"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.fname} className="mt-2" />
                    </div>
                    {/* NOM */}
                    <div className="col-span-6 sm:col-span-2">
                        <InputLabel forInput="lname" value="Nom" />

                        <TextInput
                            id="lname"
                            name="lname"
                            value={data.lname}
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            autoComplete="lname"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.lname} className="mt-2" />
                    </div>

                    {/* EMAIL */}

                    <div className="col-span-6 sm:col-span-2">
                        <InputLabel forInput="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            autoComplete="username"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <InputLabel forInput="password" value="Mot de passe" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            autoComplete="new-password"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
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
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                        <PrimaryButton className="ml-4" processing={processing}>
                            Ajouter nouveau Admin
                        </PrimaryButton>
                    </div>
                </form>

                {!!admins.length && (
                    <div className="m-7 pb-5 overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                                <tr className="text-center">
                                    <th scope="col" className="px-6 py-3">
                                        Nom
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                        email
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {admins.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="bg-white border-b text-center  "
                                    >
                                        <td className="px-6 py-4">
                                            {item.fname} {item.lname}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.email}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
