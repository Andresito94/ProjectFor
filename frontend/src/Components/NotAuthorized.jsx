import { Link } from "react-router-dom";
export default function NotAuthorized() {
  return (
    <div style={{
      border: "4px solid white",
      borderRadius: "10px",
      padding: "20px",
      display: "inline-block",
      color: "white",
    }}>
      <h1>You are not authorized to view this page</h1>
      <p>
        Please <Link to="/login">login</Link> first
      </p>
    </div>
  );
}
