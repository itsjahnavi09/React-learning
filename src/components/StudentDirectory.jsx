import StudentCard from "./StudentCard";
import SearchBar from"./SearchBar";
import {useState} from "react";


function StudentDirectory() {
  const students = [
    { id: 1, name: "Rahul", course: "MERN Stack", city: "Dehradun", email: "rahul@gmail.com" },
    { id: 2, name: "Sen", course: "React", city: "Delhi", email: "aman@gmail.com" },
    { id: 3, name: "JJ", course: "Node.js", city: "Mumbai", email: "priya@gmail.com" },
    { id: 4, name: "Neha", course: "React", city: "Pune", email: "neha@gmail.com" },
    { id: 5, name: "Swara", course: "MERN Stack", city: "Jaipur", email: "rohit@gmail.com" },
    { id: 6, name: "Karan", course: "Node.js", city: "Lucknow", email: "karan@gmail.com" },
    { id: 7, name: "Anjali", course: "React", city: "Chandigarh", email: "anjali@gmail.com" },
    { id: 8, name: "KD", course: "MERN Stack", city: "Noida", email: "vikas@gmail.com" },
    { id: 9, name: "AM", course: "Node.js", city: "Indore", email: "simran@gmail.com" },
    { id: 10, name: "Riya", course: "React", city: "Bhopal", email: "riya@gmail.com" },
  ];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || student.course === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />

      <div className="buttons">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("MERN Stack")}>MERN Stack</button>
        <button onClick={() => setFilter("React")}>React</button>
        <button onClick={() => setFilter("Node.js")}>Node.js</button>
      </div>

      <div className="container">
        {filteredStudents.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            city={student.city}
            email={student.email}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentDirectory;
