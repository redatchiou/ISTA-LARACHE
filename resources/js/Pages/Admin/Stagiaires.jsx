import AdminLayout from "@/Layouts/AdminLayout";

export default function ListStagiaire() {
    return (
        <AdminLayout>
            <div class="relative_ mr-5 mt-5 overflow-x-auto shadow-md sm:rounded-lg">
                <div class="pb-4 m-3 bg-white dark:bg-gray-900">
                    <label for="table-search" class="sr-only">
                        Search
                    </label>
                    <div class="relative mt-1">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="table-search"
                            class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Rechercher Stagiaires"
                        />
                    </div>
                </div>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input
                                        id="checkbox-all-search"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        for="checkbox-all-search"
                                        class="sr-only"
                                    >
                                        checkbox
                                    </label>
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Stagiaire
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Branche
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Groupe
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Edit
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input
                                        id="checkbox-table-search-1"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        for="checkbox-table-search-1"
                                        class="sr-only"
                                    >
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Yassin Idrissi
                            </th>
                            <td class="px-6 py-4">yassin@ofppt-edu.com</td>
                            <td class="px-6 py-4">DD</td>
                            <td class="px-6 py-4">DD101</td>
                            <td class="px-6 py-4">
                                <a
                                    href="#"
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                    Modifier
                                </a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input
                                        id="checkbox-table-search-2"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        for="checkbox-table-search-2"
                                        class="sr-only"
                                    >
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Ahmed Ali
                            </th>
                            <td class="px-6 py-4">ali@ofppt-edu.ma</td>
                            <td class="px-6 py-4">TDI</td>
                            <td class="px-6 py-4">TDI201</td>
                            <td class="px-6 py-4">
                                <a
                                    href="#"
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                    Modifier
                                </a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input
                                        id="checkbox-table-search-3"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        for="checkbox-table-search-3"
                                        class="sr-only"
                                    >
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Omar Bakali
                            </th>
                            <td class="px-6 py-4">omar@ofppt-edu.ma</td>
                            <td class="px-6 py-4">DWFS</td>
                            <td class="px-6 py-4">DWFS201</td>
                            <td class="px-6 py-4">
                                <a
                                    href="#"
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                    Modifier
                                </a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input
                                        id="checkbox-table-3"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        for="checkbox-table-3"
                                        class="sr-only"
                                    >
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Mohamed Alami
                            </th>
                            <td class="px-6 py-4">alami@ofppt-edu.am</td>
                            <td class="px-6 py-4">DD</td>
                            <td class="px-6 py-4">DD101</td>
                            <td class="px-6 py-4">
                                <a
                                    href="#"
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                    Modifier
                                </a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input
                                        id="checkbox-table-3"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        for="checkbox-table-3"
                                        class="sr-only"
                                    >
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Rachid Imrani
                            </th>
                            <td class="px-6 py-4">imarni@ofppt-edu.ma</td>
                            <td class="px-6 py-4">DWFS</td>
                            <td class="px-6 py-4">DWFS202</td>
                            <td class="px-6 py-4">
                                <a
                                    href="#"
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                    Modifier
                                </a>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input
                                        id="checkbox-table-3"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        for="checkbox-table-3"
                                        class="sr-only"
                                    >
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Reda Tchiou
                            </th>
                            <td class="px-6 py-4">reda@ofppt-edu.ma</td>
                            <td class="px-6 py-4">DD</td>
                            <td class="px-6 py-4">DD201</td>
                            <td class="px-6 py-4">
                                <a
                                    href="#"
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                    Modifier
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
