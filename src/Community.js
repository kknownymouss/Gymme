import "./static/css/Community.css"
import comm1 from "./static/images/comm-1.jpeg"
import comm2 from "./static/images/comm-2.jpeg"

function Community() {
    return (
        <div className="comm-wrap" id="Community">
            <div className="comm-title">
                <svg width="135" height="120" viewBox="0 0 135 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 14.4822V80.6911C0 88.6867 6.57386 95.1733 14.6899 95.1733H80.8694L104.125 120V95.1711H119.61C127.721 95.1711 134.3 88.6844 134.3 80.6889V14.4822C134.297 6.48445 127.721 0 119.61 0H14.6899C6.57386 0 0 6.48445 0 14.4822ZM93.5471 47.5844C93.5471 42.4444 97.773 38.2756 102.99 38.2756C108.208 38.2756 112.434 42.4444 112.434 47.5844C112.434 52.7289 108.208 56.8956 102.99 56.8956C97.773 56.8956 93.5471 52.7311 93.5471 47.5844ZM57.7054 47.5844C57.7054 42.4444 61.9357 38.2756 67.1487 38.2756C72.3617 38.2756 76.5921 42.4444 76.5921 47.5844C76.5921 52.7289 72.3617 56.8956 67.1487 56.8956C61.9357 56.8956 57.7054 52.7311 57.7054 47.5844ZM21.8659 47.5844C21.8659 42.4444 26.0962 38.2756 31.3092 38.2756C36.5267 38.2756 40.7526 42.4444 40.7526 47.5844C40.7526 52.7289 36.5267 56.8956 31.3092 56.8956C26.094 56.8978 21.8659 52.7311 21.8659 47.5844Z" fill="#131316" fill-opacity="0.05"/>
                </svg>
                <h2 className="H2--desktop comm-title-text">Community.</h2>
            </div>
            <div className="comm-div-image-par">
                <div style={{backgroundImage: `url(${comm1})`}} className="comm-div-1">
                    <div className="comm-div-text-div">
                        <div className="comm-div-text-div-2">
                            <p className="comm-div-text">“Great location, great price and great, helpful people. What to want more?”</p>
                            <p className="comm-div-text-2"><span style={{color: "var(--primary-200)"}}>~ </span>Mark A.</p>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${comm2})`}} className="comm-div-2">
                    <div className="comm-div-text-div">
                        <div className="comm-div-text-div-2">
                            <p className="comm-div-text">“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”</p>
                            <p className="comm-div-text-2"><span style={{color: "var(--primary-200)"}}>~ </span>Lauren K.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community