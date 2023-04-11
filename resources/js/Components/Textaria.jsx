import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextTextaria(
    {
        type = "text",
        name,
        id,
        value,
        className,
        autoComplete,
        required,
        isFocused,
        handleChange,
        rows,
        placeholder,

    },
    ref
) {
    const Textaria = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            Textaria.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <textarea
                type={type}
                name={name}
                id={id}
                value={value}
                className={
                    `border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ` +
                    className
                }
                rows={rows}
                placeholder={placeholder}

                ref={Textaria}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
});

