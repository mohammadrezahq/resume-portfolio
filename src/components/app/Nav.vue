<template>
  <div class="nav text-left m-5">
    <div class="sticky top-2">
      <ToBottom>
        <div v-if="show">
          <img src="@/assets/avatar.jpg" class="rounded-lg w-56 mb-2" />
          <h1 :class="($i18n.locale == 'en') ? 'text-xl font-normal' : 'text-xl font-normal text-right'">{{ $t("nav.name") }}</h1>
          <p :class="($i18n.locale == 'en') ? 'font-light mb-2' : 'font-light mb-2 text-sm text-right'">Web Developer | PHP/Laravel</p>
          <hr />
        </div>
      </ToBottom>
      <ToLeft>
        <div v-if="show">
          <Navlink to="/@/about">{{ $t("nav.about") }}</Navlink>
          <Navlink to="/@/skills">{{ $t("nav.skills") }}</Navlink>
          <Navlink to="/@/projects">{{ $t("nav.projects") }}</Navlink>
          <Navlink to="/@/education">{{ $t("nav.education") }}</Navlink>
          <Navlink to="/@/employment-history">{{ $t("nav.employment") }}</Navlink>
        </div>
      </ToLeft>
    </div>
  </div>
</template>

<script>
import Navlink from "./Navlink.vue";
import ToLeft from "@/components/transitions/ToLeft.vue";
import ToBottom from "@/components/transitions/ToBottom.vue";

export default {
  components: {
    Navlink,
    ToBottom,
    ToLeft
  },
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