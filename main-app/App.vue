<script setup>
  import { defineAsyncComponent } from 'vue'

  // const FederationButton = defineAsyncComponent(() => import('component-app/FederationButton'))

  const AsyncFederation = defineAsyncComponent(() => import('component-app/Federation'))

  const images = [
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
  ];

</script>

<template>
  <div>
    <h2>This is Main App</h2>
    <h3>
      <AsyncFederation />
    </h3>
    <a-carousel
      :style="{
        width: '600px',
        height: '240px',
      }"
      :default-current="2"
      @change="handleChange"
    >
      <a-carousel-item v-for="image in images" :key="image">
        <img
          :src="image"
          :style="{
            width: '100%',
          }"
        />
      </a-carousel-item>
    </a-carousel>
  </div>
</template>