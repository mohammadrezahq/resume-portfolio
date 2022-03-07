<template>
    <a :href="link" target="_blank" class="bg-transparent text-gray-500 rounded-full transition inline-block py-2 px-4 m-2 absolute right-0 bottom-0 hover:bg-gray-100">{{ text }}</a>
</template>
<script>
export default {
    props:['text', 'link']
}
</script>