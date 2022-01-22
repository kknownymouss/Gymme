import "./static/css/Mission.css"

function Mission() {
    return (
        <div className="mission-wrap" id="About">
            <div className="mission-div">
                <div className="mission-title">
                    <svg width="150" height="106" viewBox="0 0 150 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45 53C59.5078 53 71.25 41.2578 71.25 26.75C71.25 12.2422 59.5078 0.5 45 0.5C30.4922 0.5 18.75 12.2422 18.75 26.75C18.75 41.2578 30.4922 53 45 53ZM63 60.5H61.0547C56.1797 62.8438 50.7656 64.25 45 64.25C39.2344 64.25 33.8437 62.8438 28.9453 60.5H27C12.0937 60.5 0 72.5938 0 87.5V94.25C0 100.461 5.03906 105.5 11.25 105.5H78.75C84.9609 105.5 90 100.461 90 94.25V87.5C90 72.5938 77.9062 60.5 63 60.5ZM112.5 53C124.922 53 135 42.9219 135 30.5C135 18.0781 124.922 8 112.5 8C100.078 8 90 18.0781 90 30.5C90 42.9219 100.078 53 112.5 53ZM123.75 60.5H122.859C119.602 61.625 116.156 62.375 112.5 62.375C108.844 62.375 105.398 61.625 102.141 60.5H101.25C96.4688 60.5 92.0625 61.8828 88.1953 64.1094C93.9141 70.2734 97.5 78.4531 97.5 87.5V96.5C97.5 97.0156 97.3828 97.5078 97.3594 98H138.75C144.961 98 150 92.9609 150 86.75C150 72.2422 138.258 60.5 123.75 60.5V60.5Z" fill="#131316" fill-opacity="0.05"/>
                    </svg>
                    <h2 className="H2--desktop mission-title-text">Our mission.</h2>
                </div>
                <p className="Body-medium mission-paragraph">We are distinguished by our unsurpassed motivating atmosphere, knowledgeable staff, and premier exercise equipment, which supports our members in meeting their individual fitness goals.
                <br></br>
                <br></br>
                The strength of our heart-felt identity is utilized to inspire every person that steps foot into our gyms to better themselves.</p>
                <div className="mission-join-now">
                    <p className="mission-join-now-text">join now</p>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM8.793 7.707C8.61084 7.5184 8.51005 7.2658 8.51233 7.0036C8.5146 6.7414 8.61977 6.49059 8.80518 6.30518C8.99059 6.11977 9.2414 6.0146 9.5036 6.01233C9.7658 6.01005 10.0184 6.11084 10.207 6.293L14.207 10.293C14.3945 10.4805 14.4998 10.7348 14.4998 11C14.4998 11.2652 14.3945 11.5195 14.207 11.707L10.207 15.707C10.0184 15.8892 9.7658 15.99 9.5036 15.9877C9.2414 15.9854 8.99059 15.8802 8.80518 15.6948C8.61977 15.5094 8.5146 15.2586 8.51233 14.9964C8.51005 14.7342 8.61084 14.4816 8.793 14.293L12.086 11L8.793 7.707Z" fill="#131316"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Mission
