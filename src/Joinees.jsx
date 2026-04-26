import axios from "axios"
import { useEffect, useState } from "react"

function Joinees(){
    const [joinees,setJoinees]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/getcustomers/getcustomers").then((res)=>{
            setJoinees(res.data)
        })
    },[])
    console.log(joinees)
    return<>
    <h1 className="text-center" style={{color:"rgba(49, 183, 28, 1)",marginTop:"20px"}}>Joinees</h1>
    <table className="table table-bordered">
    <thead>
        <tr className="table-primary">
            <th>No.</th>
            <th>Name</th>
            <th>Standard</th>
            <th>Subject</th>
            <th>School</th>
            <th>Whatsapp</th>
            <th>Phone</th>
        </tr>
    </thead>
    <tbody>
         {joinees.map((item,index)=>(
        <tr key={item._id} className="table-secondary">
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.standard}</td>
            <td>{item.subject}</td>
            <td>{item.school}</td>
            <td>{item.whatsapp}</td>
            <td>{item.phone}</td>
        </tr>
         ))}
    </tbody>
    </table>
    </>
}
export default Joinees