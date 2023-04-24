import GeneralLayout from "@/Layouts/GeneralLayout";
import { Head, Link } from "@inertiajs/react";
export default function Contact() {
    return (
        <>
            <Head title="Filieres" />
            <GeneralLayout
                auth={{ user: { nom: "ali", prenom: "jalol" } }}
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
                <div className="flex flex-auto justify-around">
                    <div>Email</div>
                    <div>Contact</div>
                    <div>Tel</div>
                </div>
                <hr className="my-5" />

                <form>
                    <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                        <div className="pl-4">
                            <label
                                for="small-input"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Small input
                            </label>
                            <input
                                type="text"
                                id="small-input"
                                class="block w-1/4 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <br />

                        <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                            <label for="comment" class="sr-only">
                                Your comment
                            </label>
                            <textarea
                                id="comment"
                                rows="4"
                                class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
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
                </form>
            </GeneralLayout>
        </>
    );
}
