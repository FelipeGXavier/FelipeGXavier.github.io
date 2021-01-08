import items from './items.js';

window.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById('wrapper');
  const htmlContent = joinHtmlContent();
  container.innerHTML = htmlContent;
  const buttons = document.querySelectorAll(".navigation > .item > .link");
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      const htmlContent = joinHtmlContent(category);
      container.innerHTML = htmlContent;
    })
  });
});

function joinHtmlContent(category = '') {
  const menuItems = category.length == 0 ? items : filterMenuByCategory(category);
  return menuItems.map((item) => {
    return generateFoodHtmlContent(item);
  }).join("");
}

function filterMenuByCategory(category) {
  if (category != 'all') {
    return items.filter(item => {
      if (item.category == category) {
        return item;
      }
    })
  }
  return items;
}

function generateFoodHtmlContent(content) {
  return `<div class="food-content">
  <article class="food">
    <img class="food-photo" src=${content.img} alt="">
    <div class="food-info">
      <h1 class="food-title">${content.title}</h1>
      <p class="paragraph">${content.desc}</p>
    </div>
  </article>
</div>`;
}