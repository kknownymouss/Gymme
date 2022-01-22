import PlanCard from "./PlanCard"
import PlanCardSmall from "./PlanCardSmall"
import { useMediaQuery } from 'react-responsive'
import "./static/css/Pricing.css"

function Pricing() {

    const isIpadOrTablet = useMediaQuery({ query: '(max-width: 860px)' })
    const isPhone = useMediaQuery({ query: '(max-width: 428px)' })

    return (
        <div className="pricing-wrap" id="Pricing">
            <div className="pricing-title">
                <svg width="119" height="120" viewBox="0 0 119 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.70997 2.43002C3.06174 1.56309 3.73774 0.863736 4.59732 0.477449C5.45691 0.0911617 6.4339 0.0476823 7.32506 0.356056C8.21621 0.664429 8.95292 1.30091 9.38191 2.13309C9.81091 2.96528 9.89915 3.92909 9.6283 4.82402C3.99541 20.844 15.1763 32.808 23.7014 39.216L27.1454 34.332C28.3035 32.694 30.8926 31.332 32.9057 31.308L52.2357 31.392C54.5971 31.4626 56.8953 32.1633 58.8873 33.42L115.847 72.942C117.172 73.8646 118.073 75.2691 118.354 76.8479C118.635 78.4268 118.272 80.0514 117.344 81.366L91.4598 118.014C89.5195 120.744 86.4211 120.414 83.6562 118.506L26.6967 78.978C25.0596 77.832 23.1678 75.36 22.5009 73.47L16.4496 54.6C15.7826 52.716 16.1889 49.842 17.347 48.204L19.4449 45.228C7.99725 36.546 -3.88699 21.204 2.70997 2.43002ZM29.2131 58.578C30.2624 59.3049 31.4462 59.82 32.6968 60.0939C33.9473 60.3679 35.2402 60.3954 36.5015 60.1747C37.7629 59.9541 38.9679 59.4896 40.0477 58.808C41.1276 58.1263 42.0611 57.2408 42.795 56.202C44.281 54.1 44.8634 51.5003 44.4144 48.9738C43.9653 46.4473 42.5216 44.2003 40.4 42.726C38.7368 41.5729 36.751 40.9629 34.7203 40.9812C32.6896 40.9994 30.7153 41.6451 29.0736 42.828C30.7228 43.812 31.8567 44.388 32.0689 44.478C32.8205 44.8326 33.4281 45.4294 33.7922 46.1705C34.1562 46.9115 34.2551 47.753 34.0726 48.5569C33.8901 49.3609 33.437 50.0797 32.7877 50.5955C32.1383 51.1113 31.3312 51.3935 30.4985 51.396C29.977 51.396 29.4435 51.276 28.9402 51.042C27.7639 50.49 26.5027 49.836 25.187 49.062C24.8843 50.8624 25.1016 52.7107 25.8139 54.3943C26.5262 56.0778 27.7044 57.528 29.2131 58.578Z" fill="#131316" fill-opacity="0.05"/>
                </svg>
                <h2 className="H2--desktop pricing-title-text">Pricing plan.</h2>
                
            </div>
            {!isIpadOrTablet ? 
                <div className="pricing-plans-wrap">
                    <PlanCard attr={{
                        perk_1: "unlimited gym access",
                        perk_2: "1 training program",
                        perk_3: "free fitness consultation",
                        padding: "80px 92px",
                        light: true,
                        price: "20$",
                        tag: "basic"
                    }} />
                    <PlanCard attr={{
                        perk_1: "unlimited gym access",
                        perk_2: "5 training program",
                        perk_3: "free fitness consultation",
                        perk_4: "personal trainer",
                        padding: "80px 92px",
                        light: false,
                        price: "35$",
                        tag: "premium"
                    }} />
                    <PlanCard attr={{
                        perk_1: "unlimited gym access",
                        perk_2: "all training program",
                        perk_3: "free fitness consultation",
                        perk_4: "personal trainer",
                        perk_5: "50% off drinks",
                        padding: "42px 92px",
                        light: true,
                        price: "49$",
                        tag: "elite"
                    }} />
                </div> : 
                <div className="pricing-plans-small-wrap">
                    <PlanCardSmall attr={{
                        perk_1: "unlimited gym access",
                        perk_2: "1 training program",
                        perk_3: "free fitness consultation",
                        padding: isPhone ? "40px 25px" : "40px 92px",
                        margin: isPhone ? "16px 20px" : "16px 107px",
                        light: true,
                        price: "20$",
                        tag: "basic"
                    }} />
                    <PlanCardSmall attr={{
                        perk_1: "unlimited gym access",
                        perk_2: "5 training program",
                        perk_3: "free fitness consultation",
                        perk_4: "personal trainer",
                        padding: isPhone ? "40px 20px" : "40px 92px",
                        margin: isPhone ? "16px 20px" : "16px 107px",
                        light: false,
                        price: "35$",
                        tag: "premium"
                    }} />
                    <PlanCardSmall attr={{
                        perk_1: "unlimited gym access",
                        perk_2: "all training program",
                        perk_3: "free fitness consultation",
                        perk_4: "personal trainer",
                        perk_5: "50% off drinks",
                        padding: isPhone ? "40px 25px" : "40px 92px",
                        margin: isPhone ? "16px 20px" : "16px 107px",
                        light: true,
                        price: "49$",
                        tag: "elite"
                    }} />
                </div>
            }
        </div>
    )
}

export default Pricing