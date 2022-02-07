<template>
  <div class="about">
    <Header>{{ $t("skills.skillsTitle") }}</Header>
    <div class="flex flex-col justify-between">
      <div class="my-2">
        <b class="block my-1">{{ $t("skills.pl") }}</b>
        <div class="flex">
          <Skill percent="100" name="PHP" />
          <Skill percent="75" name="JavaScript" title="I know it's not :)" />
        </div>
      </div>
      <div class="my-2">
        <b class="block my-1">{{ $t("skills.f") }}</b>
        <div class="flex">
          <Skill percent="100" name="Laravel" />
          <Skill percent="50" name="Lumen" />
          <Skill percent="75" name="Vue Js" />
          <Skill percent="100" name="Tailwind" />
          <Skill percent="100" name="Bootstrap" />
          <Skill percent="100" name="Jquery" />
        </div>
      </div>
      <div class="my-2">
        <b class="block my-1">{{ $t("skills.d") }}</b>
        <div class="flex">
          <Skill percent="100" name="MySQL" />
          <Skill percent="100" name="MongoDB" />
        </div>
      </div>
      <div class="my-2">
        <b class="block my-1">{{ $t("skills.wt") }}</b>
        <div class="flex">
          <Skill percent="100" name="HTML" />
          <Skill percent="100" name="CSS" />
          <Skill percent="75" name="Scss" />
        </div>
      </div>
      <div class="my-2">
        <b class="block my-1">{{ $t("skills.t") }}</b>
        <div class="flex">
          <Skill percent="50" name="Git" />
          <Skill percent="75" name="Composer" />
          <Skill percent="50" name="Npm" />
        </div>
      </div>
      <div class="my-2">
        <b class="block my-1">{{ $t("skills.o") }}</b>
        <div class="flex">
          <Skill percent="50" name="Linux" />
          <Skill percent="75" name="Lamp" />
          <Skill percent="100" name="Wordpress" />
          <Skill percent="100" name="Wordpress Theme Development" />
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