import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import "../../../../css/jodit.css";
import { useForm } from "@inertiajs/react";

export default function Activites({ placeholder }) {
    const editor = useRef(null);
    const [content, setContent] = useState("");

    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        body: "",
    });
    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("admin.activites.store"));
    };
    const handleFileUpload = (file) => {
        const formData = new FormData();
        formData.append("file", file);
        // post(route("admin.activites.store"), formData);
        fetch(route("admin.activites.store"), {
            method: "POST",
            body: formData,
        });
        // fetch("/api/upload", {
        //     method: "POST",
        //     body: formData,
        // })
        //     .then((response) => response.json())
        //     .then((data) => console.log(data))
        //     .catch((error) => console.error(error));
    };
    const config = useMemo(
        () => ({
            style: {
                background: "#F5F5F5",
                // color: "rgba(255,255,255,0.5)",
            },
            // buttons:
            //     "bold,italic,underline,strikethrough,eraser,ul,ol,font,fontsize,paragraph,classSpan,lineHeight,superscript,subscript,file,image,video,spellcheck,cut",
            toolbarSticky: true,
            enableDragAndDropFileToEditor: true,

            uploader: {
                insertImageAsBase64URI: true,
                url: "/upload-image",
                format: "json",
                success: (data) => {
                    const url = `storage/${data.path}`;
                    setContent(content + `<img src="${url}" alt="" />`);
                },
            },

            beautifyHTML: false,
            language: "fr",
            readonly: false, // all options from https://xdsoft.net/jodit/docs/ ,
            placeholder: placeholder || "Saiser ici ...",
        }),
        [placeholder]
    );
    return (
        <AdminLayout>
            <form onSubmit={submit}>
                <div className="mb-6">
                    <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Titre d'activite
                    </label>
                    <input
                        onChange={(e) => setData("title", e.target.value)}
                        type="text"
                        id="title"
                        name="title"
                        className="block w-1/2  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    {errors.title && (
                        <p className="text-red-500 font-light">
                            {errors.title}
                        </p>
                    )}
                </div>
                <div className="mr-5">
                    <div>
                        <JoditEditor
                            ref={editor}
                            value={content}
                            config={config}
                            onFileUpload={handleFileUpload}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={(newContent) => {
                                console.log(newContent);
                                setData("body", newContent);
                            }}
                        />
                    </div>
                    <PrimaryButton type="submit" className="mt-2">
                        Publier
                    </PrimaryButton>
                </div>
            </form>
        </AdminLayout>
    );
}
