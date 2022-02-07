import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/@/about'
  },
  {
    path: '/@/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'About Me',
      metaTags: [
        {
          name: 'description',
          content: 'Mohammadreza Haghshenas About Page'
        }
      ]
    }
  },
  {
    path: '/@/skills',
    name: 'Skills',
    component: () => import(/* webpackChunkName: "skills" */ '../views/Skills.vue'),
    meta: {
      title: 'Skills',
      metaTags: [
        {
          name: 'description',
          content: 'Mohammadreza Haghshenas Skills Page'
        }
      ]
    }
  },  
  {
    path: '/@/projects',
    name: 'projects',
    component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue'),
    meta: {
      title: 'Projects',
      metaTags: [
        {
          name: 'description',
          content: 'Mohammadreza Haghshenas Projects Page'
        }
      ]
    }
  }, 
  {
    path: '/@/education',
    name: 'education',
    component: () => import(/* webpackChunkName: "education" */ '../views/Education.vue'),
    meta: {
      title: 'Education',
      metaTags: [
        {
          name: 'description',
          content: 'Mohammadreza Haghshenas Education Page'
        }
      ]
    }
  },
  {
    path: '/@/employment-history',
    name: 'employment-history',
    component: () => import(/* webpackChunkName: "employment-history" */ '../views/Employment.vue'),
    meta: {
      title: 'Employment History',
      metaTags: [
        {
          name: 'description',
          content: 'Mohammadreza Haghshenas Employment History Page'
        }
      ]
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if(nearestWithTitle) {
    document.title = 'MohammadrezaHQ - ' + nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = 'MohammadrezaHQ - ' + previousNearestWithMeta.meta.title;
  }

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  if(!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router
