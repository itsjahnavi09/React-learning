function StudentCard({ name, course, city, email }) {
  return (
    <div className="card">
      <h3>{name}</h3>

      <p>
        <strong>Course:</strong> {course}
      </p>

      <p>
        <strong>City:</strong> {city}
      </p>

      <p>
        <strong>Email:</strong> {email}
      </p>
    </div>
  );
}

export default StudentCard;