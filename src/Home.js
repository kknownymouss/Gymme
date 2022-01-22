import "./static/css/Home.css"

function Home() {
    return (
        <div className="home-header-div">
            <div className="home-header-content">
                <h1 className="H1--desktop home-header-text">Get the best part of your day</h1>
                <h1 style={{color: "var(--primary-200)"}} className="H1--desktop home-header-text">– you fit here</h1>
                <p className="Body-large home-header-paragraph">We provide serious fitness but within a fun and friendly, safe space.</p>
                <button className="home-join-now-but">Join now</button>
            </div>
        </div>
    )
}

export default Home
