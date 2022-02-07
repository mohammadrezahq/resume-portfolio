<template>
    <div class="bg-white rounded-lg p-2 relative h-32 my-2 hover:shadow-lg transition-shadow">
        <p><b class="text-lg">{{title}}</b> <span class="text-gray-500">{{date}}</span></p>
        <p>{{description}}</p>
        <a :href="link" class="bg-transparent text-gray-500 inline-block p-4 absolute right-0 bottom-0 hover:text-gray-800">{{$t('education.link')}}</a>
        <div :class="($i18n.locale == 'en') ? 'absolute right-0' : 'absolute left-0' " style="top: -18px">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="3em" height="3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M11 15H6l7-14v8h5l-7 14v-8z" fill="currentColor"/></svg>
        </div>
    </div>
</template>
<script>
export default {
    props: ['title', 'date', 'description', 'link']
}
</script>