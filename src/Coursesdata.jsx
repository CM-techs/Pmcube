import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import swal from "sweetalert2";

function Coursesdata() {
    const [courses, setCourses] = useState([]);
    const [Board,setBoard]=useState("")
    const [std,setStd]=useState("")
    const [subject,setSubject]=useState("")
    const [img,setImg]=useState("")
   

    useEffect(() => {
        axios.get("http://localhost:3000/pmcourses/coursesdata")
            .then(res =>{
                console.log(res.data);
                console.log(res.data)
                setCourses(res.data)
            })
            .catch(err => console.log(err));
    }, []);
    const Addcourse = async () => {
  try {
   

    await axios.post(
      "http://localhost:3000/addcourses/addcourses",
      { Board, std, subject, img }
    );

    // 🔥 refresh data
    const res = await axios.get("http://localhost:3000/pmcourses/coursesdata");
    setCourses(res.data);
   
  } catch (err) {
    console.log(err);
  }
};
const handleDelete = (id) => {
  swal.fire({
    title:"Are you sure?",
    text:"You want to delete this data",
    icon:"warning",
    showCancelButton:true,
    confirmButtonText:"Yes, delete it!",
    cancelButtonText:"No, cancel!",
    reverseButtons:true
  }).then((result)=>{
  if(result.isConfirmed){
    axios.delete(`http://localhost:3000/deletecourses/deletecourses/${id}`)
    .then(() => {
        // ✅ UI update without refresh
        setCourses(prev => prev.filter(item => item._id !== id));
    })
    .catch(err => console.log(err));
}
  })
}

    return (<>
    <h1 className="text-center" style={{color:"#31b71c",marginTop:"20px"}}>Add Course</h1>
<div className="d-flex gap-2 justify-content-center flex-wrap">
    
    <input type="text" placeholder="Add Board" onChange={(e)=>setBoard(e.target.value)} />
    <input type="text" placeholder="Add Standard" onChange={(e)=>setStd(e.target.value)} />
    <input type="text" placeholder="Add Subject" onChange={(e)=>setSubject(e.target.value)} />
    <input type="text" placeholder="Add Image" onChange={(e)=>setImg(e.target.value)} />
    <button className="delete-btn" disabled={!Board || !std || !subject || !img} onClick={Addcourse}>Add</button>
    </div>
    <hr className="line-solid--px2"/>
      <h1 className="text-center" style={{color:"#31b71c",marginTop:"20px"}}>Courses Data</h1>
  <div className="table-container px-3">
         <table className="data-table">
            <thead>
           <tr>
            <th>NO</th>
            <th>Board</th>
            <th>Standard</th>
            <th>Subject</th>
            <th>Image</th>
            <th>Actions</th>
           </tr>
           </thead>
           <tbody>
           {courses.map((course,index) => (
            <tr key={course._id}>
                <td>{index+1}</td>
                <td>{course.Board}</td>
                <td>{course.std}</td>
                <td>{course.subject}</td>
                <td>{course.img}</td>
                <td>
                    
                    <button  className="delete-btn" onClick={()=>handleDelete(course._id)}>Delete</button>
                    {/* <button className="accept-btn" onClick={()=>handleupdate(course._id)}>Update</button> */}
                </td>
            </tr>
           ))}
      </tbody>
         </table>
         
         
         
         
         
         
         </div>
         </>
        
    );
}
export default Coursesdata;