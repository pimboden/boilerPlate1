<template>
  <div>

    <div class="container m-auto">
      <div class="text-center">
        <h1 class="text-4xl font-bold">Nuxt.js (3) + Vite + Tailwind CSS + I18n + KendoUI</h1>
        <h2 class="text-2xl font-bold">with TypeScript</h2>
      </div>
      <div class="p-4">
        {{ $t('sample.hello') }}
      </div>
      <div class="p-4">
        <kendo-radio :initial-value="false" />
      </div>
    </div>
    <NuxtWelcome />
  </div>
</template>
