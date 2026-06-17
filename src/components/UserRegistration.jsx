import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

function UserRegistration() {
  const emptyForm = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function validateForm() {
    const newErrors = {};

    if (formData.fullName.trim().split(" ").length < 2) {
      newErrors.fullName = "Please enter first and last name";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Registration successful!");
      setFormData(emptyForm);
      setErrors({});
    }
  }

  return (
    <div className="page">
      <form className="form-card" onSubmit={handleSubmit}>
        <h1>Create your account</h1>
        <p className="subtitle">Start your journey with us today.</p>

        <InputField
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />

        <InputField
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <InputField
          label="Password"
          type="password"
          placeholder="Create a password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <InputField
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />

        <div className="terms">
          <input type="checkbox" />
          <span>
            I agree to the <a href="#">Terms & Conditions</a>
          </span>
        </div>

        <Button text="Sign up" />

        <div className="divider">
          <span></span>
          <p>or sign up with</p>
          <span></span>
        </div>

        <div className="social-row">
          <button type="button" className="social-btn">
            G&nbsp;&nbsp;Google
          </button>

          <button type="button" className="social-btn">
            &nbsp;&nbsp;Apple
          </button>
        </div>

        <p className="login-text">
          Already have an account? <a href="#">Log in</a>
        </p>
      </form>
    </div>
  );
}

export default UserRegistration;