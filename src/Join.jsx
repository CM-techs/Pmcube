import axios from "axios"
import { useState } from "react"
import swal from "sweetalert2"

function Join() {
  const [name, setName] = useState("")
  const [school, setSchool] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [phone, setPhone] = useState("")
 const [submit,setSubmit]=useState(false)
 const [standard,setStandard]=useState("")
 const [subject,setSubject]=useState("")  
  const reg = async (e) => {
   
setSubmit(true)
    try {
      await axios.post("http://localhost:3000/register", {
        name,
        standard,
        subject,
        school,
        whatsapp,
        phone
      });
  if(name.length<3 || standard.length<3 || school.length<3 || whatsapp.length<10 || phone.length<10){
    swal.fire("Please fill all the fields");
    return;
  }else{
      swal.fire("Registered successfully");}
    } catch (err) {
      swal.fire(err.name, "Registration failed");
    }
  };

  return <>
    <div className="main-container">
      <div className="col-md-6 text-section">
        <h1>Register Now</h1>
        <p>
          There is a moment in the life of any aspiring astronomer that it is
          time to buy that first telescope. It’s exciting to think about
          setting up your own viewing station.
        </p>
      </div>
      <div className="glass-box">

        <h3 className="text-center mb-4">Registration</h3>

        <div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onInput={(e) => setName(e.target.value)}
            />
            {name.length < 3 && submit && <span className="text-start" style={{ color: "red" }}>Name must be at least 3 characters</span>}
          </div>
        <div className="mb-3">
          <select className="form-control" value={standard} onChange={(e)=>setStandard(e.target.value)}>
            <option selected>Select your standard and board</option>
            <option value={"10th-State Board"}>10th-State Board</option>
            <option value={"10th-CBSE"}>10th-CBSE</option>
            <option value={"10th-ICSE"}>10th-ICSE</option>
            <option value={"11th-State Board"}>11th-State Board</option>
            <option value={"11th-CBSE"}>11th-CBSE</option>
            <option value={"11th-ICSE"}>11th-ICSE</option>
            <option value={"12th-State Board"}>12th-State Board</option>
            <option value={"12th-CBSE"}>12th-CBSE</option>
            <option value={"12th-ICSE"}>12th-ICSE</option>
          </select>
        </div>
        <div className="mb-3">
          <select className="form-control" value={subject} onChange={(e)=>setSubject(e.target.value)}>
            <option selected>Select your subject</option>
            <option value={"Maths"}>Maths</option>
            <option value={" Computer Science"}>Computer Science</option>
            
          </select>
        </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your School name"
              value={school}
              onInput={(e) => setSchool(e.target.value)}

            />
            {school.length < 3 && submit && <span className="text-start" style={{ color: "red" }}>School name must be at least 3 characters</span>}
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter WhatsApp number"
              value={whatsapp}
              onInput={(e) => setWhatsapp(e.target.value)}
              minLength={10}
              maxLength={10}
            />
            {whatsapp.length < 10 && submit && <span className="text-start" style={{ color: "red" }}>WhatsApp number must be at least 10 digits</span>}
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter phone number"
              value={phone}
              minLength={10}
              maxLength={10}
              onInput={(e) => setPhone(e.target.value)}
            />
            {phone.length < 10 && submit && <span className="text-start" style={{ color: "red" }}>Phone number must be at least 10 digits</span>}
          </div>

          <button className="btn btn-primary w-100" onClick={reg}>
            Register
          </button>

        </div>

      </div>
      {/* Discount Glass Card */}
      <div className="discount-card">
        <h5>Special Offer</h5>
        <p>
          <strong><span style={{ color: "red" }}>10% – 50%</span>  Discount</strong> for students who enroll in advance.
        </p>
        <strong><span style={{ color: "red" }}><h4>Limited Period only</h4></span></strong>
      </div>


    </div>
  </>
} export default Join