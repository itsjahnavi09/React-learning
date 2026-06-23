import { useParams } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();

  const students = {
    1: "Jahnavi",
    2: "Rahul",
    3: "Priya",
  };

  return (
    <div className="page">
      <h1>Student Details Page</h1>
      <h2>Student ID: {id}</h2>
      <h3>Name: {students[id] || "Student Not Found"}</h3>
    </div>
  );
}

export default StudentDetails;