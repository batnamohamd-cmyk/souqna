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
// تفعيل البحث عند الضغط على زر الإدخال
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");

  if (searchInput) {
    searchInput.addEventListener("input", searchItems);
  }

  // عرض رسالة ترحيبية في وحدة التحكم
  console.log("مرحباً بك في سوقنا Souqna");

// عرض رسالة عند اختيار قسم
function selectCategory(category) {
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    const content = product.textContent.toLowerCase();

    product.style.display =
      content.includes(category.toLowerCase()) ? "" : "none";
  });

  document.querySelector(".products").scrollIntoView({
    behavior: "smooth"
  });
}

}

// الانتقال إلى أعلى الصفحة
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// عرض معلومات التطبيق
function aboutSouqna() {
  alert(
    "سوقنا Souqna\n" +
    "منصة تجمع التجارة والفنون والمواهب."
  );
}
