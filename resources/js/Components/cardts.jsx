import { Transition } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import { useState, useEffect, Fragment } from "react";

export default function Cardts({ title, content, path }) {
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
            className="block h-40 w-full md:h-60 md:w-60 overflow-hidden mx-2 m-5 p-6 pt-16 md:text-white    text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "

        >

            <span href="#">
                <h5 className="mb-2 text-2xl  font-semibold text-blue-600 tracking-tight text-gray-900 dark:text-white">
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
