let selectedDongXe = null;
let ngaybd = null;
let ngaykt = null;
async function fetchAndRenderTable() {
    ngaybd = document.getElementById('txtNgayBatDau').value;
    ngaykt = document.getElementById('txtNgayKetThuc').value;
    if (new Date(ngaybd) > new Date(ngaykt)) {
        alert('Ngày bắt đầu không được lớn hơn ngày kết thúc.');
        return;
    }
    const res = await fetch(`/api/thongke/thongkedongxe?ngaybd=${ngaybd}&ngaykt=${ngaykt}`, {
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    if (!res.ok) {
    const text = await res.text();
    alert(text); 
    throw new Error(text);
    }
    const data = await res.json();

    const tbody = document.querySelector('#tblDanhSachDongXe tbody');
    tbody.innerHTML = '';
    data.forEach((item, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${idx + 1}</td>
            <td>${item.hang}</td>
            <td>${item.tong_so_ngay_thue}</td>
            <td>${item.tong_so_lan_thue}</td>
            <td>${Number(item.tong_doanh_thu).toLocaleString('vi-VN')}</td>
        `;
        tr.addEventListener('click', function() {
            tbody.querySelectorAll('tr').forEach(row => row.classList.remove('selected-row'));
            tr.classList.add('selected-row');
            selectedDongXe = item.hang;
        });
        tbody.appendChild(tr);
    });
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnTimKiem').addEventListener('click', fetchAndRenderTable);
    document.getElementById('btnXemTKXeTheoDong').addEventListener('click', function(e) {
        if (!selectedDongXe) {
            alert('Vui lòng chọn một dòng xe trước!');
            e.preventDefault();
            return;
        }
       
        window.location.href = `GDThongKeXeTheoDong.html?ngaybd=${ngaybd}&ngaykt=${ngaykt}&hangxe=${selectedDongXe}`;
    });
});