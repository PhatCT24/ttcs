function showMenu() {
    document.getElementById("navLinks").style.right = "0";
}
function hideMenu() {
    document.getElementById("navLinks").style.right = "-200px";
}
document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.getElementById("navLinks");
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
        document.getElementById('userName').textContent = '';
    }
    const logoutBtn = document.getElementById('logoutLi');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.removeItem('token');
            localStorage.removeItem('ten');
            window.location.href = '../interface/GDChinhKH.html'; 
        });
    }
    const thueXeBtn = document.getElementById('thueXeBtn');
    const traXeBtn = document.getElementById('traXeBtn');
    const thongkeBtn = document.getElementById('thongkeBtn');
    const token = localStorage.getItem('token');

    function checkLogin(e) {
        if (!token) {
            e.preventDefault();
            alert('Bạn cần đăng nhập để sử dụng chức năng này!');
        }
    }

    if (thueXeBtn) thueXeBtn.addEventListener('click', checkLogin);
    if (traXeBtn) traXeBtn.addEventListener('click', checkLogin);
    if (thongkeBtn) thongkeBtn.addEventListener('click', checkLogin);
});