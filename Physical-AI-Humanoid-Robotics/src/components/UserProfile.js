import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';

const UserProfile = () => {
  const { user, updateUserBackground } = useUser();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    software: user?.background?.software || '',
    hardware: user?.background?.hardware || '',
    experienceLevel: user?.background?.experienceLevel || ''
  });

  if (!user) {
    return (
      <div className="user-profile">
        <p>Please sign in to view and update your profile.</p>
      </div>
    );
  }

  const handleEditToggle = () => {
    if (editing) {
      // Save changes
      updateUserBackground(formData);
    }
    setEditing(!editing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="user-profile">
      <h3>User Profile</h3>
      
      {editing ? (
        <div className="profile-edit-form">
          <div className="form-group">
            <label htmlFor="software">Software Background:</label>
            <textarea
              id="software"
              name="software"
              value={formData.software}
              onChange={handleChange}
              className="form-control"
              placeholder="Describe your software development experience, programming languages, frameworks, etc."
              rows="3"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="hardware">Hardware Background:</label>
            <textarea
              id="hardware"
              name="hardware"
              value={formData.hardware}
              onChange={handleChange}
              className="form-control"
              placeholder="Describe your hardware experience, electronics, robotics, etc."
              rows="3"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="experienceLevel">Experience Level:</label>
            <select
              id="experienceLevel"
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              className="form-control"
            >
              <option value="">Select your experience level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
            </select>
          </div>
          
          <button onClick={handleEditToggle} className="btn btn-primary">
            Save Changes
          </button>
        </div>
      ) : (
        <div className="profile-display">
          <p><strong>Name:</strong> {user.name || 'Not provided'}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Software Background:</strong> {user.background?.software || 'Not specified'}</p>
          <p><strong>Hardware Background:</strong> {user.background?.hardware || 'Not specified'}</p>
          <p><strong>Experience Level:</strong> {user.background?.experienceLevel || 'Not specified'}</p>
          
          <button onClick={handleEditToggle} className="btn btn-secondary">
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;