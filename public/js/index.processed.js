console.clear();
document.querySelector('body');
fetch('./data/personal.json').then(response => {
  return response.json();
}).then(personalData => {
  const personal_info_els = document.querySelectorAll('.v-personal-info');
  personal_info_els.forEach(el => {
    new Vue({
      el: el,
      components: {
        'header-info': httpVueLoader('./js/sections/header.vue'),
        'personal-info': httpVueLoader('./js/sections/personal.vue')
      },
      data: personalData
    });
  });
});
fetch('./data/history.json').then(response => {
  return response.json();
}).then(historyData => {
  new Vue({
    el: '.s-history',
    components: {
      'history': httpVueLoader('./js/sections/history.vue')
    },
    data: historyData
  });
});
fetch('./data/skills.json').then(response => {
  return response.json();
}).then(skillsData => {
  new Vue({
    el: '.s-skills',
    components: {
      'skills': httpVueLoader('./js/sections/skills.vue')
    },
    data: skillsData
  });
});
fetch('./data/links.json').then(response => {
  return response.json();
}).then(linksData => {
  new Vue({
    el: '.s-links',
    components: {
      'examples': httpVueLoader('./js/sections/examples.vue')
    },
    data: linksData
  });
});
