<script setup lang="ts">
import { EnvelopeIcon, KeyIcon } from '@heroicons/vue/20/solid'

  definePageMeta({
    layout: 'nolayout',
  })
</script>

<template>
  <template>
    <div class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px] border rounded">
        <div class="sm:mx-auto sm:w-full sm:max-w-md p-2">
          <img class="mx-auto h-10 w-auto" src="/IMPTEL.svg" alt="Your Company" />
          <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>
        <div class="bg-white px-6 py-12 sm:rounded-lg sm:px-12">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <div class="relative mt-2 rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <EnvelopeIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input type="email" name="email" id="email" class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6" placeholder="you@example.com" />
              </div>
            </div>

            <div>
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div class="relative mt-2 rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <KeyIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input type="password" name="password" id="password" class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                <label for="remember-me" class="ml-3 block text-sm leading-6 text-gray-900">Remember me</label>
              </div>

              <div class="text-sm leading-6">
                <a href="#" class="font-semibold text-secondary hover:text-blue-700">Forgot password?</a>
              </div>
            </div>

            <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
          </form>

          </div>
        </div>

      </div>
  </template>

</template>

<style scoped>

</style>