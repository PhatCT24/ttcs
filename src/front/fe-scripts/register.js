// Register form logic for register.html

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.register-form');
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const inputs = form.querySelectorAll('input');
        
        // Get password fields using more specific selectors
        const passwordInputs = form.querySelectorAll('input[type="password"]');
        const password = passwordInputs[0].value;
        const passwordRepeat = passwordInputs[1].value;

        // Validate password match
        if (!password || !passwordRepeat) {
            alert('Vui lòng nhập đầy đủ mật khẩu và xác nhận mật khẩu!');
            return;
        }

        if (password !== passwordRepeat) {
            alert('Mật khẩu nhập lại không khớp!');
            return;
        }

        // Get all required fields
        const so_dien_thoai = inputs[0].value.trim(); // Số điện thoại
        const email = inputs[1].value.trim();
        const dia_chi = inputs[2].value.trim();
        const ngay_sinh = inputs[3].value; // Ngày sinh
        const ten = inputs[4].value.trim(); // Họ và tên
        const username = inputs[5].value.trim(); // Tên hiển thị (username)

        // Validate required fields
        if (!so_dien_thoai || !email || !dia_chi || !ngay_sinh || !ten || !username) {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }

        const data = {
            username: username,
            email: email,
            dia_chi: dia_chi,
            ten: ten,
            password: password,
            so_dien_thoai: so_dien_thoai,
            ngay_sinh: ngay_sinh
        };

        try {
            const res = await fetch('/api/thanhvien/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            
            if (res.ok) {
                alert('Đăng ký thành công!');
                window.location.href = 'login.html';
            } else {
                // Show specific error message from server
                alert(result.error || 'Đăng ký thất bại!');
            }
        } catch (err) {
            console.error('Registration error:', err);
            alert('Lỗi kết nối máy chủ! Vui lòng thử lại sau.');
        }
    });
});
