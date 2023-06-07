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
                    <div className="text-right py-4 m-3">
                        <PrimaryButton onClick={confirmUserCreate}>
                            Ajouter Stagiaire
                        </PrimaryButton>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
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
                            {stagiaires.data.map((stagiaire, index) => (
                                <tr
                                    key={index}
                                    className="bg-white border-b   hover:bg-gray-50 "
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
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
                                    {stagiaires.links.map((link, index) => (
                                        <td key={index} className="p-2">
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
