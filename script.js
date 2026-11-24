"use strict";

// البحث في المنتجات والأقسام
function searchItems() {
  const searchInput = document.getElementById("search");
  if (!searchInput) return;

  const value = searchInput.value.trim().toLowerCase();

  document.querySelectorAll(".product, .category").forEach(item => {
    const content = item.textContent.toLowerCase();
    item.style.display = content.includes(value) ? "" : "none";
  });
}

// تفعيل البحث
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");

  if (searchInput) {
    searchInput.addEventListener("input", searchItems);
  }

  console.log("مرحباً بك في سوقنا Souqna");
});

// اختيار قسم
function selectCategory(category) {
  const searchInput = document.getElementById("search");

  if (searchInput) {
    searchInput.value = "";
  }

  document.querySelectorAll(".category").forEach(item => {
    item.style.display = "";
  });

  document.querySelectorAll(".product").forEach(product => {
    const content = product.textContent.toLowerCase();

    product.style.display =
      content.includes(category.toLowerCase()) ? "" : "none";
  });

  document.querySelector(".products").scrollIntoView({
    behavior: "smooth"
  });
}

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
