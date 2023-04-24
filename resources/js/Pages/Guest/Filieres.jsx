import { Link, Head } from "@inertiajs/react";
import GeneralLayout from "@/Layouts/GeneralLayout";
export default function Filieres({ filieres, modules, info, home }) {
    console.log(modules);
    const filieres_spe = filieres.filter((filiere) => filiere.nf === "Spe");
    const filieres_qualif = filieres.filter(
        (filiere) => filiere.nf === "Qualif"
    );
    const filieres_t = filieres.filter((filiere) => filiere.nf === "T");
    const filieres_ts = filieres.filter((filiere) => filiere.nf === "TS");
    const list = [filieres_ts, filieres_t, filieres_qualif, filieres_spe];

    return (
        <>
            <Head title="Filieres" />

            <GeneralLayout
                auth={{ user: { nom: "ali", prenom: "jalol" } }}
                header={
                    <div className="flex flex-row max-sm:flex-col justify-start">
                        <Link href="/filieres">
                            <h2
                                title="Question"
                                className="font-semibold text-xl text-gray-800 leading-tight"
                            >
                                Filieres
                            </h2>
                        </Link>
                    </div>
                }
            >
                <div className="flex flex-row">
                    <div className="w-1/3 pl-5 ">
                        {list.map((filiere, index) => (
                            <div key={index}>
                                <h3 className="border-l p-1 border-l-slate-500 font-extrabold">
                                    {index === 0 ? (
                                        <span className="text-green-500">
                                            TS
                                        </span>
                                    ) : index === 1 ? (
                                        <span className="text-emerald-700">
                                            T
                                        </span>
                                    ) : index === 2 ? (
                                        <span className="text-amber-600">
                                            Qualif
                                        </span>
                                    ) : (
                                        <span className="text-sky-600">
                                            Spe
                                        </span>
                                    )}
                                </h3>
                                <hr className="m-1 " />
                                <div className="flex flex-col">
                                    {filiere.map((f, i) => (
                                        <Link
                                            className={`w-full text-left py-1 px-4 rounded-md hover:text-white
                                                ${
                                                    f.nf === "TS"
                                                        ? "hover:bg-green-500"
                                                        : f.nf === "T"
                                                        ? "hover:bg-emerald-700"
                                                        : f.nf === "Qualif"
                                                        ? "hover:bg-amber-600"
                                                        : "hover:bg-sky-600"
                                                }`}
                                            key={i}
                                            method="get"
                                            as="button"
                                            href={route("filieres", {
                                                id: f.name,
                                            })}
                                        >
                                            {f.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-3/4">
                        {modules ? (
                            <>
                                <h1 className="text-lg font-semibold">
                                    Description sur la branche
                                </h1>
                                <p className="pl-3 ">{info}</p>
                                <hr className="my-1" />
                                <div className="">
                                    {!!modules.length ? (
                                        <div className="">
                                            <h3 className="text-lg font-semibold">
                                                Les modules de Filieres
                                            </h3>
                                            <ul className="pl-5">
                                                {modules.map((module) => (
                                                    <li>
                                                        {module.name}:
                                                        {module.description}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        "Pas des modules"
                                    )}
                                </div>
                            </>
                        ) : (
                            <div>{home}</div>
                        )}
                    </div>
                </div>
            </GeneralLayout>
        </>
    );
}
