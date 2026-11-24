
"use strict";

// القسم المختار حالياً
let selectedCategory = "";

// البحث في المنتجات والأقسام
function searchItems() {
  selectedCategory = "";

  const searchInput = document.getElementById("search");
  const value = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

  document.querySelectorAll(".category, .product").forEach(item => {
    const content = item.textContent.toLowerCase();
    item.hidden = value !== "" && !content.includes(value);
  });
}

// اختيار قسم
function selectCategory(category) {
  const searchInput = document.getElementById("search");

  if (searchInput) {
    searchInput.value = "";
  }

  selectedCategory = category.trim().toLowerCase();

  // إظهار جميع الأقسام
  document.querySelectorAll(".category").forEach(item => {
    item.hidden = false;
  });

  // إظهار المنتجات المطابقة للقسم
  document.querySelectorAll(".product").forEach(product => {
    const content = product.textContent.toLowerCase();

    product.hidden = !content.includes(selectedCategory);
  });

  const productsSection = document.querySelector(".products");

  if (productsSection) {
    productsSection.scrollIntoView({
      behavior: "smooth"
    });
  }
}

// إظهار جميع المنتجات والأقسام
function showAll() {
  selectedCategory = "";

  document.querySelectorAll(".category, .product").forEach(item => {
    item.hidden = false;
  });

  const searchInput = document.getElementById("search");

  if (searchInput) {
    searchInput.value = "";
  }
}

// تشغيل الموقع
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

  console.log("Souqna is ready!");
});

// إتاحة الدوال لصفحة HTML
window.searchItems = searchItems;
window.selectCategory = selectCategory;
window.showAll = showAll;

// الانتقال إلى أعلى الصفحة
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// معلومات التطبيق
function aboutSouqna() {
  alert(
    "سوقنا Souqna\n" +
    "منصة تجمع التجارة والفنون والمواهب."
  );
}

window.scrollToTop = scrollToTop;
window.aboutSouqna = aboutSouqna;
