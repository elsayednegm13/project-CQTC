document.addEventListener('DOMContentLoaded', function() {
    // تشغيل الأنيميشن
    AOS.init({ duration: 1000, once: true });

    // معالجة نموذج التواصل
    const form = document.getElementById('mainForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('شكراً لتواصلك مع الجودة المعتمدة. سيقوم فريقنا بالرد عليك خلال 24 ساعة.');
        form.reset();
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});