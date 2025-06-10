document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnXacNhan').addEventListener('click', async function (e) {
        e.preventDefault();

        // Lấy dữ liệu từ localStorage
        const idkh = localStorage.getItem('id');
        const xeThueDichVu = JSON.parse(localStorage.getItem('xeThueDichVu') || '{}');
        const ngaybd = localStorage.getItem('ngaybd');
        const ngaykt = localStorage.getItem('ngaykt');
        const giathuexe = JSON.parse(localStorage.getItem('giathuexe') || '{}');
        const idthechap = localStorage.getItem('thechapID');
        const thechapSL = localStorage.getItem('thechapSL');

        try {
            const res = await fetch('/api/thuexe/adddonthue', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    idkh,
                    xeThueDichVu,
                    ngaybd,
                    ngaykt,
                    giathuexe,
                    idthechap,
                    thechapSL
                })
            });
            if (res.ok) {
                const data = await res.json();
                localStorage.setItem('tongtien', data.tongTien);

                window.top.location.href = "GDHoaDon.html";

                localStorage.removeItem('idkh');
                localStorage.removeItem('xeThueDichVu');
                localStorage.removeItem('ngaybd');
                localStorage.removeItem('ngaykt');
                localStorage.removeItem('giathuexe');
                localStorage.removeItem('thechapID');
                localStorage.removeItem('thechapSL');
            } else {
                alert('Có lỗi khi xác nhận hợp đồng!');
            }
        } catch (err) {
            alert('Lỗi kết nối máy chủ!');
        }
    });
});