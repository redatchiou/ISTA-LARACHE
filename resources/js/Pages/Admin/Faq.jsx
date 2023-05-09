import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import Modal from "@/Components/Modal";
import { MdDelete, MdEditSquare, MdCheck } from "react-icons/md";
import PrimaryButton from "@/Components/PrimaryButton";
export default function Faq({ faqs }) {
    console.log(faqs);
    const { data, setData, post, reset, processing } = useForm({
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
                    <form
                        // onSubmit={handleSubmit}
                        className="p-5"
                        autoComplete="off"
                    >
                        <div className="mb-6">
                            <label
                                htmlFor="trainer"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Question
                            </label>
                            <input
                                defaultValue={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                type="text"
                                id="trainer"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="response" className="sr-only">
                                Reponse
                            </label>

                            <textarea
                                name="response"
                                rows="4"
                                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                placeholder="Reponse"
                                value={response}
                                onChange={(e) => {
                                    setResponse(e.target.value);
                                }}
                                required
                            ></textarea>
                        </div>
                        <div className="flex justify-between">
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
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full_ sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Mise a jour
                                <MdCheck className="ml-1 inline fill-white" />
                            </Link>
                            <PrimaryButton onClick={closeModal} className="">
                                Fermer
                            </PrimaryButton>
                        </div>
                    </form>
                </Modal>
                <div className="m-7 overflow-x-auto shadow-md sm:rounded-lg">
                    <form onSubmit={hundleSubmit}>
                        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                <label for="comment" className="sr-only">
                                    Your comment
                                </label>
                                <input
                                    id="question"
                                    name="question"
                                    className="w-full h-8 px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:outline-0 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                    placeholder="Question ?"
                                    value={data.question}
                                    onChange={(e) => {
                                        setData("question", e.target.value);
                                    }}
                                    required
                                />
                            </div>
                            <hr />
                            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                <label for="comment" className="sr-only">
                                    Your comment
                                </label>
                                <textarea
                                    id="response"
                                    name="response"
                                    rows="4"
                                    className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                    placeholder="Reponse"
                                    value={data.response}
                                    onChange={(e) => {
                                        setData("response", e.target.value);
                                    }}
                                    required
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                                <button
                                    disabled={processing}
                                    type="submit"
                                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                                >
                                    Ajouter FAQ
                                </button>
                            </div>
                        </div>
                    </form>
                    <fieldset className="flex flex-col border border-blue-300 p-2 space-y-2 m-2">
                        <legend className="p-2">FAQs</legend>

                        {faqs.map((faq) => (
                            <article className="border border-transparent border-b-blue-300 space-y-1  p-1">
                                <Link
                                    as="button"
                                    href={route("admin.faq.destroy", faq.id)}
                                    method="delete"
                                    className="text-red-500 p-1"
                                    preserveScroll={true}
                                >
                                    Supprimer
                                    <MdDelete className="inline " />
                                </Link>
                                <button
                                    onClick={() => {
                                        setCanChange(true);
                                        setQuestion(faq.question);
                                        setResponse(faq.response);
                                        setId(faq.id);
                                    }}
                                    className="text-green-400 p-1"
                                >
                                    Modifier
                                    <MdEditSquare className="inline " />
                                </button>

                                <div>
                                    <h1 className="text-lg">{faq.question}</h1>

                                    <p className="text-sm">{faq.response}</p>
                                </div>
                            </article>
                        ))}
                    </fieldset>
                </div>
            </AdminLayout>
        </>
    );
}
