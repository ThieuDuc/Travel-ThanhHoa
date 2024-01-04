import {memo} from 'react';

const Footer = () =>{
    const iconBacktop = {
       
        width: '50px',
        height: '50px',
        background: 'tomato',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        position: 'fixed',
        cursor: 'pointer',
        bottom: '40px',
        right: '20px',
        
    };
    return (
    <div>
    <div id="backtop" style={iconBacktop}>
        <i class="fa-solid fa-chevron-up"></i>
    </div>
    <div className="footer">
        <div className="column1">
            <h3>MR LINH'S ADVENTURES TRAVEL CO.,LTD</h3>
            <p>Số GPKD: 0105880217 do Sở Kế Hoạch và Đầu Tư Thành Phố Hà Nội cấp ngày 07/05/2012</p>
            <p>GIẤY PHÉP KINH DOANH DỊCH VỤ LỮ HÀNH QUỐC TẾ</p>
            <p>Số GP/ No: 01851/ 2016 TCDL - GPLHQT Do Tổng Cục Du Lịch cấp ngày 15/07/2016</p>
        </div>
        <div className="column2">
            <h3>Thông tin liên quan</h3>
            <a href=""><p> Cẩm nang </p></a>
            <a href=""><p> Báo chí nói về chúng tôi </p></a>
        </div>
        <div className="column3">
            <h3>Kết nối với chúng tôi</h3>
            <a href="https://www.facebook.com/"></a>
            <a href="https://www.youtube.com/"></a>
            <a href="https://twitter.com/?lang=vi"></a>
            <a href="https://www.google.com.vn/?hl=vi"></a>
        </div>
        <div className="column4">
            <h3>Cơ Sở Chính </h3>
            <p>Số 83 Mã Mây, Hoàn Kiếm, Hà Nội</p>
            <p>Hotline: 098 6016 068 - 024 36425420</p>
            <p>Email: info@mrlinhadventure.com</p>
        </div>
    </div>
    </div>
    
    );
};

export default memo(Footer);