import { Transition } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import { useState, useEffect, Fragment } from "react";

export default function Carde({ title , vv,src }) {
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
            className="block h-40 md:h-60 w-full md:w-60 overflow-hidden mx-2 m-5 p-6 pt-16 md:text-white    text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
        >
            <img
                src={src}

            />



            <span href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-blue-600 dark:text-white  ">
                    {title}
                </h5>
            </span>
            <button  className=" bg-blue-600 mt-16 mb-0 rounded text-white  w-40 h-8">

                <a href="#"> Lire Les information {vv}</a>
            </button>


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
