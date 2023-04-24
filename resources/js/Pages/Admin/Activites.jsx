import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import Editor from "@/Components/JoditEditor";
import Authenticated from "@/Layouts/AuthenticatedLayout";
export default function Activites() {
    return (
        <>
            <Head title="Activites" />

            <Authenticated
                auth={{ user: { nom: "ali", prenom: "jalol" } }}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        La page des Activites ...
                    </h2>
                }
            >
                <AdminLayout>
                    <div className="m-5">
                        <div className="mb-6">
                            <label
                                htmlFor="large-input"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Titre d'activite
                            </label>
                            <input
                                type="text"
                                id="large-input"
                                className="block w-1/2 p-4_ text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Ajouter Activite
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Ecrire ici..."
                        ></textarea>
                        <PrimaryButton className="mt-2">Publier</PrimaryButton>
                    </div>
                    <div>
                        {/* JoditEditor */}
                        <Editor />
                        <PrimaryButton className="mt-2">Publier</PrimaryButton>
                    </div>
                </AdminLayout>
                ok
            </Authenticated>
        </>
    );
}
