<template>
  <div class="about">
    <Header>{{$t('education.educationTitle')}}</Header>
    <Box :title="$t('education.csTitle')" description="" :date="$t('education.csDate')" link="https://www.linkedin.com/school/srbiau/" />
  </div>
</template>
<script>
import Header from '@/components/views/Header.vue'
import Box from '@/components/views/Education/Box.vue'

export default {
  components: {
    Header,
    Box
  }
}
</script>