<template>
  <div class="flex flex-col h-full justify-between">
    <div>
      <Header>{{ $t("about.aboutTitle") }}</Header>
      <p class="text-lg">
        {{ $t("about.about") }}      
      </p>
    </div>
    <div>
      <Header class="mt-2">{{ $t("about.languagesTitle") }}  </Header>
      <span class="mr-2 p-2 bg-gray-200 inline-block">{{ $t("about.persian") }}</span>
      <span class="mr-2 p-2 bg-gray-200 inline-block">{{ $t("about.english") }}</span>
    </div>    
    <div>
      <Header class="mt-2">{{ $t("about.hobbiesTitle") }}</Header>
      <span class="mr-2 p-2 bg-gray-200 inline-block">{{ $t("about.learning") }}</span>
      <span class="mr-2 p-2 bg-gray-200 inline-block">{{ $t("about.gaming") }}</span>
      <span class="mr-2 p-2 bg-gray-200 inline-block">{{ $t("about.reading") }}</span>
    </div>
    <div>
      <Header class="mt-2">{{ $t("about.socialTitle") }}</Header>
      <Social />
    </div>
  </div>
</template>
<script>
import Header from '@/components/views/Header.vue'
import Social from '@/components/views/About/Social.vue'

export default {
  components: {
    Header,
    Social
  }
}
</script>