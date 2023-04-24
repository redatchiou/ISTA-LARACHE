import GeneralLayout from "@/Layouts/GeneralLayout";
import { Head, Link } from "@inertiajs/react";
export default function Institut() {
    return (
        <>
            <Head title="Institut" />
            <GeneralLayout
                auth={{ user: { nom: "ali", prenom: "jalol" } }}
                header={
                    <div className="flex flex-row max-sm:flex-col justify-start">
                        <Link href="/institut">
                            <h2
                                title="Contact"
                                className="font-semibold text-xl text-gray-800 leading-tight"
                            >
                                Institut
                            </h2>
                        </Link>
                    </div>
                }
            >
                <div>Info sur ISTA LArache</div>
                <p>Historique</p>
                <p>Equipe</p>
                <p>Quelque capture</p>
            </GeneralLayout>
        </>
    );
}
