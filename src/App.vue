<template>
  <div class="sm:mb-0 mb-12 flex flex-col sm:flex-row items-center sm:items-stretch" :dir="$i18n.locale == 'fa' ? 'rtl' : 'ltr'" :class="($i18n.locale == 'en') ? 'font-Quick' : 'font-Cairo'">
    <Nav v-if="localeChange" />
    <ToBottom>
      <div
        class="m-5 p-2 rounded-lg mainBg w-full shadow-sm text-gray-600"
        v-if="show"
      >
        <router-view />
      </div>
    </ToBottom>
    <div
      class="
        fixed
        bottom-0
        p-3
        left-1/2
        transform
        -translate-x-1/2
        bg-gray-200
        text-gray-400
      "
      dir="ltr"
    >
      <span
        @click="$i18n.locale = 'en'"
        :class="
          $i18n.locale == 'en'
            ? 'mx-2 inline-block cursor-pointer font-bold'
            : 'mx-2 inline-block cursor-pointer'
        "
        >En</span
      >
      <span
        @click="$i18n.locale = 'fa'"
        :class="
          $i18n.locale == 'fa'
            ? 'mx-2 inline-block cursor-pointer font-bold font-Cairo'
            : 'mx-2 inline-block cursor-pointer font-Cairo'
        "
        >فا</span
      >
    </div>
  </div>
</template>
<script>
import Nav from "./components/app/Nav.vue";
import ToBottom from "@/components/transitions/ToBottom.vue";

export default {
  components: {
    Nav,
    ToBottom,
  },
  data() {
    return {
      show: false,
      localeChange: true,
    };
  },
  mounted() {
    this.show = true;
  },
  watch: {
    $route(to, from) {
      this.show = false;
      setTimeout(() => (this.show = true), 100);
    },
    "$i18n.locale": function (newVal, oldVal) {
      this.localeChange = false;
      this.show = false;
      setTimeout(() => (this.localeChange = true), 100);
      setTimeout(() => (this.show = true), 100);
    },
  },
};
</script>

<style lang="scss">
body {
  background: rgb(255, 247, 241);
  background: -moz-linear-gradient(
    left,
    rgba(255, 247, 241, 1) 0%,
    rgba(239, 239, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    left,
    rgba(255, 247, 241, 1) 0%,
    rgba(239, 239, 255, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(255, 247, 241, 1) 0%,
    rgba(239, 239, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff7f1', endColorstr='#efefff',GradientType=1 ); /* IE6-9 */
}
.mainBg {
  background-color: #82828217;
}
</style>