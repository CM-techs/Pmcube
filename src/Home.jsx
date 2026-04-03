import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="hero-section">
      <img
        src="https://cdn-blog.superprof.com/blog_in/wp-content/uploads/2020/02/image4-2.png"
        alt="home"
        className="hero-img"
      />
      <div className="card-container2">

  <div className="glass-card2">
    <h1>Learning Today,</h1>
    <h1>Leading Tomorrow</h1>
    
  </div>

   <div className="demo">
   <Link className="dbtt" to="/join">DEMO CLASS</Link>
    
  </div>


</div>
<div className="card-container">

  <div className="glass-card">
    <h3>30 Days Demo Class</h3>
    
  </div>

  <div className="glass-card">
    <h3>Free Consulting</h3>
   
  </div>

  <div className="glass-card">
    <h3>Friendly Environment</h3>
   
  </div>


</div>
    </div>
    
  );
}

export default Home;