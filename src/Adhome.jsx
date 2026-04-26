import React, { useEffect, useState } from 'react';
import studentsIllustration from './assets/total_students.png';
import coursesIllustration from './assets/active_courses.png';
import joinsIllustration from './assets/new_joins.png';
import actionsIllustration from './assets/quick_actions.png';
import { useNavigate } from 'react-router-dom';

function Adhome() {
    const [count, setCount] = useState(0);
    const [studentscount, setstudentscount] = useState(0);
    const navigate = useNavigate();
    const handleManageStudents = () => {
        navigate("/studentdata");
    }
    const handleManageCourses = () => {
        navigate("/coursesdata");
    }
    useEffect(() => {
  fetch("http://localhost:3000/count")
    .then(res => res.json())
    .then(data => setCount(data.length));
}, []);
 useEffect(() => {
  fetch("http://localhost:3000/studentdata/student")
    .then(res => res.json())
    .then(data => setstudentscount(data.length));
}, []);
const students =()=>{
    navigate("/studentdata");
}
const courses =()=>{
    navigate("/coursesdata");
}
const joins =()=>{
    navigate("/joinsdata");
}
    return (
        <div className="dashboard-bg">
            <div className="container">
                <div className="row g-4 justify-content-center">
                    <div className="col-12 text-center mb-4">
                        <h1 className="fw-bold" style={{ color: "#31b71c" }}>Admin Dashboard</h1>
                        <p className="text-muted">Welcome to your management portal. Choose an action below.</p>
                    </div>

                    <div className="col-md-4" onClick={students}>
                        <div className="ad-card d-flex flex-column align-items-center justify-content-center text-center p-4">
                            <div className="illustration-box mb-3" >
                                <img src="https://images.template.net/492943/Studying-Student-Clipart-edit-online.png" alt="Students" style={{ width: "80px", height: "auto", opacity: "0.9" }} />
                            </div>
                            <h3 className="fw-bold mb-1">{studentscount}</h3>
                            <p className="text-muted small mb-0">Total Students</p>
                        </div>
                    </div>
                    <div className="col-md-4" onClick={courses}>
                        <div className="ad-card d-flex flex-column align-items-center justify-content-center text-center p-4">
                            <div className="illustration-box mb-3">
                                <img src="https://media.istockphoto.com/id/1396113348/vector/3d-web-vector-illustrations-online-concept-computer-with-open-pages-e-learning-design-over.jpg?s=612x612&w=0&k=20&c=UuGSBpij7N-sZLRU-akf97-k7EexWmKgv15EgeApRy0="  alt="Courses" style={{ width: "80px", height: "auto", opacity: "0.9" }} />
                            </div>
                            <h3 className="fw-bold mb-1">{count}</h3>
                            <p className="text-muted small mb-0">Active Courses</p>
                        </div>
                    </div>
                    <div className="col-md-4" onClick={joins}>
                        <div className="ad-card d-flex flex-column align-items-center justify-content-center text-center p-4">
                            <div className="illustration-box mb-3">
                                <img src="https://media.istockphoto.com/id/2190232481/vector/employee-team-welcome-business-company-or-students-team-welcoming-new-member-employees-with.jpg?s=612x612&w=0&k=20&c=-rGF9AGv3Ad2rqQ1r1oMQj-wMmIArz8IhdSM7sLcf4c=" alt="Joins" style={{ width: "80px", height: "auto", opacity: "0.9" }} />
                            </div>
                            <h3 className="fw-bold mb-1">12</h3>
                            <p className="text-muted small mb-0">New Joins</p>
                        </div>
                    </div>

                    <div className="col-12 mt-4">
                        <div className="ad-card p-4 overflow-hidden" style={{ background: "rgba(49, 183, 28, 0.05)", border: "1px dashed #31b71c" }}>
                            {/* <div className="text-center mb-4">
                                <img src="https://media.istockphoto.com/id/1396113348/vector/3d-web-vector-illustrations-online-concept-computer-with-open-pages-e-learning-design-over.jpg?s=612x612&w=0&k=20&c=UuGSBpij7N-sZLRU-akf97-k7EexWmKgv15EgeApRy0=" alt="Quick Actions" style={{ width: "100%", maxWidth: "150px", height: "auto", filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.1))" }} />
                            </div> */}
                            <div className="text-center">
                                <h5 className="fw-bold mb-3">Quick Actions</h5>
                                <div className="d-flex gap-2 justify-content-center flex-wrap">
                                    <button className="btn btn-success px-4 py-2" style={{ borderRadius: "10px", background: "#31b71c" }} onClick={handleManageStudents}>Manage Students</button>
                                    <button className="btn btn-outline-success px-4 py-2" style={{ borderRadius: "10px", color: "#31b71c", borderColor: "#31b71c" }} onClick={handleManageCourses}>Update Courses</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Adhome;