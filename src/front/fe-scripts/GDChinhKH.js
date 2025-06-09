function showMenu() {
    document.getElementById("navLinks").style.right = "0";
}
function hideMenu() {
    document.getElementById("navLinks").style.right = "-200px";
}
document.addEventListener('DOMContentLoaded', function () {
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
        logoutBtn.addEventListener('click', async function (e) {
            e.preventDefault();
            try {
                await fetch('/api/thanhvien/logout', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
            } catch (error) {
                console.error('Error logging out:', error);
            }
            localStorage.removeItem('token');
            localStorage.removeItem('ten');
            window.location.href = '../interface/GDChinhKH.html'; // hoặc reload lại trang chính nếu muốn
        });
    }
    const thueXeBtn = document.getElementById('thueXeBtn');
    const traXeBtn = document.getElementById('traXeBtn');
    const token = localStorage.getItem('token');

    function checkLogin(e) {
        if (!token) {
            e.preventDefault();
            alert('Bạn cần đăng nhập để sử dụng chức năng này!');
        }
    }

    if (thueXeBtn) thueXeBtn.addEventListener('click', checkLogin);
    if (traXeBtn) traXeBtn.addEventListener('click', checkLogin);
});