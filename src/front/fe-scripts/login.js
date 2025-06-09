function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggleButton = document.querySelector('.toggle-password');
  const eyeIcon = toggleButton.querySelector('.eye-icon');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    // Change to eye-off icon
    eyeIcon.innerHTML = `
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    `;
  } else {
    passwordInput.type = 'password';
    // Change back to eye icon
    eyeIcon.innerHTML = `
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    `;
  }
}

// Form submission handler
function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const phone = formData.get('phone');
  const password = formData.get('password');

  // Basic validation
  if (!phone.trim()) {
    alert('Vui lòng nhập số điện thoại');
    return;
  }

  if (!password.trim()) {
    alert('Vui lòng nhập mật khẩu');
    return;
  }

  // Simulate login process
  // console.log('Đăng nhập với:', { phone, password });
  // alert('Đăng nhập thành công!');
}

// Close modal handler
function closeModal() {
  const overlay = document.querySelector('.overlay');
  overlay.style.opacity = '0';
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 300);
}

// Social login handlers
function handleFacebookLogin() {
  console.log('Đăng nhập với Facebook');
  alert('Chức năng đăng nhập Facebook sẽ được triển khai');
}

function handleGoogleLogin() {
  console.log('Đăng nhập với Google');
  alert('Chức năng đăng nhập Google sẽ được triển khai');
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Password toggle button
  const toggleButton = document.querySelector('.toggle-password');
  toggleButton.addEventListener('click', togglePassword);

  // Form submission
  // const loginForm = document.querySelector('.login-form');
  // loginForm.addEventListener('submit', handleFormSubmit);

  // Close button
  const closeButton = document.querySelector('.close-btn');
  closeButton.addEventListener('click', closeModal);

  // Social login buttons
  const facebookBtn = document.querySelector('.facebook-btn');
  const googleBtn = document.querySelector('.google-btn');

  facebookBtn.addEventListener('click', handleFacebookLogin);
  googleBtn.addEventListener('click', handleGoogleLogin);

  // Close modal when clicking outside
  // const overlay = document.querySelector('.overlay');
  // overlay.addEventListener('click', function (event) {
  //   if (event.target === overlay) {
  //     closeModal();
  //   }
  // });

  // Close modal with Escape key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  // Add input focus effects
  const inputs = document.querySelectorAll('.form-input');
  inputs.forEach(function (input) {
    input.addEventListener('focus', function () {
      this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function () {
      this.parentElement.classList.remove('focused');
    });
  });

  document.querySelector('.login-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    try {
      const res = await fetch('http://localhost:8080/api/thanhvien/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if(res.ok){
        alert('Đăng nhập thành công!');
        localStorage.setItem('token', data.token);
        localStorage.setItem('ten', data.ten); 
        if(data.role === 'khachhang'){
          window.location.href = '/khachhang';
        }
        else if(data.role === 'quanly'){
          window.location.href = '/quanly';
        }
      }else{
        alert(data.error || 'Đăng nhập thất bại. Vui lòng thử lại.');
      }
    } catch (error) {
      console.error('Lỗi khi đăng nhập:', error);
      alert('Đăng nhập thất bại. Vui lòng thử lại.');
    }
  });
});