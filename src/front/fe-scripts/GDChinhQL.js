document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.getElementById("navLinks");
    function showMenu(){
        navLinks.style.right ="0";
    }
    function hideMenu(){
        navLinks.style.right ="-200px";
    }
    const ten = localStorage.getItem('ten');
    if (ten) {
        document.getElementById('registerLi').style.display = 'none';
        document.getElementById('loginLi').style.display = 'none';
        document.getElementById('logoutLi').style.display = '';
        document.getElementById('userName').textContent = ten;
    }
    else {
        document.getElementById('registerLi').style.display = '';
        document.getElementById('loginLi').style.display = '';
        document.getElementById('logoutLi').style.display = 'none';
        document.getElementById('userName').textContent = 'Ai đấy?';
    }
    const logoutBtn = document.getElementById('logoutLi');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.removeItem('token');
            localStorage.removeItem('ten');
            window.location.href = '../interface/GDChinhKH.html'; // hoặc reload lại trang chính nếu muốn
        });
    }
});