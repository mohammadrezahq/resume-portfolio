<template>
  <div class="about">
    <Header>{{ $t("projects.projectsTitle") }}</Header>
    <div class="flex sm:flex-row flex-col justify-around">
      <div class="sm:w-1/2 w-full m-2">
        <Project
          title="MDB"
          :description="$t('projects.mdb')"
          date="August 2021"
          link="https://github.com/mohammadrezahq/mdb-php-orm"
        />
        <Project
          title="PassGen"
          :description="$t('projects.passgen')"
          date="November 2021"
          link="http://github.com/mohammadrezahq/laravel-password-generator"
        />
        <Project
          title="HandyNum"
          :description="$t('projects.handynum')"
          date="January 2022"
          link="https://github.com/mohammadrezahq/HandyNum"
        />
        <Project
          title="Mor Mini Toast"
          :description="$t('projects.toast')"
          date="January 2022"
          link="https://github.com/mohammadrezahq/mor-mini-toast"
        />
      </div>
      <div class="sm:w-1/2 w-full m-2">
        <Project
          title="Lymedia"
          :description="$t('projects.lymedia')"
          date="October 2021"
          link="http://github.com/mohammadrezahq/social-media-laravel-vue"
        />
        <Project
          title="Mimfaweb"
          :description="$t('projects.mimfaweb')"
          date="September 2021"
          link="https://Mimfaweb.ir"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/views/Header.vue";
import Project from "@/components/views/Projects/Project.vue";

export default {
  components: {
    Header,
    Project,
  },
};
</script>