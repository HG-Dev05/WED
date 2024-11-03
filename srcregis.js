function CheckThongTin() {
    var input = document.getElementById("username").value;
    var isPhone = /^(0\d{3} \d{3} \d{3}|(\(\+84\) \d{3} \d{3} \d{3}))$/;
    var isEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var pass = document.getElementById("password").value;
    var confirmPass = document.getElementById("confirm password").value;

    if (isPhone.test(input)) {
    } else if (isEmail.test(input)) {
    } else {
     
        alert("Vui lòng nhập số điện thoại theo định dạng: 0123 345 678 hoặc (+84) 234 564 245, hoặc nhập email hợp lệ.");
        return false;
    }
    if (pass === "" || pass.includes(" ") || pass.length < 5) {
        alert("Mật khẩu phải có ít nhất 5 ký tự và không chứa dấu cách.");
        return false;
    }else if (confirmPass == "" || confirmPass != pass) {
        alert("Xác nhận mật khẩu không đúng.");
        return false;
    }
    alert("Đăng ký thành công");
    return true;
}