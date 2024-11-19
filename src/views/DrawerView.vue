<template>
<div class="row">
    <div class="w-full p-1 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="text-left mb-2 text-3xl font-bold text-gray-900 dark:text-white">Table</h5>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-2 py-1">
                            Name
                        </th>
                        <th scope="col" class="px-2 py-1 text-end">
                            Act
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-2 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Form Drawer
                        </th>
                        <td class="px-2 py-1 text-end">
                            <button class="px-2 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="toggleDrawer('formDrawer')">
                                Show drawer form
                            </button>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-2 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Top Drawer
                        </th>
                        <td class="px-2 py-1 text-end">
                            <button class="px-2 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="toggleDrawer('topDrawer')">
                                Show bottom drawer
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- Form Drawer -->
    <transition appear @before-enter="beforeEnter2" @enter="enter2" @before-leave="beforeLeave2" @leave="leave2">
        <div v-show="isDrawerVisible.formDrawer" class="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-md z-30 transition-opacity" @click="toggleDrawer('formDrawer')"></div>
    </transition>
    <transition appear @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
        <div v-show="isDrawerVisible.formDrawer" class="fixed top-0 right-0 z-40 h-screen p-4 bg-white dark:bg-gradient-to-t from-indigo-700 via-blue-800 to-gray-900 w-80 shadow-lg" style="border-top-left-radius: 25px; border-bottom-left-radius: 25px;">
            <h5 class="text-lg font-bold mb-4">Form Drawer</h5>
            <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-800" @click="toggleDrawer('formDrawer')">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close menu</span>
            </button>
            <!-- Konten Drawer -->
            <div class="mb-4">
                <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" autocomplete="off" />
            </div>
            <div class="mb-4">
                <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                <div class="relative max-w-sm">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input datepicker id="default-datepicker" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="Select date">
                </div>
            </div>
            <div class="mb-4">
                <label for="File" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">File</label>
                <div class="relative max-w-sm">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input id="File" type="file" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
                </div>
            </div>
            <div class="text-end">
                <button @click="toggleDrawer('formDrawer')" class="bg-blue-700 text-white px-4 py-2 rounded">
                    Submit
                </button>
            </div>
        </div>
    </transition>
    <!-- Form Drawer -->

    <!-- Top Drawer -->
    <transition appear @before-enter="beforeEnter2" @enter="enter2" @before-leave="beforeLeave2" @leave="leave2">
        <div v-show="isDrawerVisible.topDrawer" class="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-md z-30 transition-opacity" @click="toggleDrawer('topDrawer')"></div>
    </transition>
    <transition appear @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">

        <div v-show="isDrawerVisible.topDrawer" class="fixed bottom-0 left-0 right-0 z-40 w-full p-4 transition-transform -translate-y-full bg-white dark:bg-gradient-to-b from-indigo-700 via-blue-800 to-gray-900" :class="{ 'translate-y-0': isDrawerVisible.topDrawer, '-translate-y-full': !isDrawerVisible.topDrawer }" style="border-top-right-radius: 10px; border-top-left-radius: 10px;">
            <h5 id="drawer-top-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
                <svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                Bottom drawer
            </h5>
            <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-800" @click="toggleDrawer('topDrawer')">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close menu</span>
            </button>
            <!-- Konten Drawer -->
            <p>This is the content of the bottom drawer.</p>
        </div>
    </transition>
    <!-- Top Drawer -->
</div>
</template>

<script>
import gsap from 'gsap';
export default {
    setup() {
        // GSAP animation
        const beforeEnter = (el) => {
            el.style.opacity = 0;
            el.style.transform = 'scale(0.5)';
        };

        const enter = (el, done) => {
            gsap.to(el, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                onComplete: done,
            });
        };

        const beforeLeave = (el) => {
            el.style.opacity = 1;
            el.style.transform = 'scale(1)'
        };

        const leave = (el, done) => {
            gsap.to(el, {
                opacity: 0,
                scale: 0,
                duration: 0.3,
                onComplete: done,
            });
        };
        // GSAP animation2
        const beforeEnter2 = (el) => {
            // el.style.opacity = 0;
            el.style.transform = 'scale(0.5)';
            el.style.borderRadius = '50%'; // Tambahkan border-radius 50% di awal
        };

        const enter2 = (el, done) => {
            gsap.to(el, {
                // opacity: 1,
                scale: 1,
                borderRadius: '0%', // Animasi menuju border-radius 0%
                duration: 0.3,
                onComplete: done,
            });
        };

        const beforeLeave2 = (el) => {
            // el.style.opacity = 1;
            el.style.transform = 'scale(1)'
            el.style.borderRadius = '0%'
        };

        const leave2 = (el, done) => {
            gsap.to(el, {
                // opacity: 0,
                scale: 0,
                borderRadius: '50%',
                duration: 0.3,
                onComplete: done,
            });
        };

        return {
            beforeEnter,
            enter,
            beforeLeave,
            leave,
            beforeEnter2,
            enter2,
            beforeLeave2,
            leave2
        };
    },
    data() {
        return {
            isDrawerVisible: {
                formDrawer: false,
                topDrawer: false,
            },
        };
    },
    mounted() {
        this.initializeFlowbite();
        // inisialisasi datepicker
        const datepicker = document.querySelector('#default-datepicker');
        if (datepicker) {
            new Datepicker(datepicker);
        }
    },
    updated() {
        this.initializeFlowbite();
    },
    methods: {
        initializeFlowbite() {
            import('flowbite').then(() => {
                console.log('Flowbite reinitialized');
            });
        },
        toggleDrawer(drawerName) {
            this.isDrawerVisible[drawerName] = !this.isDrawerVisible[drawerName];
        },
    },
}
</script>

<style>
</style>
