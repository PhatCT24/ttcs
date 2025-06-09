document.addEventListener('DOMContentLoaded', async function () {
    const idkh = localStorage.getItem('id');
    if (!idkh) return;

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
            tr.innerHTML = `
                <td>${idx + 1}</td>
                <td>${don.ID}</td>
                <td>${don.ngay_dat ? new Date(don.ngay_dat).toLocaleDateString('vi-VN') : ''}</td>
                <td>${don.trang_thai || ''}</td>
            `;
            tr.addEventListener('click', function() {
                tbody.querySelectorAll('tr').forEach(row => row.classList.remove('selected-row'));
                tr.classList.add('selected-row');
                selectedDongXe = don.hang;
            });
            tbody.appendChild(tr);
        });
    } catch (err) {
        console.error(err);
        alert('Lỗi khi tải danh sách đơn thuê!');
    }
});