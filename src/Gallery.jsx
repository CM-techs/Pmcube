import { useEffect, useState } from "react"

function Gallery    (){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/gallery/image")
        .then(res=>res.json())
        .then(res=>setData(res))
    },[])
    return<>
    <h1>This is gallery</h1>
     <div className="container mt-4">
      <div className="row">

        {data.map((item) => (
          <div className="col-lg-3 col-md-6 col-sm-12" key={item.id}>
            <div className="card mb-3">
              <img 
                src={item.image} 
                className="card-img-top" 
                alt={item.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Sample text</p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>

    </>
}export default Gallery