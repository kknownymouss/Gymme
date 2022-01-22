import "./static/css/Workouts.css"
import body_pump from "./static/images/body_pump.jpeg"
import yoga from "./static/images/yoga.jpeg"
import boxing from "./static/images/boxing.jpeg"
import full_body from "./static/images/full_body.jpeg"
import flexibility from "./static/images/flexibility.jpeg"
import core from "./static/images/core.jpg"
import { useRef } from "react"
import Slider from "react-slick";


function Workouts() {
    var settings = {
        centerMode: true,
        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
              breakpoint: 860,
              settings: {
                centerMode: true,
                slidesToShow: 1,
                arrows: false,
              }
            },
        ]
    };

    const slider = useRef(null)

    return (
        <div className="workouts-wrap" id="Workouts">
            <div className="workouts-title">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M107.499 20H94.1661V30C94.1661 30.963 93.9765 31.9166 93.6079 32.8064C93.2394 33.6961 92.6992 34.5045 92.0183 35.1855C91.3373 35.8664 90.5289 36.4066 89.6392 36.7751C88.7494 37.1437 87.7958 37.3334 86.8328 37.3334C85.8698 37.3334 84.9162 37.1437 84.0265 36.7751C83.1367 36.4066 82.3283 35.8664 81.6474 35.1855C80.9664 34.5045 80.4262 33.6961 80.0577 32.8064C79.6892 31.9166 79.4995 30.963 79.4995 30V20H40.6661V30C40.6661 31.9449 39.8935 33.8102 38.5183 35.1855C37.143 36.5607 35.2777 37.3334 33.3328 37.3334C31.3879 37.3334 29.5226 36.5607 28.1474 35.1855C26.7721 33.8102 25.9995 31.9449 25.9995 30V20H12.6661C11.8729 19.991 11.0859 20.1411 10.3517 20.4416C9.61743 20.742 8.95091 21.1866 8.39152 21.7491C7.83212 22.3116 7.39121 22.9806 7.09485 23.7165C6.7985 24.4523 6.65272 25.2402 6.66614 26.0334V100.633C6.6529 101.413 6.79329 102.187 7.07929 102.912C7.3653 103.637 7.79132 104.298 8.33301 104.858C8.87471 105.419 9.52147 105.867 10.2364 106.177C10.9513 106.487 11.7203 106.654 12.4995 106.667H107.499C108.279 106.654 109.048 106.487 109.763 106.177C110.477 105.867 111.124 105.419 111.666 104.858C112.208 104.298 112.634 103.637 112.92 102.912C113.206 102.187 113.346 101.413 113.333 100.633V26.0334C113.346 25.2541 113.206 24.48 112.92 23.755C112.634 23.0301 112.208 22.3686 111.666 21.8083C111.124 21.2481 110.477 20.8 109.763 20.4897C109.048 20.1794 108.279 20.013 107.499 20ZM33.3328 86.6667H26.6661V80H33.3328V86.6667ZM33.3328 70H26.6661V63.3334H33.3328V70ZM33.3328 53.3334H26.6661V46.6667H33.3328V53.3334ZM53.3328 86.6667H46.6661V80H53.3328V86.6667ZM53.3328 70H46.6661V63.3334H53.3328V70ZM53.3328 53.3334H46.6661V46.6667H53.3328V53.3334ZM73.3328 86.6667H66.6661V80H73.3328V86.6667ZM73.3328 70H66.6661V63.3334H73.3328V70ZM73.3328 53.3334H66.6661V46.6667H73.3328V53.3334ZM93.3328 86.6667H86.6661V80H93.3328V86.6667ZM93.3328 70H86.6661V63.3334H93.3328V70ZM93.3328 53.3334H86.6661V46.6667H93.3328V53.3334Z" fill="#131316" fill-opacity="0.05"/>
                    <path d="M33.3333 33.3333C34.2174 33.3333 35.0652 32.9821 35.6904 32.357C36.3155 31.7319 36.6667 30.884 36.6667 30V9.99996C36.6667 9.1159 36.3155 8.26806 35.6904 7.64294C35.0652 7.01782 34.2174 6.66663 33.3333 6.66663C32.4493 6.66663 31.6014 7.01782 30.9763 7.64294C30.3512 8.26806 30 9.1159 30 9.99996V30C30 30.884 30.3512 31.7319 30.9763 32.357C31.6014 32.9821 32.4493 33.3333 33.3333 33.3333Z" fill="#131316" fill-opacity="0.05"/>
                    <path d="M86.6666 33.3333C87.5507 33.3333 88.3986 32.9821 89.0237 32.357C89.6488 31.7319 90 30.884 90 30V9.99996C90 9.1159 89.6488 8.26806 89.0237 7.64294C88.3986 7.01782 87.5507 6.66663 86.6666 6.66663C85.7826 6.66663 84.9347 7.01782 84.3096 7.64294C83.6845 8.26806 83.3333 9.1159 83.3333 9.99996V30C83.3333 30.884 83.6845 31.7319 84.3096 32.357C84.9347 32.9821 85.7826 33.3333 86.6666 33.3333Z" fill="#131316" fill-opacity="0.05"/>
                </svg>
                <h2 className="H2--desktop workouts-title-text">Training programs.</h2>
            </div>
            <Slider ref={slider} {...settings}>
                <div className="workouts-image-div-1">
                    <img className="workouts-image-1" alt="flexibility" src={flexibility} />
                    <p className="workouts-image-tag">Flexibility</p>
                </div>
                <div className="workouts-image-div-2">
                    <img className="workouts-image-2" alt="boxing" src={boxing} />
                    <p className="workouts-image-tag">Boxing</p>
                </div>
                <div className="workouts-image-div-1">
                    <img className="workouts-image-1" alt="body_pump" src={body_pump} />
                    <p className="workouts-image-tag">Body Pump</p>
                </div>
                <div className="workouts-image-div-2">
                    <img className="workouts-image-2" alt="yoga" src={yoga} />
                    <p className="workouts-image-tag">Yoga</p>
                </div>
                <div className="workouts-image-div-1">
                    <img className="workouts-image-1" alt="full_body" src={full_body} />
                    <p className="workouts-image-tag">Full Body</p>
                </div>
                <div className="workouts-image-div-2">
                    <img className="workouts-image-2" alt="core" src={core} />
                    <p className="workouts-image-tag">Core</p>
                </div>
            </Slider>
            <div className="workouts-next-prev-buts">
                <svg className="workouts-nav-but" onClick={() => slider.current.slickPrev()} width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 0.666748C29.125 0.666748 37.3334 8.87508 37.3334 19.0001C37.3334 29.1251 29.125 37.3334 19 37.3334C8.87504 37.3334 0.66671 29.1251 0.66671 19.0001C0.66671 8.87508 8.87504 0.666748 19 0.666748ZM22.6784 13.5117C22.982 13.1974 23.15 12.7764 23.1462 12.3394C23.1424 11.9024 22.9671 11.4844 22.6581 11.1754C22.3491 10.8664 21.931 10.6911 21.494 10.6873C21.057 10.6835 20.636 10.8515 20.3217 11.1551L13.655 17.8217C13.3426 18.1343 13.1671 18.5581 13.1671 19.0001C13.1671 19.442 13.3426 19.8659 13.655 20.1784L20.3217 26.8451C20.636 27.1487 21.057 27.3167 21.494 27.3129C21.931 27.3091 22.3491 27.1338 22.6581 26.8248C22.9671 26.5158 23.1424 26.0977 23.1462 25.6607C23.15 25.2238 22.982 24.8027 22.6784 24.4884L17.19 19.0001L22.6784 13.5117Z" fill="#131316"/>
                </svg>
            
                <svg className="workouts-nav-but" onClick={() => slider.current.slickNext()} width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 0.666748C8.87496 0.666748 0.666626 8.87508 0.666626 19.0001C0.666626 29.1251 8.87496 37.3334 19 37.3334C29.125 37.3334 37.3333 29.1251 37.3333 19.0001C37.3333 8.87508 29.125 0.666748 19 0.666748ZM15.3216 13.5117C15.018 13.1974 14.85 12.7764 14.8538 12.3394C14.8576 11.9024 15.0329 11.4844 15.3419 11.1754C15.6509 10.8664 16.069 10.6911 16.506 10.6873C16.943 10.6835 17.364 10.8515 17.6783 11.1551L24.345 17.8217C24.6574 18.1343 24.8329 18.5581 24.8329 19.0001C24.8329 19.442 24.6574 19.8659 24.345 20.1784L17.6783 26.8451C17.364 27.1487 16.943 27.3167 16.506 27.3129C16.069 27.3091 15.6509 27.1338 15.3419 26.8248C15.0329 26.5158 14.8576 26.0977 14.8538 25.6607C14.85 25.2238 15.018 24.8027 15.3216 24.4884L20.81 19.0001L15.3216 13.5117Z" fill="#131316"/>
                </svg>
            </div>
        </div>
    )
}

export default Workouts