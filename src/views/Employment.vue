<template>
  <div class="about">
    <Header>{{$t('employment.employmentTitle')}}</Header>
    <Box :title="$t('employment.swdTitle')" :date="$t('employment.swdDate')" :description="$t('employment.swdDesc')" link="https://github.com/mohammadrezahq" />
  </div>
</template>
<script>
import Header from '@/components/views/Header.vue'
import Box from '@/components/views/Employment/Box.vue'

export default {
  components: {
    Header,
    Box
  }
}
</script>