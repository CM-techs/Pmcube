import axios from "axios"
import { useEffect ,useState} from "react"

function Courses3 (){
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/mentors/m")
    .then((res)=>{
    setData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
    return<>
    <div className="container mt-5">
      <div className="row">
   {data.map((e)=>(
      
        <div className="col-md-4">
          <div className="card">
            <img src={e.img} className="card-img-top" alt="card1"/>
            <div className="card-body">
              <h5 className="card-title">{e.name}</h5>
              <p className="card-text">{e.quaification}</p>
            </div>
          </div>
        </div>)
)}
        
      </div>
    
    </div>
    </>
}export default Courses3