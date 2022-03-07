<template>
    <div class="bg-white rounded-lg p-2 relative h-32 my-2 hover:shadow-lg transition-shadow">
        <p><b class="text-lg">{{title}}</b> <span class="text-gray-500">{{date}}</span></p>
        <p>{{description}}</p>
        <Link :link="link" :text="$t('employment.link')" />
        <div :class="($i18n.locale == 'en') ? 'absolute right-0' : 'absolute left-0' " style="top: -20px">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="3em" height="3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M18 11c1.49 0 2.87.47 4 1.26V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h7.68A6.995 6.995 0 0 1 18 11zm-8-7h4v2h-4V4z"/><path fill="currentColor" d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zm1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85l-.7.71z"/></svg>
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