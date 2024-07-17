document.addEventListener('DOMContentLoaded', function() {
    // تحميل اللغة المخزنة
    let storedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(storedLanguage);

    // إضافة مستمع للزر
    document.getElementById('language-toggle').addEventListener('click', function() {
        let newLanguage = this.textContent.trim() === 'عربي' ? 'ar' : 'en';
        setLanguage(newLanguage);
    });
});

function setLanguage(language) {
    // حفظ اللغة في التخزين المحلي
    localStorage.setItem('language', language);

    // تغيير النصوص في الصفحة
    document.querySelectorAll('[data-en]').forEach(function(element) {
        if (language === 'ar') {
            element.textContent = element.getAttribute('data-ar');
            document.documentElement.setAttribute('lang', 'ar');
            document.body.style.direction = 'rtl';
            document.getElementById('language-toggle').textContent = 'English';
        } else {
            element.textContent = element.getAttribute('data-en');
            document.documentElement.setAttribute('lang', 'en');
            document.body.style.direction = 'ltr';
            document.getElementById('language-toggle').textContent = 'عربي';
        }
    });
}