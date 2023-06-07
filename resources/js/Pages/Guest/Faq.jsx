import { Head, useForm, Link } from "@inertiajs/react";
import { Disclosure } from "@headlessui/react";

import Footer from "@/Components/Footer";
import GeneralLayout from "@/Layouts/GeneralLayout";
export default function Faq({ faqs }) {
    return (
        <>
            <Head title="Faq" />

            <GeneralLayout
                header={
                    <div className="flex flex-row max-sm:flex-col items-start justify-start">
                        <Link href="/faq">
                            <h2
                                title="Question"
                                className="font-semibold text-xl text-gray-800 leading-tight"
                            >
                                Question
                            </h2>
                        </Link>
                    </div>
                }
            >
                {!!faqs.length ? (
                    <div className="mx-auto w-full mt-4 max-w-5xl rounded-2xl bg-white p-2">
                        <div>
                            {faqs.map((faq) => (
                                <Disclosure
                                    as="div"
                                    className="mt-2"
                                    key={faq.id}
                                >
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
                    </div>
                ) : (
                    <div className="text-center py-2 font-sans">
                        Il semble qu'il n'y ait aucune donnée disponible à
                        afficher.
                    </div>
                )}
            </GeneralLayout>
            <Footer />
        </>
    );
}
