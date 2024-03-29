import AdminLayout from "@/Layouts/AdminLayout";
import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useState } from "react";






export default function Faqs({ admin }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        question: "",
        response: "",


    });

    const [showAlert, setShowAlert] = useState(false);


    useEffect(() => {
        onHandleChange
    }, []);

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
        reset()
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
        post(route("admin.faqs.create"));
    };


    return (
        <>
        <AdminLayout
            auth={admin}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Faqs
                </h2>
            }
        >
            <Head title="Demande" />
            {showAlert && (
                <div class="flex bg-green-200 rounded-lg p-4 mb-4 text-sm text-green-700 w-96 ml-80 mt-4" role="alert">
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor" height="20" width="20"><path fill="green" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z" id="mainIconPathAttribute" stroke-width="2" stroke="#ff0000"></path></svg>
                    {/* <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg> */}
                    <div>
                        <span class="font-medium ml-3">La question etait Cree </span>
                    </div>
                </div>
            )}

            <div class="flex items-center justify-center p-5">


                <div class="mx-auto w-full max-w-[550px]">

                    <form onSubmit={submit}>

                        <div class="mb-5">
                            <label
                                for="email"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Qestion
                            </label>
                            <input
                                type="text"
                                name="question"

                                required
                                onChange={onHandleChange}
                                value={data.question}
                                placeholder="Question"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div class="mb-5">
                            <label
                                for="message"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Responce
                            </label>
                            <textarea
                                rows="4"
                                required
                                name="response"

                                onChange={onHandleChange}
                                value={data.response}
                                placeholder="Entre la responce"
                                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                        </div>
                        <div>
                            <button type="submit" class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">Cree Question</button>
                        </div>
                    </form>

                </div>
            </div>


        </AdminLayout>

        </>




    );

}
