import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link, Head, useForm } from "@inertiajs/react";
export default function Annonce() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "annonce",
        body: "",
        is_annonce: true,
    });
    const hundleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("admin.activites.store"));
    };
    return (
        <div className="m-7 overflow-x-auto shadow-md sm:rounded-lg">
            <form onSubmit={hundleSubmit}>
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label for="comment" className="sr-only">
                            Your Body
                        </label>
                        <textarea
                            id="response"
                            name="response"
                            rows="4"
                            className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                            placeholder="Saisser Annone"
                            value={data.body}
                            onChange={(e) => {
                                setData("body", e.target.value);
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
                            Ajouter Annonce
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
