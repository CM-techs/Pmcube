import axios from "axios"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"


function Studentdata(){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/studentdata/student")
        .then(res=>res.json())
        .then(res=>setData(res))
    },[])
 const handleDelete = (id) => {
  const result = Swal.fire({
    title:"Are you sure?",
    text:"You want to delete this data",
    icon:"warning",
    showCancelButton:true,
    confirmButtonText:"Yes, delete it!",
    cancelButtonText:"No, cancel!",
    reverseButtons:true
  })
  if (result.isConfirmed) {
    fetch(`http://localhost:3000/studentdata/student/${id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(() => {
        // ✅ UI update without refresh
        setData(prev => prev.filter(item => item._id !== id));
    });}
}
const handleAccept = async (id) => {
  try {
    await axios.post(`http://localhost:3000/customers/customers/${id}`, {
      
    });

    // ✅ remove from UI
    setData(prev => prev.filter(item => item._id !== id));

    // ✅ success popup
    Swal.fire({
      icon: "success",
      title: "Accepted!",
      text: "Customer added successfully 🚀",
      timer: 1500,
      showConfirmButton: false
    });

  } catch (err) {
    console.log(err);

    // ❌ error popup
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong ❌"
    });
  }
};
    return<>
      <h1 className="text-center" style={{color:"#31b71c",marginTop:"20px"}}>Student Data</h1>
  <div className="table-container px-3">
  <table className="data-table">
    <thead>
        <tr >
            <th>No</th>
            <th>Name</th>
            <th>Standard</th>
            <th>Subject</th>
            <th>School</th>
            <th>WhatsApp</th>
            <th>Phone</th>
            <th>Delete</th>
            <th>Accept</th>
           
        </tr>
    </thead>
    <tbody>
  {data.map((item,index)=>(
    <tr key={item._id}>
        <td>{index+1}</td>
        <td>{item.name}</td>
        <td>{item.standard}</td>
        <td>{item.subject}</td>
        <td>{item.school}</td>
        <td>{item.whatsapp}</td>
        <td>{item.phone}</td>
          {/* ✅ Button column */}
      <td>
        <button
  type="button"
  className="delete-btn"
  onClick={() => handleDelete(item._id)}
>
     
  Delete
</button>
      </td>
      <td>
        <button className="accept-btn"
        onClick={() => handleAccept(item._id)}
        >Accept</button>
      </td>
    </tr>
  ))}
        
    </tbody>
  </table>
  </div>
    </>
}
export default Studentdata