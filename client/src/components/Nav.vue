<script setup>
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth";
const { isAuthenticated, logout } = useAuth();
const router = useRouter();
const loggingOut = () => {
  logout();
  router.push("/");
};
</script>

<template>
  <div class="bg-red-800 text-red-200">
    <div class="container mx-auto flex items-center justify-between">
      <h1 class="tracking-tighter text-3xl font-bold">
        Charlie's Character Creator
      </h1>
      <nav>
        <ul class="flex space-x-4 text-xl">
          <router-link to="/">
            <li
              class="
                py-8
                px-4
                hover:cursor-pointer hover:bg-gray-500 hover:text-gray-200
              "
            >
              Home
            </li>
          </router-link>
          <router-link :to="{ name: 'About' }">
            <li
              class="
                py-8
                px-4
                hover:cursor-pointer hover:bg-gray-500 hover:text-gray-200
              "
            >
              About
            </li>
          </router-link>
                   <router-link
            v-if="!isAuthenticated"
            :to="{ path: '/login', name: 'Login' }"
          >
            <li
              class="px-4 py-8  hover:cursor-pointer hover:bg-green-500 hover:text-green-800"
            >
              Login
            </li>
          </router-link> 
          <div v-else class="flex">
          <router-link :to="{ path: '/character', name: 'Character' }">
            <li
              class="
                py-8
                px-4
                hover:cursor-pointer hover:bg-gray-500 hover:text-gray-200
              "
            >
              Character
            </li>
          </router-link>
           <button @click="loggingOut">
              <li
                class="px-4 py-8  hover:cursor-pointer hover:bg-green-500 hover:text-green-800"
              >
                Logout
              </li>
            </button>
          </div>
        </ul>
      </nav>
    </div>
  </div>
</template>