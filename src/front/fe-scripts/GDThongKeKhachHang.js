async function fetchAndRenderTable(){
    const ngaybd = document.getElementById('txtNgayBatDau').value;
    const ngaykt = document.getElementById('txtNgayKetThuc').value;
    if (new Date(ngaybd) > new Date(ngaykt)) {
        alert('Ngày bắt đầu không được lớn hơn ngày kết thúc.');
        return;
    }
    const res = await fetch(`/api/thongke/thongkekh?ngaybd=${ngaybd}&ngaykt=${ngaykt}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    if (!res.ok) {
    const text = await res.text();
    alert(text); 
    throw new Error(text);
    }
    const data = await res.json();
    const tbody = document.querySelector('#tblDanhSachKhachHangTheoDoanhThu tbody');
    tbody.innerHTML = '';
    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.ID}</td>
            <td>${item.ten}</td>
            <td>${item.dia_chi}</td>
            <td>${item.so_dien_thoai}</td>
            <td>${item.tong_so_lan_thue}</td>
            <td>${item.tong_so_ngay_thue}</td>
            <td>${item.tong_doanh_thu}</td>
        `;
        tbody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnTimKiem').addEventListener('click', fetchAndRenderTable);
});