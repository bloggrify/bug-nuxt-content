<template>
    <div>
        <nav class="mt-10 w-3/4 mx-auto">
            <h1 class="text-3xl font-bold">
                {{ title }}
            </h1>
        </nav>

        <main class="mt-10 w-3/4 mx-auto">
            <div v-if="doc">
                <h2 class="text-2xl font-bold">
                    {{ doc.title }}
                </h2>

                <ContentRenderer
                    id="nuxtContent"
                    :value="doc"
                    class="prose pt-6 text-sm md:text-xl dark:prose-invert"
                />
            </div>
        </main>
    </div>
</template>
<script setup lang="ts">

defineProps<{
    doc: any;
}>()
const config = useAppConfig()
const title = config.name
</script>
<style lang="scss">
.prose {
    a {
        @apply underline underline-offset-2 decoration-dotted;
    }

    h1 a,
    h2 a,
    h3 a,
    h4 a,
    h5 a,
    h6 a {
        @apply no-underline ;
    }
}
</style>

