document.addEventListener('DOMContentLoaded', function () {
    const tongtien = localStorage.getItem('tongtien');
    if (tongtien !== null) {
        document.getElementById('order-amount').textContent = Number(tongtien).toLocaleString('vi-VN');
    } else {
        document.getElementById('order-amount').textContent = '0';
    }
    // localStorage.removeItem('tongtien');
});