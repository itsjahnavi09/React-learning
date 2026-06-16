import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import StudentCard from "./components/StudentCard";
import ProductCard from "./components/ProductCard";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  const students = [
  {
    name: "Jahnavi",
    course: "MERN Stack",
    city: "Noida",
  },
  {
    name: "Laboni",
    course: "Biotech",
    city: "Bangalore",
  },
  {
    name: "Geetika",
    course: "ECO",
    city: "Delhi",
  },
  {
    name: "Aadya",
    course: "Data Structure",
    city: "Pune",
  },
  {
    name: "Madhvi",
    course: "Medicine",
    city: "Gujarat",
  },
];
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />

      <h1>Student Cards</h1>

<div className="student-container">
  {students.map((student, index) => (
    <StudentCard
      key={index}
      name={student.name}
      course={student.course}
      city={student.city}
    />
  ))}
</div>

<h1>Product Cards</h1>

<div className="product-container">

  <ProductCard
    name="Laptop"
    price="55000"
    category="Electronics"
  />

  <ProductCard
    name="iPhone"
    price="70000"
    category="Mobile"
  />

  <ProductCard
    name="Headphones"
    price="2500"
    category="Accessories"
  />

  <ProductCard
    name="Watch"
    price="3000"
    category="Fashion"
  />

  <ProductCard
    name="Shoes"
    price="2000"
    category="Footwear"
  />

  <ProductCard
    name="Backpack"
    price="1500"
    category="Travel"
  />

</div>

<h1>Employee Cards</h1>

<div className="employee-container">
  <EmployeeCard name="Rahul" designation="Mern Stack Developer" department="IT" />
  <EmployeeCard name="Sen" designation="Mern Stack Developer" department="IT" />
  <EmployeeCard name="Mahendra" designation="Senior Director" department="IT" />
  <EmployeeCard name="KDM" designation="IAS" department="Civil Service" />
  <EmployeeCard name="Karan" designation="Professor" department="Medicine" />
</div>

      <Footer />
    </div>
  );
}

export default App;