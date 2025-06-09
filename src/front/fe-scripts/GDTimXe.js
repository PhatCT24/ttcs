let selectedXeID = [];
let selectedDVID = [];
const xeThueDichVu = {};
const giathuexe = {};
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
            tr.classList.toggle('selected-row');
            const idx = selectedXeID.indexOf(xe.ID);
            if (idx === -1) {
                selectedXeID.push(xe.ID);
                giathuexe[xe.ID] = xe.gia;
            } else {
                selectedXeID.splice(idx, 1);
                delete giathuexe[xe.ID];
            }
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
            tr.classList.toggle('selected-row');
            const idx = selectedDVID.indexOf(dv.ID);
            if (idx === -1) {
                selectedDVID.push(dv.ID);
            } else {
                selectedDVID.splice(idx, 1);
            }
        });
        tbody.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    localStorage.removeItem('xeThueDichVu');
    localStorage.removeItem('ngaybd');
    localStorage.removeItem('ngaykt');
    localStorage.removeItem('giathuexe');
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

    document.getElementById('themdvbtn').addEventListener('click', function (e) {
        e.preventDefault();
        if (selectedXeID.length === 0) {
            alert('Vui lòng chọn ít nhất một xe!');
            return;
        }
        let daTrung = false;
        selectedXeID.forEach(xeID => {
            if (!xeThueDichVu[xeID]) {
                xeThueDichVu[xeID] = [];
            }
            selectedDVID.forEach(dvID => {
                if (!xeThueDichVu[xeID].includes(dvID)) {
                    xeThueDichVu[xeID].push(dvID);
                } else {
                    daTrung = true;
                }
            });
        });
        if (daTrung) {
            alert('Một số dịch vụ đã được thêm cho xe, hệ thống sẽ bỏ qua các dịch vụ trùng lặp.');
        } else {
            alert('Đã thêm dịch vụ cho các xe đã chọn!');
        }
    });
    document.querySelector('.xac-nhan-btn').addEventListener('click', function(e) {
        selectedXeID.forEach(xeID => {
            if (!xeThueDichVu[xeID]) {
                xeThueDichVu[xeID] = [];
            }
        });
        
        let msg = 'Bạn đã chọn:\n';
        selectedXeID.forEach(xeID => {
            msg += `- Xe ID: ${xeID}, Dịch vụ: `;
            if (xeThueDichVu[xeID].length === 0) {
                msg += 'Không có dịch vụ nào';
            } else {
                msg += xeThueDichVu[xeID].join(', ');
            }
            msg += '\n';
        });
        if (!confirm(msg + '\nBạn có muốn tiếp tục không?')) {
            e.preventDefault();
            return;
        }

        localStorage.setItem('xeThueDichVu', JSON.stringify(xeThueDichVu));
        localStorage.setItem('ngaybd', ngaybdInput.value);
        localStorage.setItem('ngaykt', ngayktInput.value);
        localStorage.setItem('giathuexe', JSON.stringify(giathuexe));
    });
    
});