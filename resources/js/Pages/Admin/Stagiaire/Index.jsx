import { useRef, useState } from "react";
import { Link, useForm, Head } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import AdminLayout from "@/Layouts/AdminLayout";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import Create from "./Create";
import Update from "./Edit";

export default function Stagiaire({
    admin,
    stagiaires,
    allowed_nf,
    allowed_filiere,
    allowed_group,
}) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [confirmingUserEdit, setConfirmingUserEdit] = useState(false);
    const [confirmingUserCreate, setConfirmingUserCreate] = useState(false);
    const [stagiaire, SetStagiaire] = useState({});
    const passwordInput = useRef();
    console.log(stagiaires);
    console.log(allowed_nf);
    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });
    // delete
    const confirmUserDeletion = (stagiaire) => {
        setConfirmingUserDeletion(true);
        SetStagiaire(stagiaire);
    };
    const closeModalDelete = () => {
        setConfirmingUserDeletion(false);
        reset();
    };
    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route("stagiaire.destroy", { id: stagiaire.id }), {
            preserveScroll: true,
            onSuccess: () => closeModalDelete(),
            onFinish: () => reset(),
        });
    };
    // update
    const confirmUserEdit = (stagiaire) => {
        setConfirmingUserEdit(true);
        SetStagiaire(stagiaire);
    };

    const closeModal = () => {
        setConfirmingUserEdit(false);
        reset();
    };
    // create
    const confirmUserCreate = () => {
        setConfirmingUserCreate(true);
    };

    const closeModalCreate = () => {
        setConfirmingUserCreate(false);
        reset();
    };

    return (
        <>
            <Head title="Stagaires" />

            <AdminLayout
                auth={admin}
                header={
                    <Link href="/admin/stagiaires">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Stagiaires
                        </h2>
                    </Link>
                }
            >
                <div className="relative mr-5 mt-5 overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="flex justify-around py-4 m-3 bg-white dark:bg-gray-900">
                        <div className="text-center my-auto">
                            <PrimaryButton onClick={confirmUserCreate}>
                                Ajouter Stagiaire
                            </PrimaryButton>
                        </div>
                        <label for="table-search" className="sr-only">
                            Search
                        </label>
                        <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="table-search"
                                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Rechercher Stagiaires"
                            />
                        </div>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Stagiaire
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Filiere
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Groupe
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Modifier
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Supprimer
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {stagiaires.data.map((stagiaire) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {stagiaire.fname +
                                            " " +
                                            stagiaire.lname}
                                    </th>
                                    <td className="px-6 py-4">
                                        {stagiaire.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {stagiaire.filiere}
                                    </td>
                                    <td className="px-6 py-4">
                                        {stagiaire.group}
                                    </td>
                                    <td className="px-6 py-4">
                                        <PrimaryButton
                                            as="button"
                                            method="get"
                                            href={route("stagiaire.edit", {
                                                id: stagiaire.id,
                                            })}
                                            onClick={() => {
                                                confirmUserEdit(stagiaire);
                                            }}
                                            className="font-medium  hover:underline"
                                        >
                                            Modifier
                                        </PrimaryButton>
                                    </td>
                                    <td className="px-6 py-4">
                                        <DangerButton
                                            // as="button"
                                            // method="delete"
                                            // onClick={confirmUserDeletion(stagiaire)}
                                            // href={route("stagiaire.destroy", {
                                            //     id: stagiaire.id,
                                            // })}
                                            onClick={() => {
                                                confirmUserDeletion(stagiaire);
                                            }}
                                            className="font-medium hover:underline"
                                        >
                                            Supprimer
                                        </DangerButton>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td className="p-5">
                                    {stagiaires.current_page !== 1 && (
                                        <Link href={stagiaires.prev_page_url}>
                                            {"<"}Precedent
                                        </Link>
                                    )}
                                </td>
                                <td colSpan={4}></td>
                                <td className="p-5">
                                    {!(
                                        stagiaires.last_page ===
                                        stagiaires.current_page
                                    ) && (
                                        <Link href={stagiaires.next_page_url}>
                                            Suivant{">"}
                                        </Link>
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={7}>
                                    {stagiaires.links.map((link) => (
                                        <td className="p-2">
                                            <Link href={link.url}>
                                                <h1>{link.label}</h1>
                                            </Link>
                                        </td>
                                    ))}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/*

             * Delete Form

            */}
                <Modal show={confirmingUserDeletion} onClose={closeModalDelete}>
                    <form onSubmit={deleteUser} className="p-6">
                        <h2 className="text-lg font-medium text-gray-900">
                            Êtes-vous sûr de vouloir supprimer votre compte ?
                        </h2>

                        <p className="mt-1 text-sm text-gray-600">
                            S'il te plaît entrez votre mot de passe pour
                            confirmer que vous souhaitez supprimer
                            définitivement votre compte.
                        </p>

                        <div className="mt-6">
                            <InputLabel
                                for="password"
                                value="Password"
                                className="sr-only"
                            />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                ref={passwordInput}
                                value={data.password}
                                handleChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                                isFocused
                                placeholder="Password"
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-6 flex justify-end">
                            <SecondaryButton onClick={closeModalDelete}>
                                Annuler
                            </SecondaryButton>

                            <DangerButton
                                className="ml-3"
                                processing={processing}
                            >
                                Supprimer le compte
                            </DangerButton>
                        </div>
                    </form>
                </Modal>
                {/*
                 * Delete Form
                 */}
                <Modal show={confirmingUserEdit} onClose={closeModal}>
                    <Update
                        className="p-5"
                        stagiaire={stagiaire}
                        onClose={closeModal}
                        allowed_nf={allowed_nf}
                        allowed_filiere={allowed_filiere}
                        allowed_group={allowed_group}
                    />
                </Modal>
                <Modal show={confirmingUserCreate} onClose={closeModalCreate}>
                    <Create
                        className="p-5"
                        stagiaire={stagiaire}
                        onClose={closeModalCreate}
                        allowed_nf={allowed_nf}
                        allowed_filiere={allowed_filiere}
                        allowed_group={allowed_group}
                    />
                </Modal>
            </AdminLayout>
        </>
    );
}
