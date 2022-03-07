<template>
  <div class="about">
    <Header>{{ $t("skills.skillsTitle") }}</Header>
    <div class="flex flex-col justify-between">
      <div class="my-2">
        <b class="block my-1">{{ $t("skills.pl") }}</b>
        <div class="flex">
          <Skill name="PHP" />
          <Skill name="JavaScript" />
          <Skill name="Python" title="New to this" />
          <!--  <Skill name="Dart" title="New to this" /> -->
        </div>
      </div>      
      <div class="my-2">
        <b class="block my-1">Backend</b>
        <div class="flex">
          <Skill name="Laravel" />
          <Skill name="Lumen" />
          <!-- <Skill name="Django" /> -->
        </div>
      </div>
      <div class="my-2">
        <b class="block my-1">Frontend</b>
        <div class="flex">
          <Skill name="Vue Js" />
          <Skill name="Vite Js" />
          <!-- <Skill name="Flutter" /> -->
          <Skill name="Tailwind" />
          <Skill name="Bootstrap" />
          <Skill name="Jquery" />
          <Skill name="HTML" />
          <Skill name="CSS" />
          <Skill name="Scss" />
        </div>
      </div>
      <div class="my-2">
        <b class="block my-1">{{ $t("skills.d") }}</b>
        <div class="flex">
          <Skill name="MySQL" />
          <Skill name="MongoDB" />
          <Skill name="SQlite" />
          <Skill name="Redis" />
        </div>
      </div>
      <div class="my-2">
        <b class="block my-1">{{ $t("skills.t") }}</b>
        <div class="flex">
          <Skill name="Electron js" />
          <Skill name="Git" />
          <Skill name="Composer" />
          <Skill name="Npm" />
          <!-- <Skill name="Docker" /> -->
        </div>
      </div>
      <div class="my-2">
        <b class="block my-1">{{ $t("skills.o") }}</b>
        <div class="flex">
          <Skill name="Linux" />
          <Skill name="Lamp" />
          <Skill name="Wordpress" />
          <Skill name="Wordpress Theme Development" />
          <Skill name="Figma" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/views/Header.vue";
import Skill from "@/components/views/Skills/Skill.vue";

export default {
  components: {
    Header,
    Skill,
  },
};
</script>