
"use strict";

let selectedCategory = "";

// البحث في الأقسام والمنتجات
function searchItems() {
  selectedCategory = "";

  const searchInput = document.getElementById("search");
  const value = searchInput ? searchInput.value.trim().toLowerCase() : "";

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

  const chosen = category.trim();

  // استخراج رمز القسم
  const categories = document.querySelectorAll(".category");
  let selectedIcon = "";

  categories.forEach(item => {
    const name = item.textContent.trim();

    if (name.includes(chosen)) {
      const icon = item.querySelector("span");
      if (icon) selectedIcon = icon.textContent.trim();
    }
  });

  // إظهار جميع الأقسام
  categories.forEach(item => {
    item.hidden = false;
  });

  // إظهار المنتجات التي تحمل رمز القسم نفسه
  document.querySelectorAll(".product").forEach(product => {
    const picture = product.querySelector(".picture");
    const productIcon = picture ? picture.textContent.trim() : "";

    product.hidden =
      !selectedIcon || productIcon !== selectedIcon;
  });

  document.querySelector(".products").scrollIntoView({
    behavior: "smooth"
  });
}

// إتاحة الدوال لأزرار الصفحة
window.searchItems = searchItems;
window.selectCategory = selectCategory;

// تشغيل البحث وربط الأقسام
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
