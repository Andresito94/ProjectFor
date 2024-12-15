import { useLocation, Link } from "react-router-dom";

export default function HomePage() {
  const location = useLocation();
  console.log(location);
  return (
    <div 
    style={{
      border: "4px solid white",
      borderRadius: "10px",
      padding: "20px",
      display: "inline-block",
      color: "white",
    }}
    >
      <h1>Welcome To Group 4's Final Project!</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/create-user">Create User</Link>
      {/* The main differnce between an anchor and Link is anchor will
      cause a full page reload while Link will work as inteneded for a 
      Single Page App where the componant is loaded on the same page. 
      Beacuase of this you can preserve the state between page and access
      them.*/}
    </div>
  );
}
