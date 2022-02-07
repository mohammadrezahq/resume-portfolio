<template>
  <ToRight>
    <h2 class="text-xl font-bold mb-2" v-if="show">
      <svg
        v-if="$i18n.locale == 'en'"
        class="inline-block align-middle"
        style="margin-bottom: 4px"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 20 20"
      >
        <path d="M6 15l5-5l-5-5l1-2l7 7l-7 7z" fill="currentColor" />
      </svg>
      <svg
        v-if="$i18n.locale == 'fa'"
        class="inline-block align-middle"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 20 20"
      >
        <path d="M14 5l-5 5l5 5l-1 2l-7-7l7-7z" fill="currentColor" />
      </svg>
      <slot></slot>
    </h2>
  </ToRight>
</template>
<script>
import ToRight from "@/components/transitions/ToRight.vue";

export default {
  components: { ToRight },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
  },
};
</script>