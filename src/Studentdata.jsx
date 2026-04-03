import { useEffect, useState } from "react"

function Studentdata(){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/studentdata/student")
        .then(res=>res.json())
        .then(res=>setData(res))
    },[])
 const handleDelete = (id) => {
    fetch(`http://localhost:3000/studentdata/student/${id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(() => {
        // ✅ UI update without refresh
        setData(prev => prev.filter(item => item._id !== id));
    });
}
    return<>
  <table className="data-table">
    <thead>
        <tr>
            <th>No</th>
            <th>Name</th>
            <th>Standard</th>
            <th>School</th>
            <th>WhatsApp</th>
            <th>Phone</th>
            <th>Delete</th>
           
        </tr>
    </thead>
    <tbody>
  {data.map((item,index)=>(
    <tr key={item._id}>
        <td>{index+1}</td>
        <td>{item.name}</td>
        <td>{item.standard}</td>
        <td>{item.school}</td>
        <td>{item.whatsapp}</td>
        <td>{item.phone}</td>
          {/* ✅ Button column */}
      <td>
        <button  type="button"
        style={{color:"white",backgroundColor:"red",
                                border:"none",
                                borderRadius:"5px",
                                padding:"5px",
                                marginLeft:"10px"}}
        onClick={() => handleDelete(item._id)}>
          Delete
        </button>
      </td>
    </tr>
  ))}
        
    </tbody>
  </table>
    </>
}
export default Studentdata