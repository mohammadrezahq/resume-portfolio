<template>
  <router-link
    :class="($i18n.locale == 'en') ? 'block my-2 text-gray-600 font-Quick font-medium navEn' : 'block my-2 text-gray-600 font-Cairo font-medium text-right navFa'"
    :to="to"
    active-class="active-nav"
  >
    <slot></slot>
  </router-link>
</template>
<script>
export default {
  props: ["to"],
};
</script>

<style lang="scss" scoped>
a.navEn {
  transition: 0.5s;
  &:hover {
    border-left: 2px solid rgb(68, 68, 68);
    padding-left: 6px;
    transition: 0.5s;
    text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }
}
.navEn.active-nav {
  border-left: 2px solid rgb(68, 68, 68);
  padding-left: 6px;
  transition: 0.5s;
  text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
}

a.navFa {
  transition: 0.5s;
  &:hover {
    border-right: 2px solid rgb(68, 68, 68);
    padding-right: 6px;
    transition: 0.5s;
    text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }
}
.navFa.active-nav {
  border-right: 2px solid rgb(68, 68, 68);
  padding-right: 6px;
  transition: 0.5s;
  text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
}
</style>