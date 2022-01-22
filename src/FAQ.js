import FAQcontainer from "./FAQcontainer"
import "./static/css/FAQ.css"

function FAQ() {
    return (
        <div className="faq-wrap" id="FAQ">
            <div className="faq-title">
                <svg width="54" height="80" viewBox="0 0 54 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.2794 0.0915513C8.80461 1.02537 0.667016 9.82998 0 25.705H15.6082C15.7416 20.2354 18.9433 16.0999 24.5462 15.4329C30.1491 14.8993 35.4852 16.2333 37.0861 19.9686C38.8203 24.1041 34.9516 28.9066 33.084 30.9077C29.6155 34.643 24.0126 37.4444 21.0777 41.4465C18.2762 45.4486 17.7426 50.6514 17.4758 57.0547H31.2163C31.3497 52.9192 31.6165 49.0505 33.4842 46.5159C36.5525 42.3804 41.0882 40.5127 44.8235 37.1776C48.4254 34.1094 52.294 30.3741 52.8277 24.5043C55.0955 7.29532 40.9548 -0.975674 24.2794 0.0915513Z" fill="#131316" fill-opacity="0.05"/>
                    <path d="M24.6795 79.9999C29.4685 79.9999 33.3507 76.1774 33.3507 71.4621C33.3507 66.7468 29.4685 62.9243 24.6795 62.9243C19.8905 62.9243 16.0083 66.7468 16.0083 71.4621C16.0083 76.1774 19.8905 79.9999 24.6795 79.9999Z" fill="#131316" fill-opacity="0.05"/>
                </svg>
                <h2 className="H2--desktop faq-title-text">FAQ.</h2>
            </div>
            <div className="faq-questions-wrap-1">
                <div className="faq-questions-wrap-2">
                    <FAQcontainer attr={
                        {
                            question: "How can I book a workout class? ",
                            answer: "Booking a workout class is simple for our members. Simply log into your Gymme account on our website and click book class button . You can book 3 days in advance at 9pm. You can cancel your class online by logging back in and click cancel booking."
                        }
                    } />
                    <FAQcontainer attr={
                        {
                            question: "Can I pay by cash for my membership? ",
                            answer: "Yes, we accept all kinds of payments."
                        }
                    } />
                    <FAQcontainer attr={
                        {
                            question: "What age do I need to be to join? ",
                            answer: "All ages are allowed. Members younger than 16 years old must have a guardain present with them at the gym."
                        }
                    } />
                    <FAQcontainer attr={
                        {
                            question: "Are there any lockers? ",
                            answer: "Lockers are available. You simply choose a locker, and generate a random one-time use code with the push of a button so you could store your personal items. When you're done, you simply open the locker using your unique code and grab your personal items. At this point, the locker automatically becomes available and ready to generate a new code for a new user"
                        }
                    } />
                    <FAQcontainer attr = {
                        {
                            question: "How do I cancel my membership? ",
                            answer: "To cancel your membership, you can either login with your account and navigate to plans in order to cancel your subscription, or you can cancel it in-persona at our gym."
                        }
                    } />
                    <FAQcontainer attr = {
                        {
                            question :"Is there water available at the gym? ",
                            answer: "We recommend every member to bring his own equipment and drinks with him to training."
                        }
                    } />
                </div>
            </div>
        </div>
    )
}

export default FAQ