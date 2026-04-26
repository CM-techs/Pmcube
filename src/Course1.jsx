import { useEffect, useState } from "react";
import axios from "axios";

function Courses1() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/courses")
      .then((res) => {
        setCourses(res.data); // store data
      })
      .catch((err) => console.log(err));
  }, []);

  return (
   <div className="container py-4">
      <div className="row g-4">
        <div className="col-md-12">
          <h1 className="text-center">OUR COURSES</h1>
        </div>
        {courses.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card h-100 shadow-sm rounded-4">
              
              <img
                src={item.img}
                className="card-img-top"
                alt={item.subject}
              />

              <div className="card-body">
                <p><strong>Sub :</strong> {item.subject}</p>
                <p><strong>Class :</strong> {item.std}</p>
                <p><strong>Board :</strong> {item.Board}</p>
                <p><strong>Time :</strong>Flexible time</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses1;