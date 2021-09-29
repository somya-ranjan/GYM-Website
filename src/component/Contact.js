import React, { useState } from 'react'
import "./Contact.css"

function Contact() {
    const [form, setForm] = useState({
        name: "",
        mobileNo: "",
        email: "",
        address: ""
    });
    let inputHandel=(e)=>{
        let name = e.target.name;
        let value = e.target.value;

        // console.log(name,value);

        setForm({...form, [name]:value})
    }
    let formData=(e)=>{
        e.preventDefault()
        let formDataRecord={...form}
        // window.alert(JSON.stringify(formDataRecord))

        window.alert(`My Name Is : ${formDataRecord.name} ; My Mobile No : ${formDataRecord.mobileNo}
        My E-mail : ${formDataRecord.email} ; My Address : ${formDataRecord.address}`)
        setForm({name: "",mobileNo: "",email: "",address: ""})
    }

    return (
        <>
        <div className="contact_comp">
        <h1>Contact Us</h1>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14978.250309791665!2d85.85212322890943!3d20.19393043330237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a15a3bbc0b9b%3A0xeb59c2b300412f6f!2sUttara%2C%20Odisha!5e0!3m2!1sen!2sin!4v1627386574042!5m2!1sen!2sin" loading="fast"></iframe>
            </div>
            <div className="contact_comp_content">
                <div className="address">
                <div className="loc">
                    <i className="fas fa-street-view"></i>
                    <div className="data">
                        <h2>Uttra square,BBSR,<br /> Odisha, 751002</h2>
                    </div>
                </div>
                <div className="ph">
                    <i className="fas fa-mobile-alt"></i>
                    <div className="data">
                        <h2>9090904448</h2>
                    </div>
                </div>
            </div>
                <div className="form" onSubmit={formData}>
                    <form action="">
                        <input type="text" placeholder="Enter Your Name" autoComplete="off" required name="name" value={form.name} onChange={inputHandel}/><br />
                        <input type="number" placeholder="Enter Your Mobire No" autoComplete="off" required name="mobileNo" value={form.mobileNo} onChange={inputHandel}/><br />
                        <input type="email" placeholder="Enter Your Email" autoComplete="off" required name="email" value={form.email} onChange={inputHandel}/><br />
                        <textarea name="" cols="30" rows="4" placeholder="Drop Your Address" autoComplete="off" required name="address" value={form.address} onChange={inputHandel}></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
