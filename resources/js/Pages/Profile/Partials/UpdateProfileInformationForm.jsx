import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Select from "@/Components/Select";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className,
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            prenom: user.prenom,
            nom: user.nom,
            tel: user.tel,
            nf: user.nf,
            spe: user.spe,
            groupe: user.groupe,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Mettre à jour les informations de profil de votre compte.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel for="prenom" value="Prenom" />

                    <TextInput
                        id="prenom"
                        className="mt-1 block w-full"
                        value={data.prenom}
                        handleChange={(e) => setData("prenom", e.target.value)}
                        required
                        isFocused
                        autoComplete="prenom"
                    />

                    <InputError className="mt-2" message={errors.prenom} />
                </div>
                <div>
                    <InputLabel for="nom" value="Nom" />

                    <TextInput
                        id="nom"
                        className="mt-1 block w-full"
                        value={data.nom}
                        handleChange={(e) => setData("nom", e.target.value)}
                        required
                        isFocused
                        autoComplete="nom"
                    />

                    <InputError className="mt-2" message={errors.nom} />
                </div>
                <div>
                    <InputLabel for="tel" value="Tel" />

                    <TextInput
                        id="tel"
                        className="mt-1 block w-full"
                        value={data.tel}
                        handleChange={(e) => setData("tel", e.target.value)}
                        required
                        isFocused
                        autoComplete="tel"
                    />

                    <InputError className="mt-2" message={errors.tel} />
                </div>
                <div>
                    <InputLabel for="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        handleChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="email"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>
                <div>
                    <InputLabel for="nf" value="Niveau de formation" />
                    <Select
                        id="nf"
                        className="mt-1 block w-full"
                        handleChange={(e) => setData("nf", e.target.value)}
                        required
                        autoComplete="nf"
                    >
                        <option value={data.nf} defaultValue>
                            NF
                        </option>
                        <option value="ok">Value</option>
                        <option value="ok">Value</option>
                    </Select>

                    <InputError className="mt-2" message={errors.nf} />
                </div>
                <div>
                    <InputLabel for="spe" value="Filiere" />
                    <Select
                        id="spe"
                        className="mt-1 block w-full"
                        handleChange={(e) => setData("spe", e.target.value)}
                        required
                        autoComplete="spe"
                    >
                        <option value={data.spe} defaultValue>
                            Spe
                        </option>
                        <option value="ok">Value</option>
                        <option value="ok">Value</option>
                    </Select>

                    <InputError className="mt-2" message={errors.spe} />
                </div>
                <div>
                    <InputLabel for="groupe" value="Groupe" />
                    <Select
                        id="groupe"
                        className="mt-1 block w-full"
                        handleChange={(e) => setData("groupe", e.target.value)}
                        required
                        autoComplete="groupe"
                    >
                        <option value={data.groupe} defaultValue>
                            Group
                        </option>
                        <option value="ok">Value</option>
                        <option value="ok">Value</option>
                    </Select>

                    <InputError className="mt-2" message={errors.groupe} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton processing={processing}>
                        Enregistrer
                    </PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600">Enregistrée.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
