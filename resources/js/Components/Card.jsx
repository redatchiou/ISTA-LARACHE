import { Transition } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import { useState, useEffect, Fragment } from "react";
import { IconContext } from "react-icons";
export default function Card({ title, icon }) {
    // const [offset, setOffset] = useState(0);
    // const [IsHovering, setIsHovering] = useState(false);
    // useEffect(() => {
    //     const onScroll = () => setOffset(window.pageYOffset);
    //     // clean up code
    //     window.removeEventListener("scroll", onScroll);
    //     window.addEventListener("scroll", onScroll, { passive: true });
    //     return () => window.removeEventListener("scroll", onScroll);
    // }, []);

    return (
        <div
            // onMouseEnter={() => setIsHovering(true)}
            // onMouseLeave={() => setIsHovering(false)}
            className="block h-auto overflow-hidden mx-2 m-5 p-6 text-center bg-white hover:bg-slate-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
            <IconContext.Provider
                value={{
                    className:
                        "w-10 h-10 mb-2 mx-auto text-gray-500 dark:text-gray-400",
                }}
            >
                <div>{icon}</div>
            </IconContext.Provider>

            <span href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
            </span>
        </div>
    );
}

function T({ children, state }) {
    return (
        <Transition
            as={Fragment}
            show={state}
            enter="ease-in-out duration-1000"
            enterFrom="scale-100"
            enterTo="scale-110"
            leave="ease-in-out duration-1000"
            leaveFrom="scale-110"
            leaveTo="scale-100"
        >
            {children}
        </Transition>
    );
}
