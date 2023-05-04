import GeneralLayout from "@/Layouts/GeneralLayout";
import { Head, Link } from "@inertiajs/react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import Footer from "@/Components/Footer";

export default function Contact() {
    return (
        <>
            <Head title="Filieres" />
            <GeneralLayout
                header={
                    <div className="flex flex-row max-sm:flex-col justify-start">
                        <Link href="/contact">
                            <h2
                                title="Contact"
                                className="font-semibold text-xl text-gray-800 leading-tight"
                            >
                                Contact
                            </h2>
                        </Link>
                    </div>
                }
            >

<div class="flex items-center justify-center p-5">


<div class="mx-auto w-full max-w-[550px]">

    <form >
    {/* onSubmit={submit} */}

        <div class="mb-5">
            <label
                for="email"
                class="mb-3 block text-base font-medium text-[#07074D]"
            >
                Sujet
            </label>
            <input
                type="text"
                name="question"

                required
                // onChange={onHandleChange}
                // value={data.question}
                placeholder="Sujet"
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
                name="response"

                // onChange={onHandleChange}
                // value={data.response}
                placeholder="Entree votre message"
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
        </div>
        <div>
            <button type="submit" class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">Envoyee</button>
        </div>
    </form>

</div>
</div>
                {/* <form className="m-2">
                    <div class="w-full mb-4 bg-white border border-gray-200 rounded-lg ">
                        <div className="pl-4 mb-2">
                            <label
                                for="small-input"
                                class="block mb-2 text-sm font-medium dark:text-white"
                            >
                                Sujet
                            </label>
                            <input
                                type="text"
                                id="small-input"
                                class="block w-1/2 p-2  border border-gray-300 rounded-lg sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>

                        <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                            <label for="comment" class="sr-only">
                                Your comment
                            </label>
                            <textarea
                                id="comment"
                                rows="2"
                                cols="2"
                                class="w-full text-sm border border-gray-300 bg-white rounded-lg dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                placeholder="Saiser vote meeage..."
                                required
                            ></textarea>
                        </div>
                        <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                            <button
                                type="submit"
                                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                            >
                                Envoyer
                            </button>
                        </div>
                    </div>
                </form> */}

                {/* <div className="flex flex-row justify-between">
                    <div className="flex-1 p-5">
                        <span className="text-lg">
                            <MdAlternateEmail />{" "}
                        </span>
                        <span className="bg-yellow-200 font-mono">
                            mail@mail.com
                        </span>{" "}
                    </div>
                    <div className="flex-1 p-5">
                        <span className="text-lg">
                            <BsFillTelephoneFill />{" "}
                        </span>
                        <span className="bg-yellow-200 font-mono">
                            +212 54085403
                        </span>{" "}
                    </div>
                </div> */}
            </GeneralLayout>
            <Footer />
        </>
    );
}
