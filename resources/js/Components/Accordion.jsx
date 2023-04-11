import { useState, createContext, useContext, Fragment } from "react";
import { Transition } from "@headlessui/react";

const DropDownContext = createContext();

const Accordion = ({ children }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
            <div className="relative">{children}</div>
        </DropDownContext.Provider>
    );
};

const Trigger = ({ children }) => {
    const { open, setOpen, toggleOpen } = useContext(DropDownContext);

    return (
        <>
            <div onClick={toggleOpen}>
                <h2>
                    <button
                        type="button"
                        className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200"
                    >
                        <span>{children}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            {open ? (
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                            ) : (
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                            )}
                        </svg>
                    </button>
                </h2>
            </div>

            {/* {open && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setOpen(false)}
                ></div>
            )} */}
        </>
    );
};

const Content = ({ contentClasses = "py-1 bg-white", children }) => {
    const { open, setOpen } = useContext(DropDownContext);

    return (
        <>
            <Transition
                as={Fragment}
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div
                    className="w-full mt-1 rounded-md shadow-sm"
                    onClick={() => setOpen(false)}
                >
                    <div className={`rounded-md ` + contentClasses}>
                        {children}
                    </div>
                </div>
            </Transition>
        </>
    );
};

Accordion.Trigger = Trigger;
Accordion.Content = Content;

export default Accordion;
