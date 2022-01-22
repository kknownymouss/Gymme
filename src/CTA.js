import "./static/css/CTA.css"
import cta_im from "./static/images/cta-im.jpeg"

function CTA() {
    return (
        <div className="cta-wrap-1">
            <div className="cta-wrap-2">
                <img className="cta-img" src={cta_im} />
                <div className="cta-text">
                    <h1 style={{marginBottom: "24px"}} className="H1--desktop cta-text-p">Wanna join <span style={{color: "var(--primary-200)"}}>&</span> have fun?</h1>
                    <p style={{marginBottom: "32px"}} className="Body-medium">We’ll keep you updated on the things you need to know about Gymme. Nothing more, nothing less.</p>
                    <button className="cta-join-now-but">
                        join now
                     </button>
                </div>
            </div>
        </div>
    )
}

export default CTA