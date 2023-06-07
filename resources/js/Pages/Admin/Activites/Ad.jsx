import { Link, Head, useForm, usePage } from "@inertiajs/react";
import DangerButton from "@/Components/DangerButton";
export default function Annonce() {
    const { annonce } = usePage().props;
    console.log(annonce);
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "annonce",
        body: !!annonce ? annonce.body : "",
        is_annonce: true,
    });
    const hundleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.activites.store"));
        reset();
    };
    return (
        <div className="mx-5 bg-black my-3 overflow-x-auto shadow-md sm:rounded-lg max-sm:mx-0">
            <form onSubmit={hundleSubmit}>
                <div className="w-full border border-gray-200  bg-gray-50  ">
                    <div className="px-4 py-2 bg-white rounded-t-lg ">
                        <label for="comment" className="sr-only">
                            Anonnce
                        </label>
                        <textarea
                            id="response"
                            name="response"
                            rows="4"
                            className="w-full px-2 text-sm text-gray-900 bg-white border-0 rounded-md  focus:ring-0  "
                            placeholder="Saisissez . . ."
                            value={data.body}
                            onChange={(e) => {
                                setData("body", e.target.value);
                            }}
                            required
                        ></textarea>
                    </div>
                    <hr />
                    <div className="bg-white flex items-center justify-between px-3 py-2  ">
                        <button
                            disabled={processing}
                            type="submit"
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800"
                        >
                            {!!annonce ? "Mettre à jour" : "Ajouter Annonce"}
                        </button>
                        {!!annonce && (
                            <Link
                                as="button"
                                href={route(
                                    "admin.activites.destroy",
                                    annonce.id
                                )}
                                method="delete"
                            >
                                <DangerButton type="button">
                                    Supprimer
                                </DangerButton>
                            </Link>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}
