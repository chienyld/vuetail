<template>
    <header class="sticky top-0 bg-project-primary shadow-lg">
        <nav class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6"></nav>
        <RouterLink :to="{name:'home'}">
        <div class="flex items-center gap-3 flex-1">
            <i class="fa-solid fa-sun text-2xl"></i>
            <p class="text-2xl text-white">Logo Here</p>
        </div>
        </RouterLink>
    </header>
</template>

<script>
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router';
export default defineComponent({
    components:{RouterLink},
    setup() {
        return RouterLink;
    },
})
</script>
