function getQueryParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

async function fetchAndRenderTable() {
    const ngaybd = getQueryParam('ngaybd');
    const ngaykt = getQueryParam('ngaykt');
    const hangxe = getQueryParam('hangxe');
    if (ngaybd) document.getElementById('txtNgayBatDau').value = ngaybd;
    if (ngaykt) document.getElementById('txtNgayKetThuc').value = ngaykt;
    if (new Date(ngaybd) < new Date(ngaykt)) {
        alert('Ngày bắt đầu không được nhỏ hơn ngày kết thúc.');
        return;
    }
    const res = await fetch(`/api/thongke/thongkexe?ngaybd=${ngaybd}&ngaykt=${ngaykt}&hangxe=${hangxe}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    if (!res.ok) {
        const text = await res.text();
        alert(text); // hoặc xử lý chuyển hướng về trang đăng nhập
        throw new Error(text);
    }
    const data = await res.json();
    const tbody = document.querySelector('#tblDanhSachXeTheoDong tbody');
    tbody.innerHTML = '';
    data.forEach((item, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${idx + 1}</td>
            <td>${item.ID}</td>
            <td>${item.ten}</td>
            <td>${item.bien_so}</td>
            <td>${item.tong_so_ngay_thue}</td>
            <td>${item.tong_so_lan_thue}</td>
            <td>${Number(item.tong_doanh_thu).toLocaleString('vi-VN')}</td>
        `;
        tbody.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', fetchAndRenderTable);