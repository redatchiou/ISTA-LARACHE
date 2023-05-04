import { Head, useForm, Link } from "@inertiajs/react";
import { Disclosure } from "@headlessui/react";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import Accordion from "@/Components/Accordion";
import DisclosureFake from "@/Components/Disclosure";
import Footer from "@/Components/Footer";
import GeneralLayout from "@/Layouts/GeneralLayout";

export default function Faq({ faqs, filtered, keyword }) {
    console.log(filtered);
    console.log(faqs);
    console.log(keyword);

    const { data, setData, get } = useForm({
        query: "",
    });

    const hadleSearch = (e) => {
        e.preventDefault();
        get("/faq", data.query);
    };
    return (
        <>
            <Head title="Faq" />

            <GeneralLayout
                header={
                    <div className="flex flex-row max-sm:flex-col items-center justify-evenly">
                        <Link href="/faq">
                            <h2
                                title="Question"
                                className="font-semibold text-xl text-gray-800 leading-tight"
                            >
                                Question
                            </h2>
                        </Link>

                        <label htmlFor="table-search" className="sr-only">
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
                            <form onSubmit={hadleSearch}>
                                <input
                                    title="Tapez pour lancer"
                                    type="text"
                                    id="table-search"
                                    className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Rechercher .."
                                    onChange={(e) => {
                                        setData("query", e.target.value);
                                    }}
                                />
                                <input type="submit" hidden />
                            </form>
                        </div>
                    </div>
                }
            >
                <div className="mx-auto w-full mt-4 max-w-5xl rounded-2xl bg-white p-2">
                    {!!filtered.length && (
                        <div className="mb-20">
                            <div>
                                Result base sur:{" "}
                                <span className="bg-gray-100 rounded-sm px-1">
                                    `{keyword}`
                                </span>{" "}
                            </div>
                            {filtered.map((i) => (
                                <Disclosure
                                    as="div"
                                    className="mt-2"
                                    key={i.id}
                                >
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                <span>{i.question}</span>

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                    className="text-purple-500"
                                                >
                                                    {open ? (
                                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                    ) : (
                                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                    )}
                                                </svg>
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                {i.response}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </div>
                    )}
                    {/* -------------------------------- */}
                    {!!filtered.length && <div>Décovrir aussi ..</div>}
                    {faqs.map((faq) => (
                        <Disclosure as="div" className="mt-2" key={faq.id}>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                        <span>{faq.question}</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                            className="text-purple-500"
                                        >
                                            {open ? (
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                            ) : (
                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                            )}
                                        </svg>
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                        {faq.response}
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    ))}
                </div>
                {/* <div className="min-h-screen_ mt-10 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
                    <div className="w-full sm:max-w-5xl mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        {faqs.map((faq) => (
                            <Accordion key={faq.id}>
                                <Accordion.Trigger>
                                    {faq.question}
                                </Accordion.Trigger>
                                <Accordion.Content>
                                    <div className="block py-5 font-light mb-2 text-gray-500">
                                        {faq.response}
                                    </div>
                                </Accordion.Content>
                            </Accordion>
                        ))}
                    </div>
                </div> */}
            </GeneralLayout>
            <Footer />
        </>
    );
}
