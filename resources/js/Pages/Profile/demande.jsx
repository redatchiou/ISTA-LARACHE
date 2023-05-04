import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { TbTrashFilled, TbEdit } from "react-icons/tb";
import { IconContext } from "react-icons";
import { useState } from "react";




export default function Demande({ user ,demande }) {
    // console.log(demande);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        groupe: "",
        message: "",

    });
    const [showAlert, setShowAlert] = useState(false);


    useEffect(() => {
        onHandleChange
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
        reset()
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
        post(route("profile.demande.create"));
    };


    return (
        <AuthenticatedLayout
            user={user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Mes demandes
                </h2>
            }
        >
            <Head title="Demande" />
            {showAlert && (
                <div class="flex bg-green-200 rounded-lg p-4 mb-4 text-sm text-green-700 w-96 ml-80 mt-4" role="alert">
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor" height="20" width="20"><path fill="green" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z" id="mainIconPathAttribute" stroke-width="2" stroke="#ff0000"></path></svg>
                    {/* <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg> */}
                    <div>
                        <span class="font-medium ml-3">Votre demande et envoyee</span>
                    </div>
                </div>
            )}

            <div class="flex items-center justify-center p-5">


                <div class="mx-auto w-full max-w-[550px]">

                    <form onSubmit={submit}>
                        <div class="mb-5">
                            <label
                                for="name"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                NomComplet
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                onChange={onHandleChange}
                                value={data.name}
                                id="name"
                                placeholder="NomComplet"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5">
                            <label
                                for="email"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Groupe
                            </label>
                            <input
                                type="text"
                                name="groupe"
                                id="email"
                                required
                                onChange={onHandleChange}
                                value={data.groupe}
                                placeholder="Groupe"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div class="mb-5">
                            <label
                                for="message"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Message
                            </label>
                            <textarea
                                rows="4"
                                required
                                name="message"
                                id="message"
                                onChange={onHandleChange}
                                value={data.message}
                                placeholder="Entre votre demande"
                                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                        </div>
                        <div>
                            <button type="submit" class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">envoyer votre demande</button>
                        </div>
                    </form>

                </div>
            </div>
            <div>
                <h2 className="text-center uppercase text-indigo-800">Liste de votre demande </h2>
            </div>
            <div className="m-7 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="text-center">
                            <th scope="col" className="px-6 py-3">
                                Sujet
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Message
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Date de demande
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Modifie
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Annuler
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {demande.map((item) => (
                            <tr className="bg-white border-b text-center dark:bg-gray-900 dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item.message}



                                </th>
                                <td className="px-6 py-4">{item.name} </td>
                                <td className="px-6 py-4">{item.created_at}</td>
                                <td className="px-6 py-4">
                                <Link
                                        method="delete"
                                        href={route("demande.destroy", item.id)}
                                        id={item.id}
                                        className="font-medium hover:underline"


                                    >
                                          <IconContext.Provider
                                            value={{
                                                className:
                                                    "inline h-7 w-7 pl-1 text-teal-500",
                                            }}
                                        >
                                            <span>
                                                <TbEdit />
                                            </span>
                                        </IconContext.Provider>

                                    </Link>

                                </td>
                                <td>

                                    <Link
                                        method="delete"
                                        href={route("demande.destroy", item.id)}
                                        id={item.id}
                                        className="font-medium hover:underline"


                                    >
                                         <IconContext.Provider
                                            value={{
                                                className:
                                                    "inline h-6 w-6 pl-1  text-red-500",
                                            }}
                                        >
                                            <span>
                                                <TbTrashFilled />
                                            </span>
                                        </IconContext.Provider>

                                    </Link>


                                </td>
                            </tr>

                        ))

                        }


                    </tbody>



                </table>
            </div>


        </AuthenticatedLayout>


    );

}
