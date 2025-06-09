let selectedDonID = null;

async function loadDonThue() {
    const idkh = localStorage.getItem('id');
    try {
        const res = await fetch(`/api/traxe/donthueByID?id=${idkh}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        if (!res.ok) throw new Error('Không lấy được dữ liệu đơn thuê');
        const data = await res.json();

        const tbody = document.querySelector('#tblDon tbody');
        tbody.innerHTML = '';
        data.forEach((don, idx) => {
            const tr = document.createElement('tr');
            let trangthai = "Chưa trả xe";
            if(don.tra_donKH == true){
                trangthai = "Đã trả xe";
            }
            tr.innerHTML = `
                <td>${idx + 1}</td>
                <td>${don.ID}</td>
                <td>${don.ngay_dat ? new Date(don.ngay_dat).toLocaleDateString('vi-VN') : ''}</td>
                <td>${trangthai}</td>
            `;
            tr.addEventListener('click', function() {
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

document.addEventListener('DOMContentLoaded', async function () {
    const idkh = localStorage.getItem('id');
    if (!idkh) return;

    const ten = localStorage.getItem('ten');
    if (!ten) {
        document.getElementById('userName').textContent = 'Ai Đấy?';
    }else{
        document.getElementById('userName').textContent = ten;
    }
    
    await loadDonThue();
    document.getElementById('btnTraxe').addEventListener('click', async function () {
        if (!selectedDonID) {
            alert('Vui lòng chọn một đơn thuê để trả xe!');
            return;
        }
        const selectedRow = document.querySelector('#tblDon tbody tr.selected-row');
        if (selectedRow) {
            const trangthaiCell = selectedRow.querySelector('td:last-child');
            if (trangthaiCell && trangthaiCell.textContent.trim() === "Đã trả xe") {
                alert('Đơn này đã trả xe rồi!');
                return;
            }
        }
        try {
            const res = await fetch(`/api/traxe/updatetraxeKH?id=${selectedDonID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (!res.ok) throw new Error('Không thể cập nhật trạng thái trả xe');
            await loadDonThue(); // Cập nhật lại bảng sau khi trả xe
            alert('Trả xe thành công!');
        } catch (err) {
            alert('Có lỗi khi trả xe!');
        }
    });
    document.getElementById('btnXemHopDong').addEventListener('click', function () {
        alert('Chức năng này sẽ được mở rộng trong tương lai.');
    });
});