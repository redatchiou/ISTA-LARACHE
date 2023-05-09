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

const P = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            className="h-fit w-full z-0"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#0d47a1",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
                fullScreen: { enable: false },
            }}
        />
    );
};
