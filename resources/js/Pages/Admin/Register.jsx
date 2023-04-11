import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

export default function adminRegister() {
    const { data, setData, post, processing, errors, reset } = useForm({
        fname: "",
        lname: "",
        email: "",
        password: "",
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
        post("/admin/register");
    };
    return (
        <form onSubmit={submit}>
            <div>
                <InputLabel forInput="fname" value="fname" />

                <TextInput
                    id="fname"
                    type="text"
                    name="fname"
                    value={data.fname}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    isFocused={true}
                    handleChange={onHandleChange}
                />

                <InputError message={errors.fname} className="mt-2" />
            </div>
            <div>
                <InputLabel forInput="lname" value="lname" />

                <TextInput
                    id="lname"
                    type="text"
                    name="lname"
                    value={data.lname}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    isFocused={true}
                    handleChange={onHandleChange}
                />

                <InputError message={errors.lname} className="mt-2" />
            </div>
            <div>
                <InputLabel forInput="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="email"
                    isFocused={true}
                    handleChange={onHandleChange}
                />

                <InputError message={errors.email} className="mt-2" />
            </div>
            <div>
                <InputLabel forInput="password" value="password" />

                <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    isFocused={true}
                    handleChange={onHandleChange}
                />

                <InputError message={errors.password} className="mt-2" />
            </div>
            <PrimaryButton className="ml-4" processing={processing}>
                Login
            </PrimaryButton>
        </form>
    );
}
