import axios from 'axios';

class UserServices {
    signUp(data) {
        return axios({
            method: 'POST',
            url: 'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            data
        })
    }

    logIn(data) {
        return axios({
            method: 'POST',
            url: 'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            data
        })
    }

    changeProfile(data) {
        return axios({
            method: 'PUT',
            url: 'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
            data
        })
    }
}

export default UserServices;