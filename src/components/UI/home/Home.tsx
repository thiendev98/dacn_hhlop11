import React from 'react';
import { HomeStyles } from './home.style';
import background_left from 'assets/images/background-left-half.svg';
import background_right from 'assets/images/background-right-half.svg';
import background_content from 'assets/images/sgk_11.webp';
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate();
    const handleClickStart = () => {
        navigate('/started');
    };
    return (
        <HomeStyles>
            <div className="homepage">
                <div>
                    <img alt="" src={background_left} className="image_left" />
                    <img alt="" src={background_right} className="image_right" />
                </div>
                <div>
                    <div className="container">
                        <div className="container_content">
                            <img
                                alt=""
                                src={background_content}
                                className="container_content_image"
                            />
                        </div>
                        <div className="container_introduce">
                            <div>
                                <h1>Chào mừng bạn đến với website của chúng tôi</h1>
                                <p>
                                    Website này sẽ hỗ trợ bạn trong việc vẽ hình trong Sách giáo
                                    khoa Hình học 11. Cùng tìm hiểu ngay thôi nào!
                                </p>
                                <button onClick={() => handleClickStart()}>Bắt đầu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeStyles>
    );
}
