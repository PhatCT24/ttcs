function showXacNhanModal(e) {
    e.preventDefault();
    document.getElementById('xacNhanOverlay').style.display = 'flex';
}

function showXacNhanModal(e) {
    e.preventDefault();
    const thechapID = document.getElementById('txtThechap').value;
    localStorage.setItem('thechapID', thechapID);
    document.getElementById('xacNhanOverlay').style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', async function () {
    localStorage.removeItem('thechapID');
    localStorage.removeItem('thechapSL');

    document.getElementById('tenKH').textContent = localStorage.getItem('ten') || '';
    document.getElementById('diaChiKH').textContent = localStorage.getItem('diachi') || '';
    document.getElementById('sdtKH').textContent = localStorage.getItem('sdt') || '';
    document.getElementById('ngaybatdau').textContent = localStorage.getItem('ngaybd') || '';
    document.getElementById('ngayketthuc').textContent = localStorage.getItem('ngaykt') || '';
    
    const ten = localStorage.getItem('ten');
    if (!ten) {
        document.getElementById('userName').textContent = 'Ai Đấy?';
    }else{
        document.getElementById('userName').textContent = ten;
    }
    
    const giathuexe = JSON.parse(localStorage.getItem('giathuexe') || '{}');
    let text = '';
    let xeIDList = [];
    for (const xeID in giathuexe) {
        text += `Xe ${xeID} : ${Number(giathuexe[xeID]).toLocaleString('vi-VN')} VND/Ngày\n`;
        xeIDList.push(xeID);
    }
    document.getElementById('giathue').textContent = text.trim();
    document.getElementById('idXe').textContent = xeIDList.join(', ');

    try {
        const res = await fetch('/api/thuexe/thechap', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        if (res.ok) {
            const data = await res.json();
            const select = document.getElementById('txtThechap');
            data.forEach(tc => {
                const option = document.createElement('option');
                option.value = tc.ID; 
                option.textContent = tc.mo_ta; 
                select.appendChild(option);
            });
        }
    } catch (err) {
        console.error('Không lấy được danh sách thế chấp');
    }

    document.getElementById('btnThem').addEventListener('click', function (e) {
        const select = document.getElementById('txtThechap');
        const thechapID = select.value;
        const thechapText = select.selectedOptions[0].textContent;
        const soLuong = document.getElementById('txtSoLuong').value;

        if (!thechapID) {
            alert('Vui lòng chọn loại thế chấp.');
            return;
        }

        localStorage.setItem('thechapID', thechapID);
        localStorage.setItem('thechapSL', soLuong || '1');

        let text = `Loại: ${thechapText}`;
        if (soLuong) {
            text += ` (Số lượng: ${soLuong})`;
        }
        document.getElementById('thechap').textContent = text;
        }); 
});