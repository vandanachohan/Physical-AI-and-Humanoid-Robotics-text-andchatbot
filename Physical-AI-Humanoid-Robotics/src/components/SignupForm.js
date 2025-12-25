import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';

const SignupForm = () => {
  const { register } = useUser();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    softwareBackground: '',
    hardwareBackground: '',
    experienceLevel: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.softwareBackground) {
      newErrors.softwareBackground = 'Please describe your software background';
    }

    if (!formData.hardwareBackground) {
      newErrors.hardwareBackground = 'Please describe your hardware background';
    }

    if (!formData.experienceLevel) {
      newErrors.experienceLevel = 'Please select your experience level';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        softwareBackground: formData.softwareBackground,
        hardwareBackground: formData.hardwareBackground,
        experienceLevel: formData.experienceLevel
      });

      if (result.success) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          softwareBackground: '',
          hardwareBackground: '',
          experienceLevel: ''
        });

        alert('Account created successfully!');
      } else {
        throw new Error(result.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert(`Registration failed: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-control ${errors.name ? 'error' : ''}`}
            placeholder="Enter your full name"
            disabled={isSubmitting}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-control ${errors.email ? 'error' : ''}`}
            placeholder="Enter your email"
            disabled={isSubmitting}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`form-control ${errors.password ? 'error' : ''}`}
            placeholder="Create a password"
            disabled={isSubmitting}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`form-control ${errors.confirmPassword ? 'error' : ''}`}
            placeholder="Confirm your password"
            disabled={isSubmitting}
          />
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="softwareBackground">Software Background</label>
          <textarea
            id="softwareBackground"
            name="softwareBackground"
            value={formData.softwareBackground}
            onChange={handleChange}
            className={`form-control ${errors.softwareBackground ? 'error' : ''}`}
            placeholder="Describe your software development experience, programming languages, frameworks, etc."
            rows="3"
            disabled={isSubmitting}
          ></textarea>
          {errors.softwareBackground && <span className="error-message">{errors.softwareBackground}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="hardwareBackground">Hardware Background</label>
          <textarea
            id="hardwareBackground"
            name="hardwareBackground"
            value={formData.hardwareBackground}
            onChange={handleChange}
            className={`form-control ${errors.hardwareBackground ? 'error' : ''}`}
            placeholder="Describe your hardware experience, electronics, robotics, etc."
            rows="3"
            disabled={isSubmitting}
          ></textarea>
          {errors.hardwareBackground && <span className="error-message">{errors.hardwareBackground}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="experienceLevel">Experience Level</label>
          <select
            id="experienceLevel"
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            className={`form-control ${errors.experienceLevel ? 'error' : ''}`}
            disabled={isSubmitting}
          >
            <option value="">Select your experience level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="expert">Expert</option>
          </select>
          {errors.experienceLevel && <span className="error-message">{errors.experienceLevel}</span>}
        </div>

        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;