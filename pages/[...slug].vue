<template>
    <NuxtLayout name="default" :doc="doc" />
</template>
<script setup lang="ts">
const route = useRoute()
const config = useAppConfig()
const result = await useAsyncData(route.path, async () => {
    return await queryContent('').where({ _path: route.path }).findOne()
})
const doc = result.data

</script>
