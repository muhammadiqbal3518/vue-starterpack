<script>
import {
    RouterLink,
    RouterView
} from 'vue-router'
import {
    ref
} from "vue";
import gsap from 'gsap';
export default {
    setup() {
        const isDrawerVisible = ref(false);

        const toggleDrawer = () => {
            isDrawerVisible.value = !isDrawerVisible.value;
        };

        // GSAP animation
        const beforeEnter = (el) => {
            el.style.opacity = 0;
            // el.style.transform = 'scale(0.5)';
        };

        const enter = (el, done) => {
            gsap.to(el, {
                opacity: 1,
                // scale: 1,
                duration: 0.3,
                onComplete: done,
            });
        };

        const beforeLeave = (el) => {
            el.style.opacity = 1;
            // el.style.transform = 'scale(1)'
        };

        const leave = (el, done) => {
            gsap.to(el, {
                opacity: 0,
                // scale: 0,
                duration: 0.3,
                onComplete: done,
            });
        };

        return {
            isDrawerVisible,
            toggleDrawer,
            beforeEnter,
            enter,
            beforeLeave,
            leave
        };
    },
}
</script>

<template>
<!-- Container -->
<div class="flex flex-col md:flex-row">
    <nav class="bg-transparent backdrop-blur-lg fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-left justify-between mx-auto p-2">
            <button class="text-gray-800 dark:text-white font-medium rounded-sm text-sm p-2.5" type="button" @click="toggleDrawer" aria-label="Toggle navigation">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>

            <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <span class="sr-only">Open user menu</span>
                    <img class="w-8 h-8 rounded-full" src="https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg" alt="user photo">
                </button>
                <!-- Dropdown menu -->
                <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                    <div class="px-4 py-3">
                        <span class="block text-sm text-gray-900 dark:text-white">MUHAMMAD IQBAL</span>
                        <span class="block text-sm text-gray-500 truncate dark:text-gray-400">muhammadiqbal35100@gmail.com</span>
                    </div>
                    <ul class="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    <!-- Sidebar -->
    <transition appear @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
        <div v-show="isDrawerVisible" class="fixed inset-0 bg-gray-900 bg-opacity-30 backdrop-blur-sm z-30 transition-opacity" @click="toggleDrawer"></div>
    </transition>
    <transition appear @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">

        <div v-show="isDrawerVisible" id="drawer-navigation" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto bg-white w-64 dark:bg-gradient-to-t from-indigo-700 via-blue-800 to-gray-900 transition-transform" tabindex="-1" aria-labelledby="drawer-navigation-label" style="border-top-right-radius: 25px; border-bottom-right-radius: 25px;">
            <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
            <button type="button" @click="toggleDrawer" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close menu</span>
            </button>
            <div class="py-4 overflow-y-auto">
                <ul class="space-y-2 font-medium">
                    <li>
                        <RouterLink to="/" @click="toggleDrawer" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                            </svg>
                            <span class="ms-3">Dashboard</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="about" @click="toggleDrawer" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                            </svg>
                            <span class="ms-3">About</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="drawers" @click="toggleDrawer" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                            </svg>
                            <span class="ms-3">Drawer</span>
                        </RouterLink>
                    </li>
                    <!-- Add more navigation links here -->
                </ul>
            </div>
        </div>
    </transition>
    <!-- Sidebar -->

    <!-- Content -->
    <main class="flex-1 pt-20">

        <nav class="flex mb-5 mx-2" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                    <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        Home
                    </a>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
                    </div>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Flowbite</span>
                    </div>
                </li>
            </ol>
        </nav>

        <!-- <RouterView /> -->
        <router-view v-slot="{ Component, route }">
            <Transition name="route" mode="out-in">
                <component :is="Component" :key="route.fullPath"></component>
            </Transition>
        </router-view>
    </main>
    <!-- Content -->
</div>
<!-- Container -->
</template>

<style scoped>
/* Backdrop (blurred background) */

.route-enter-from {
  transform: translateX(120px);
  opacity: 0;
}
.route-enter-active {
  transition: all 0.4s ease-out;
}
.route-leave-to {
  transform: translateX(-120px);
  opacity: 0;
}
.route-leave-active {
  transition: all 0.4s ease-in;
}

#backdrop {
    backdrop-filter: blur(10px);
    /* Blur effect */
    -webkit-backdrop-filter: blur(10px);
    /* Safari support */
    background-color: rgba(0, 0, 0, 0.3);
    /* Slightly darkened background */
}

/* Drawer (non-blurred foreground) */
</style>
