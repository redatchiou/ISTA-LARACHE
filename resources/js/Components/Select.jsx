import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    {
        name,
        id,
        className,
        autoComplete,
        required,
        isFocused,
        handleChange,
        children,
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <select
                name={name}
                id={id}
                className={
                    `border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            >
                {children}
            </select>
        </div>
    );
});
