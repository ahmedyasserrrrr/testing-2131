document.addEventListener('DOMContentLoaded', function () {
    // اعثر على الرابط الذي يؤدي إلى الصفحة الجديدة
    var linkToNextPage = document.getElementById('linkToNextPage');

    // قم بإضافة حدث النقر إلى الرابط
    linkToNextPage.addEventListener('click', function (event) {
        // قم بإظهار لوجو الصفحة
        var loadingLogo = document.getElementById('loadingLogo');
        loadingLogo.style.display = 'block';

        // عرف حدث الرحيل قبل الانتقال إلى الصفحة الجديدة
        window.onbeforeunload = function () {
            // إظهار رسالة التحميل
            return "جارٍ التحميل...";
        };
    });
});
