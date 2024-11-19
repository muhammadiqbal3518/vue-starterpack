<template>
<div class="row">
    <div class="w-full p-1 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="text-left mb-2 text-3xl font-bold text-gray-900 dark:text-white">Table</h5>
        <div class="relative overflow-x-auto mb-3">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">
                            Silver
                        </td>
                        <td class="px-6 py-4">
                            Laptop
                        </td>
                        <td class="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Microsoft Surface Pro
                        </th>
                        <td class="px-6 py-4">
                            White
                        </td>
                        <td class="px-6 py-4">
                            Laptop PC
                        </td>
                        <td class="px-6 py-4">
                            $1999
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Magic Mouse 2
                        </th>
                        <td class="px-6 py-4">
                            Black
                        </td>
                        <td class="px-6 py-4">
                            Accessories
                        </td>
                        <td class="px-6 py-4">
                            $99
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="relative overflow-x-auto max-h-80 border border-gray-300 rounded-lg shadow-md">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="sticky top-0 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-gray-700 dark:text-gray-300">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3 text-gray-700 dark:text-gray-300">
                            Position
                        </th>
                        <th scope="col" class="px-6 py-3 text-gray-700 dark:text-gray-300">
                            Age
                        </th>
                        <th scope="col" class="px-6 py-3 text-gray-700 dark:text-gray-300">
                            Country
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">John Doe</td>
                        <td class="px-6 py-4">Software Engineer</td>
                        <td class="px-6 py-4">29</td>
                        <td class="px-6 py-4">United States</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Jane Smith</td>
                        <td class="px-6 py-4">Data Analyst</td>
                        <td class="px-6 py-4">35</td>
                        <td class="px-6 py-4">Canada</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Alice Brown</td>
                        <td class="px-6 py-4">Project Manager</td>
                        <td class="px-6 py-4">41</td>
                        <td class="px-6 py-4">Australia</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Michael Green</td>
                        <td class="px-6 py-4">UI/UX Designer</td>
                        <td class="px-6 py-4">27</td>
                        <td class="px-6 py-4">United Kingdom</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">John Doe</td>
                        <td class="px-6 py-4">Software Engineer</td>
                        <td class="px-6 py-4">29</td>
                        <td class="px-6 py-4">United States</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Jane Smith</td>
                        <td class="px-6 py-4">Data Analyst</td>
                        <td class="px-6 py-4">35</td>
                        <td class="px-6 py-4">Canada</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Alice Brown</td>
                        <td class="px-6 py-4">Project Manager</td>
                        <td class="px-6 py-4">41</td>
                        <td class="px-6 py-4">Australia</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Michael Green</td>
                        <td class="px-6 py-4">UI/UX Designer</td>
                        <td class="px-6 py-4">27</td>
                        <td class="px-6 py-4">United Kingdom</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">John Doe</td>
                        <td class="px-6 py-4">Software Engineer</td>
                        <td class="px-6 py-4">29</td>
                        <td class="px-6 py-4">United States</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Jane Smith</td>
                        <td class="px-6 py-4">Data Analyst</td>
                        <td class="px-6 py-4">35</td>
                        <td class="px-6 py-4">Canada</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Alice Brown</td>
                        <td class="px-6 py-4">Project Manager</td>
                        <td class="px-6 py-4">41</td>
                        <td class="px-6 py-4">Australia</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Michael Green</td>
                        <td class="px-6 py-4">UI/UX Designer</td>
                        <td class="px-6 py-4">27</td>
                        <td class="px-6 py-4">United Kingdom</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">John Doe</td>
                        <td class="px-6 py-4">Software Engineer</td>
                        <td class="px-6 py-4">29</td>
                        <td class="px-6 py-4">United States</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Jane Smith</td>
                        <td class="px-6 py-4">Data Analyst</td>
                        <td class="px-6 py-4">35</td>
                        <td class="px-6 py-4">Canada</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Alice Brown</td>
                        <td class="px-6 py-4">Project Manager</td>
                        <td class="px-6 py-4">41</td>
                        <td class="px-6 py-4">Australia</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Michael Green</td>
                        <td class="px-6 py-4">UI/UX Designer</td>
                        <td class="px-6 py-4">27</td>
                        <td class="px-6 py-4">United Kingdom</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">John Doe</td>
                        <td class="px-6 py-4">Software Engineer</td>
                        <td class="px-6 py-4">29</td>
                        <td class="px-6 py-4">United States</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Jane Smith</td>
                        <td class="px-6 py-4">Data Analyst</td>
                        <td class="px-6 py-4">35</td>
                        <td class="px-6 py-4">Canada</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Alice Brown</td>
                        <td class="px-6 py-4">Project Manager</td>
                        <td class="px-6 py-4">41</td>
                        <td class="px-6 py-4">Australia</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Michael Green</td>
                        <td class="px-6 py-4">UI/UX Designer</td>
                        <td class="px-6 py-4">27</td>
                        <td class="px-6 py-4">United Kingdom</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">John Doe</td>
                        <td class="px-6 py-4">Software Engineer</td>
                        <td class="px-6 py-4">29</td>
                        <td class="px-6 py-4">United States</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Jane Smith</td>
                        <td class="px-6 py-4">Data Analyst</td>
                        <td class="px-6 py-4">35</td>
                        <td class="px-6 py-4">Canada</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Alice Brown</td>
                        <td class="px-6 py-4">Project Manager</td>
                        <td class="px-6 py-4">41</td>
                        <td class="px-6 py-4">Australia</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Michael Green</td>
                        <td class="px-6 py-4">UI/UX Designer</td>
                        <td class="px-6 py-4">27</td>
                        <td class="px-6 py-4">United Kingdom</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        this.initializeFlowbite();
    },
    updated() {
        this.initializeFlowbite();
    },
    methods: {
        initializeFlowbite() {
            import('flowbite').then(() => {
                // console.log('Flowbite reinitialized');
            });
        },
    },
}
</script>

<style>
</style>
