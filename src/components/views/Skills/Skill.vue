<template>
  <div class="flex items-center mr-2 bg-white px-2 py-1 rounded-xl shadow-md">
    <p class="text-md">{{name}}</p>
    <Circle :percent="percent" />
  </div>
</template>
<script>
import Circle from './Circle.vue'

export default {
  props: ["percent", "name"],
  components: {
    Circle
  }
};
</script>