import UserProvider from "./context/UserContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <div className="app">
        <Navbar />
        <Sidebar />
        <Dashboard />
        <Profile />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
