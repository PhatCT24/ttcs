let selectedDonID = null;

async function loadDonThue() {
    const idkh = document.getElementById('txtMaDon').value.trim();
    if (!idkh) {
        alert('Vui lòng nhập mã khách hàng!');
        return;
    }
    try {
        const res = await fetch(`/api/traxe/donthueByID?id=${idkh}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        if (!res.ok) throw new Error('Không lấy được dữ liệu đơn thuê');
        const data = await res.json();

        const tbody = document.querySelector('#tblDonThue tbody');
        tbody.innerHTML = '';
        data.forEach((don, idx) => {
            const tr = document.createElement('tr');
            let trangthaiGiao = "Chưa giao xe";
            if(don.giao_xeNV == true){
                trangthaiGiao = "Đã giao xe";
            }
            let trangthaiTra = "Chưa trả xe";
            if(don.tra_donNV == true){
                trangthaiTra = "Đã trả xe";
            }
            tr.innerHTML = `
                <td>${idx + 1}</td>
                <td>${don.ID}</td>
                <td>${don.tblXeThueID || ''}</td>
                <td>${don.ngay_dat ? new Date(don.ngay_dat).toLocaleDateString('vi-VN') : ''}</td>
                <td>${trangthaiGiao}</td>
                <td>${trangthaiTra}</td>
                <td>${don.ghi_chu || ''}</td>
            `;
            tr.addEventListener('click', function () {
                tbody.querySelectorAll('tr').forEach(row => row.classList.remove('selected-row'));
                tr.classList.add('selected-row');
                selectedDonID = don.ID;
            });
            tbody.appendChild(tr);
        });
    } catch (err) {
        console.error(err);
        alert('Lỗi khi tải danh sách đơn thuê!');
    }
}

document.getElementById('btnTimKiemDon').addEventListener('click', loadDonThue);

document.addEventListener('DOMContentLoaded', function () {
    const ten = localStorage.getItem('ten');
    document.getElementById('userName').textContent = ten;

    document.getElementById('btnXacNhanGiao').addEventListener('click', async function () {
        if (!selectedDonID) {
            alert('Vui lòng chọn một đơn thuê để trả xe!');
            return;
        }
        const selectedRow = document.querySelector('#tblDonThue tbody tr.selected-row');
        if (selectedRow) {
            const trangthaiCell = selectedRow.querySelector('td:nth-child(6)');
            if (trangthaiCell && trangthaiCell.textContent.trim() === "Đã giao xe") {
                alert('Đơn này đã giao xe rồi!');
                return;
            }
        }
        try {
            const res = await fetch(`/api/traxe/updategiaoxeNV?id=${selectedDonID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (!res.ok) throw new Error('Không thể cập nhật trạng thái giao xe');
            await loadDonThue();
            alert('Giao xe thành công!');
        } catch (err) {
            alert('Có lỗi khi giao xe!');
        }
    });
    
    document.getElementById('btnXacNhanTra').addEventListener('click', async function () {
        if (!selectedDonID) {
            alert('Vui lòng chọn một đơn thuê để trả xe!');
            return;
        }
        const selectedRow = document.querySelector('#tblDonThue tbody tr.selected-row');
        if (selectedRow) {
            const trangthaiCell = selectedRow.querySelector('td:nth-child(7)');
            if (trangthaiCell && trangthaiCell.textContent.trim() === "Đã trả xe") {
                alert('Đơn này đã trả xe rồi!');
                return;
            }
        }
        try {
            const res = await fetch(`/api/traxe/updatetraxeNV?id=${selectedDonID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (!res.ok) throw new Error('Không thể cập nhật trạng thái trả xe');
            await loadDonThue();
            alert('Trả xe thành công!');
        } catch (err) {
            alert('Có lỗi khi trả xe!');
        }
    });
});