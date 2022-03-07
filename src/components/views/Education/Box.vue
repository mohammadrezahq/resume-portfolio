<template>
    <div class="bg-white rounded-lg p-2 relative h-32 my-2 hover:shadow-lg transition-shadow">
        <p><b class="text-lg">{{title}}</b> <span class="text-gray-500">{{date}}</span></p>
        <p>{{description}}</p>
        <Link :link="link" :text="$t('education.link')" />
        <div :class="($i18n.locale == 'en') ? 'absolute right-0' : 'absolute left-0' " style="top: -28px">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="3em" height="3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50"><path fill="currentColor" d="M24.999 27.381c-5.406 0-9.999 1.572-12.999 4.036V36h26v-4.583c-3-2.464-7.594-4.036-13.001-4.036zm23.871-2.352L24.936 14L1.012 25.029L5 26.854v2.807c-1 .207-1.003.731-1.003 1.354c0 .368.122.799.354 1.057L2.983 35h4.88l-1.356-2.93c.228-.258.415-.638.415-1.006c0-.622-.922-1.197-.922-1.404v-2.337l5 2.246v-.199c3-2.609 8.271-4.265 13.998-4.265C30.727 25.105 36 26.761 39 29.37v.199l9.87-4.54z"/></svg>
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