import { memo } from 'react';
import React, { useState } from 'react';
import ACT from '../../../../image/videoplayback.webm';
const Header = () => {
    const iconStyle = {
        position: 'fixed',
        margin: '10px',
        fontSize: '35px',
        color: ' var(--main-color)',
        cursor: 'pointer',
        zIndex: '1',
        
    };
    const iconUl= {
        width: '300px',
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    return (
        <header>
            <i id='socc' className="fas fa-bars" style={iconStyle} onClick={toggleDropdown}></i>
            {isOpen && (
            <ul class="dropdown-menu" style={iconUl}>
                <li><a class="dropdown-item" href=""><i class="fa-solid fa-user"></i>Dang Nhap</a></li>
                <hr />
                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-gear"></i>Cai Dat </a></li>
                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-question"></i>Tro Giup</a></li>
                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-moon"></i>Giao Dien</a></li>
                <li><a class="dropdown-item" href="#duc5"><i class="fa-solid fa-exclamation" ></i> &nbsp; Y Kien</a></li>
            </ul>
            )}
       
            <div className='header-top'>
                <ul className="menu-top">
                    <li ><a>Trang Chủ</a></li>
                    <li ><a>Tour Nhiều Người Đặt</a></li>
                    <li ><a>About </a></li>
                    <li ><a>Tour Sale</a></li>
                    <li ><a>Đánh Giá </a></li>
                    <li ><a>Liên Hệ </a></li>
                </ul>
            </div>
        <div className="video ">
            <video width="100%" height="auto" autoPlay muted loop>
                <source src={ACT} type="audio/webm" />
            </video>
        </div>
            <div class="content">
                <h1>Khám Phá</h1>
                <p>Xách balo lên và đi </p>
                <form action="" className='class_form'>
                    <h1>Bạn Muốn Đi Đâu </h1>
                    <p>Địa Điểm</p>
                    <div class="form-group">
                        <input for="SearchString"></input>
                    </div>
                    <p>Số Người</p>
                    <div class="form-group">
                        <label for="songuoi"></label>
                        <input type="number" name="songuoi" class="form-control" value="So Nguoi " />
                    </div>
                    <p>Ngày Đi</p>
                    <div class="form-group">
                        <label for="ngayKhoiHanh"></label>
                        <input type="date" name="ngayKhoiHanh" class="form-control" value="Ngay Di" />
                    </div>
                    <p>So Ngay</p>
                    <div class="form-group">
                        <label for="soNgay"></label>
                        <input type="number" value="So Ngay" name="soNgay" class="form-control" min="1" max="9" />
                    </div>
                    <button type="submit" class="btn btn-primary">Tìm Kiếm</button>
                </form>
            </div>
        </header>
    );
};

export default memo(Header);