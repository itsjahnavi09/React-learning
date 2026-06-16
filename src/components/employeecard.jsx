function EmployeeCard(props) {
  return (
    <div className="employee-card">
      <h2>{props.name}</h2>
      <p>Designation: {props.designation}</p>
      <p>Department: {props.department}</p>
    </div>
  );
}

export default EmployeeCard;