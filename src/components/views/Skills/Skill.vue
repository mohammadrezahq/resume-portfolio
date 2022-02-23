<template>
  <div class="flex items-center mr-2 bg-white px-2 py-1 rounded-xl shadow-md cursor-pointer">
    <p class="text-md">{{name}}</p>
  </div>
</template>
<script>
export default {
  props: ["name"],
};
</script>