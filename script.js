
"use strict";

// =====================================
// SOUQNA - Main JavaScript
// =====================================

// القسم المختار
let selectedCategory = "";

// عناصر البحث
function getSearchValue() {
  const input = document.getElementById("search");
  return input ? input.value.trim().toLowerCase() : "";
}

// البحث في المنتجات والأقسام
function searchItems() {
  selectedCategory = "";

  const value = getSearchValue();

  document.querySelectorAll(".category, .product").forEach(item => {
    const content = item.textContent.toLowerCase();
    item.hidden = value !== "" && !content.includes(value);
  });
}

// اختيار قسم
function selectCategory(category) {
  const input = document.getElementById("search");

  if (input) input.value = "";

  selectedCategory = category.trim().toLowerCase();

  document.querySelectorAll(".category").forEach(item => {
    item.hidden = false;
  });

  document.querySelectorAll(".product").forEach(product => {
    const content = product.textContent.toLowerCase();
    product.hidden = !content.includes(selectedCategory);
  });

  const section = document.querySelector(".products");

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

// إظهار جميع المنتجات والأقسام
function showAll() {
  selectedCategory = "";

  document.querySelectorAll(".category, .product").forEach(item => {
    item.hidden = false;
  });

  const input = document.getElementById("search");

  if (input) input.value = "";
}

// الانتقال إلى أعلى الصفحة
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// معلومات سوقنا
function aboutSouqna() {
  alert(
    "سوقنا Souqna\n\n" +
    "منصة تجمع التجارة والفنون والمواهب.\n" +
    "نبدأ من الجزائر ونتطلع إلى العالم."
  );
}

// =====================================
// تهيئة الموقع
// =====================================

document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("search");

  if (searchInput) {
    searchInput.addEventListener("input", searchItems);
  }

  document.querySelectorAll(".category").forEach(item => {
    item.addEventListener("click", () => {
      selectCategory(item.textContent.trim());
    });
  });

  console.log("Souqna website is ready!");

});

// =====================================
// إتاحة الوظائف لصفحة HTML
// =====================================

window.searchItems = searchItems;
window.selectCategory = selectCategory;
window.showAll = showAll;
window.scrollToTop = scrollToTop;
window.aboutSouqna = aboutSouqna;
