let selectedXeID = null;
let selectedDVID = null;

function renderCarTable(data) {
    const tbody = document.querySelector('.car-table tbody');
    tbody.innerHTML = '';
    data.forEach(xe => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${xe.ID}</td>
            <td>${xe.hang}</td>
            <td>${xe.ten}</td>
            <td>${xe.nam_san_xuat}</td>
            <td>${xe.loai_hop_so}</td>
            <td>${xe.so_cho}</td>
            <td>${xe.mau_sac}</td>
            <td>${xe.loai_nhien_lieu}</td>
            <td>${Number(xe.gia).toLocaleString('vi-VN')}</td>
            <td>${xe.bien_so}</td>
            <td>${xe.ghi_chu || ''}</td>
        `;
        tr.addEventListener('click', function () {
            tbody.querySelectorAll('tr').forEach(row => row.classList.remove('selected-row'));
            tr.classList.add('selected-row');
            selectedXeID = xe.ID;
        });
        tbody.appendChild(tr);
    });
}

function renderDichVuTable(data){
    const tbody = document.getElementById('dichvu-table').querySelector('tbody');
    tbody.innerHTML = '';
    data.forEach((dv, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${idx + 1}</td>
            <td>${dv.ten}</td>
            <td>${dv.mo_ta || ''}</td>
            <td>${Number(dv.gia).toLocaleString('vi-VN')}</td>
        `;
        tr.addEventListener('click', function () {
            tbody.querySelectorAll('tr').forEach(row => row.classList.remove('selected-row'));
            tr.classList.add('selected-row');
            selectedDVID = dv.ID;
        });
        tbody.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const ngaybdInput = document.getElementById('ngaybd');
    const ngayktInput = document.getElementById('ngaykt');
    const tenInput = document.getElementById('ten');
    const timXeBtn = document.getElementById('timxebtn');

    const dichVuInput = document.getElementById('dichvu-input');
    const timDichVuBtn = document.getElementById('timdvbtn');
    const themDichVuBtn = document.getElementById('themdvbtn');
    
    const ten = localStorage.getItem('ten');
    if (!ten) {
        document.getElementById('userName').textContent = 'Ai Đấy?';
    }else{
        document.getElementById('userName').textContent = ten;
    }

    timXeBtn.addEventListener('click', async function (e) {
        e.preventDefault();
        const ngayNhan = ngaybdInput.value;
        const ngayTra = ngayktInput.value;
        if (new Date(ngayTra) < new Date(ngayNhan)) {
            alert('Ngày trả xe không được nhỏ hơn ngày nhận xe.');
            return;
        }
        const tenXe = tenInput.value;
        if (!ngayNhan || !ngayTra) {
            alert('Vui lòng nhập đầy đủ ngày nhận và ngày trả.');
            return;
        }
        try {
            const res = await fetch(`/api/thuexe/xe?name=${tenXe}&ngaybd=${ngayNhan}&ngaykt=${ngayTra}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (res.ok) {
                const data = await res.json();
                renderCarTable(data);
            } else {
                const data = await res.json();
                renderCarTable(data);
            }
        } catch (err) {
            alert('Lỗi khi tìm xe!');
        }
    });

    timDichVuBtn.addEventListener('click', async function (e) {
        e.preventDefault();
        const tuKhoaDichVu = dichVuInput.value;
        try{
            const res = await fetch(`/api/thuexe/dichvu?name=${tuKhoaDichVu}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await res.json();
            renderDichVuTable(data);
        } catch{
            alert('Lỗi khi tìm dịch vụ!');
        }
    });

    // themDichVuBtn.addEventListener('click', async function (e) {
    //     e.preventDefault();
    //     const tuKhoaDichVu = dichVuInput.value;
    //     try{
    //         const res = await fetch(`/api/thuexe/dichvu?name=${tuKhoaDichVu}`, {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem('token')}`
    //             }
    //         });
    //         const data = await res.json();
    //         renderDichVuTable(data);
    //     } catch{
    //         alert('Lỗi khi tìm dịch vụ!');
    //     }
        
    //     console.log('Thêm dịch vụ:', tuKhoaDichVu);
    // });
});