import axios from "axios";
import { useState } from "react";
import swal from "sweetalert2";

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [submit, setSubmit] = useState(false)
    const contact = async (e) => {
        setSubmit(true)





        if (message.length < 10) {
            swal.fire("Message must be at least 10 characters");
            return;
        }
        try {
            if (name.length < 3 || email.length < 3 || message.length < 10) {
                swal.fire("Please fill all the fields");
                return;
            } else {
                await axios.post("http://localhost:3000/contact/c", {
                    name,
                    email,
                    message
                });
            }
            if (name.length < 3 || email.length < 3 || message.length < 10) {
                swal.fire("Please fill all the fields");
                return;
            } else {
                swal.fire("Registered successfully");
            }

        } catch (err) {
            swal.fire(err.name, "Registration failed");
        }
    }
    return <>
        <div className="contact-main-container">
            <div className="contact-text-box">
                <h2 className="con-head">Contact Us</h2>
                <div className="con-box2">
                    <h4 className="con-sub1">Feel free to contact us anytime. Thank you for choosing our templates.</h4>
                    <p className="con-sub2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis voluptate, nobis autem sed dolor alias cupiditate vitae aperiam velit sequi.
                    </p>
                </div>
            </div>

            <div className="con-box">
                <input type="text" className="con-name" placeholder="Name" value={name} onInput={(e) => setName(e.target.value)} />
                <div className="text-start1">{name.length < 3 && submit && <span className="text-start" style={{ color: "red" }}>Name must be at least 3 characters</span>}</div>
                <input className="con-email" type="email" placeholder="Enter Your Email" value={email} onInput={(e) => setEmail(e.target.value)} />
                <div className="text-start1">{email.length < 3 && submit && <span className="text-start" style={{ color: "red" }}>Email must be at least 3 characters</span>}</div>
                <textarea className="con-msg" placeholder="Message" value={message} onInput={(e) => setMessage(e.target.value)} />
                <div className="text-start1">{message.length < 10 && submit && <span className="text-start" style={{ color: "red" }}>Message must be at least 10 characters</span>}</div>
                <button className="con-btn" onClick={contact}  >Send Feedback</button>
            </div>
        </div>

        <div className="con-img-box">
            <img className="con-img" src="./offerimg.png" alt="Special Offer" />
        </div>
    </>
} export default Contact
