import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";
export default function Dashboard({}) {
   
    return (
        <>
            <Head title="Accueil" />
            <AdminLayout
                header={
                    <Link href="/admin/dashboard">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Acceuil
                        </h2>
                    </Link>
                }
            >
                <div>Acceuil</div>
            </AdminLayout>
        </>
    );
}
