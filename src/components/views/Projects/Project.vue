<template>
    <div class="bg-white rounded-lg p-2 relative sm:h-32 my-2 hover:shadow-lg transition-shadow">
        <p class="text-left"><b class="text-lg">{{title}}</b> <span class="text-gray-500">{{date}}</span></p>
        <p>{{description}}</p>
        <Link :link="link" :text="$t('projects.link')" />
        <div class="absolute right-0" style="top: -18px">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="3em" height="3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M11 15H6l7-14v8h5l-7 14v-8z" fill="currentColor"/></svg>
        </div>
    </div>
</template>
<script>
import Link from '@/components/box/Link.vue';

export default {
    components: {
        Link
    },
    props: ['title', 'date', 'description', 'link']
}
</script>