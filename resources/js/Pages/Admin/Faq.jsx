import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import Modal from "@/Components/Modal";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
export default function Faq({ faqs }) {
    const { data, setData, post, reset, errors, processing } = useForm({
        question: "",
        response: "",
    });
    const hundleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.faq.store"), {
            preserveScroll: true,
            onSuccess: reset(),
        });
    };
    // Edit

    const [canChange, setCanChange] = useState(false);
    const [question, setQuestion] = useState("");
    const [response, setResponse] = useState("");
    const [id, setId] = useState("");

    const closeModal = () => {
        setCanChange(false);
    };
    return (
        <>
            <Head title="Les demands" />
            <AdminLayout
                header={
                    <Link href={route("admin.faq")}>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            FAQs
                        </h2>
                    </Link>
                }
            >
                <Modal show={canChange} onClose={closeModal} maxWidth="sm">
                    <form className="p-5" autoComplete="off">
                        <div className="mb-6">
                            <InputLabel forInput="question" value="Question" />

                            <TextInput
                                id="question"
                                value={question}
                                className="w-full"
                                handleChange={(e) =>
                                    setQuestion(e.target.value)
                                }
                                required={true}
                            />
                        </div>
                        <div className="mb-6">
                            <InputLabel
                                forInput="response"
                                className="sr-only"
                            />

                            <textarea
                                name="response"
                                rows="4"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Saisissez une reponse"
                                value={response}
                                onChange={(e) => {
                                    setResponse(e.target.value);
                                }}
                                required
                            ></textarea>
                        </div>
                        <div className="flex justify-between">
                            <PrimaryButton
                                type="button"
                                onClick={closeModal}
                                className=""
                            >
                                Fermer
                            </PrimaryButton>
                            <Link
                                preserveScroll={true}
                                href={route("admin.faq.update", id)}
                                method="patch"
                                data={{
                                    question: question,
                                    response: response,
                                }}
                                as="button"
                                onClick={closeModal}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full_ sm:w-auto px-5 py-2.5 text-center   "
                            >
                                Mettre à jour
                            </Link>
                        </div>
                    </form>
                </Modal>
                <div className="m-7 overflow-x-auto shadow-md sm:rounded-lg">
                    <form onSubmit={hundleSubmit}>
                        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50  ">
                            <div className="px-4 py-2 bg-white rounded-t-lg ">
                                <InputLabel
                                    forInput="question"
                                    value="Question"
                                    // className="sr-only"
                                />
                                <TextInput
                                    id="question"
                                    type="text"
                                    name="question"
                                    autoComplete="question"
                                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={data.question}
                                    placeholder="Saisissez un question . . ."
                                    handleChange={(e) => {
                                        setData("question", e.target.value);
                                    }}
                                    required
                                />
                                <InputError message={errors.question} />
                            </div>
                            <div className="px-4 py-2 bg-white rounded-t-lg ">
                                <InputLabel
                                    forInput="response"
                                    value="Response"
                                />
                                <textarea
                                    id="response"
                                    name="response"
                                    rows="4"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500      "
                                    // className="w-full px-0 text-sm text-gray-900 bg-white border-0  focus:ring-0  "
                                    placeholder="Saisissez une reponse"
                                    value={data.response}
                                    onChange={(e) => {
                                        setData("response", e.target.value);
                                    }}
                                    required
                                ></textarea>
                                <InputError message={errors.response} />
                            </div>
                            <div className="flex items-center justify-between px-3 py-2 border-t ">
                                <button
                                    disabled={processing}
                                    type="submit"
                                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800"
                                >
                                    Ajouter FAQ
                                </button>
                            </div>
                        </div>
                    </form>
                    {!!faqs.data.length ? (
                        <fieldset className="flex flex-col border border-slate-400 rounded-lg px-4 py-2 space-y-2 m-2">
                            <legend className="p-2">FAQs</legend>

                            {faqs.data.map((faq, index) => (
                                <article
                                    key={index}
                                    className="border border-transparent border-b-slate-400 space-y-1  pb-2"
                                >
                                    <div className="inline-flex space-x-1">
                                        <Link
                                            as="button"
                                            href={route(
                                                "admin.faq.destroy",
                                                faq.id
                                            )}
                                            method="delete"
                                            className="font-bold text-red-400  rounded-md hover:bg-red-400 hover:text-white p-1"
                                            preserveScroll={true}
                                            onClick={(e) => {
                                                !confirm(
                                                    "Êtes-vous sûr de vouloir supprimer définitivement ce FAQ"
                                                ) && e.preventDefault();
                                            }}
                                        >
                                            Supprimer
                                        </Link>

                                        <button
                                            onClick={() => {
                                                setCanChange(true);
                                                setQuestion(faq.question);
                                                setResponse(faq.response);
                                                setId(faq.id);
                                            }}
                                            className="font-bold text-green-400  rounded-md hover:bg-green-400 hover:text-white p-1"
                                        >
                                            Modifier
                                        </button>
                                    </div>

                                    <div>
                                        <h1 className="text-lg">
                                            {faq.question}
                                        </h1>

                                        <p className="text-sm">
                                            {faq.response}
                                        </p>
                                    </div>
                                </article>
                            ))}
                            {faqs.total > faqs.per_page && (
                                <nav
                                    aria-label="Page navigation example"
                                    className="block py-4 mx-auto"
                                >
                                    <ul className="inline-flex -space-x-px">
                                        {faqs.links.map((link, index) => (
                                            <li key={index} className="">
                                                <Link
                                                    preserveScroll={true}
                                                    href={link.url}
                                                    className={
                                                        link.active
                                                            ? "px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700   "
                                                            : index === 0
                                                            ? "px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700     "
                                                            : index ===
                                                              faqs.links
                                                                  .length -
                                                                  1
                                                            ? "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700     "
                                                            : "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700     "
                                                    }
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            )}
                        </fieldset>
                    ) : (
                        <div className="text-center py-2 font-sans">
                            Il semble qu'il n'y ait aucune donnée disponible à
                            afficher.
                        </div>
                    )}
                </div>
            </AdminLayout>
        </>
    );
}
