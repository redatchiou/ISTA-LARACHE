import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import InputLabel from "@/Components/InputLabel";
// import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import TextTextaria from '@/Components/Textaria'





export default function Activites() {
    const { data, setData, post, processing, errors, reset } = useForm({
        titre: "",
        datee: "",
        message: "",

    });

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
        post("/admin/activite");
    };
    return (

        <AdminLayout>
            <form onSubmit={submit}>
            <div className="m-5 ml-20 ">
                <div className="mb-6">
                    <InputLabel forInput="Titre d'activite" value="Titre d'activite" />

                    <TextInput
                        id="titre"
                        type="text"
                        name="titre"
                        value={data.titre}
                        className="block mb-2 w-96 text-lg font-medium text-gray-900 dark:text-white"
                        autoComplete="titre"
                        isFocused={false}
                        handleChange={onHandleChange}
                    />

                </div>
                <div className="mb-6">
                    <InputLabel forInput="Date d'activite" value="Date d'activite" />

                    <TextInput
                        id="datee"
                        type="date"
                        name="datee"
                        value={data.datee}
                        className="block mb-2 w-96 text-lg font-medium text-gray-900 dark:text-white"
                        autoComplete="datee"
                        isFocused={false}
                        handleChange={onHandleChange}
                    />

                </div>
                <div className="mb-6">
                <InputLabel fortextarea="message" value="Ajouter Activite" />
                <TextTextaria
                    id="message"
                    name="message"
                    type="text"
                    value={data.message}
                    autoComplete="message"
                    className="block p-2.5 w-1/2 h-70 w-96 text-lg text-gray-900 dark:text-white  rounded-lg "
                    isFocused={false}
                    handleChange={onHandleChange}
                    placeholder="Ecrire ici..."
                    rows="4"
                />
                </div>
                <PrimaryButton className="ml-4" processing={processing}>
                Publier
                </PrimaryButton>
            </div>
            </form>
        </AdminLayout >



    );
}




