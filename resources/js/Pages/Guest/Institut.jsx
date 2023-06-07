import GeneralLayout from "@/Layouts/GeneralLayout";
import { Head, Link } from "@inertiajs/react";
// ------------------------
import { useCallback } from "react";

export default function Institut() {
    return (
        <>
            <Head title="Institut" />
            <GeneralLayout
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
                <div hidden className="bg-transparent line-through m-10">
                    <ul className="list-disc text-red-400">
                        <li>Info sur ISTA LArache</li>
                        <li>Historique</li>
                        <li>Equipe</li>
                        <li>Quelque capture</li>
                    </ul>
                </div>
                <div className="max-w-3xl pl-5 mx-auto">
                    <h1 className="text-2xl font-bold py-1">ISTA Larache</h1>
                    <p>
                        ISTA Larache est un établissement de formation
                        professionnelle situé dans la ville de Larache, au
                        Maroc. ISTA est l'abréviation d'Institut Spécialisé de
                        Technologie Appliquée. L'ISTA Larache offre des
                        formations professionnelles dans plusieurs domaines,
                        notamment l'électricité, la mécanique, l'informatique,
                        la gestion, la logistique, l'agriculture, la pêche et
                        l'hôtellerie.
                    </p>
                    <br />
                    <p>
                        Les formations dispensées à l'ISTA Larache sont
                        généralement courtes et visent à fournir aux étudiants
                        des compétences professionnelles spécifiques qui leur
                        permettront de trouver un emploi rapidement après
                        l'obtention de leur diplôme. Les diplômes délivrés par
                        l'ISTA Larache sont reconnus par l'État marocain et
                        peuvent faciliter l'insertion professionnelle des
                        diplômés.
                    </p>
                    <br />
                    <p>
                        L'ISTA Larache est l'un des nombreux établissements de
                        formation professionnelle gérés par l'Office de la
                        Formation Professionnelle et de la Promotion du Travail
                        (OFPPT) du Maroc. L'OFPPT est un organisme public qui a
                        pour mission de former les jeunes marocains aux
                        compétences professionnelles nécessaires pour répondre
                        aux besoins du marché du travail.
                    </p>
                    <br />
                    <p>
                        Si vous êtes intéressé par une formation professionnelle
                        à l'ISTA Larache, vous pouvez vous renseigner sur les
                        différentes formations proposées sur le site web de
                        l'OFPPT ou contacter directement l'établissement pour
                        obtenir plus d'informations.
                    </p>
                </div>
            </GeneralLayout>
        </>
    );
}
