// 모바일 메뉴 열고 닫기
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

// 메뉴 클릭하면 모바일 메뉴 자동 닫기
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});

// 문의 폼 제출 이벤트
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("문의가 정상적으로 접수되었습니다.");
        contactForm.reset();
    });
}