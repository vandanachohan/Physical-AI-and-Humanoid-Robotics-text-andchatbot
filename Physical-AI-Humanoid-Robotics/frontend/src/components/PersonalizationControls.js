import React, { useState, useContext } from 'react';
import { UserContext } from '../../src/contexts/UserContext';

const PersonalizationControls = () => {
  const { user, updateUserBackground } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    software: user?.softwareBackground || '',
    hardware: user?.hardwareBackground || '',
    experienceLevel: user?.experienceLevel || ''
  });

  const handleEditClick = () => {
    if (user) {
      setIsEditing(true);
      setFormData({
        software: user.softwareBackground || '',
        hardware: user.hardwareBackground || '',
        experienceLevel: user.experienceLevel || ''
      });
    } else {
      alert('Please sign in to personalize your learning experience.');
    }
  };

  const handleSave = async () => {
    if (user) {
      const result = await updateUserBackground(formData);
      if (result.success) {
        alert('Your preferences have been saved!');
        setIsEditing(false);
      } else {
        alert('Error saving preferences: ' + result.error);
      }
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form to saved values
    setFormData({
      software: user?.softwareBackground || '',
      hardware: user?.hardwareBackground || '',
      experienceLevel: user?.experienceLevel || ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!user) {
    return (
      <div className="personalization-controls bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Sign in to personalize your learning experience!</strong> Tell us about your background to get tailored explanations.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="personalization-controls bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-blue-800">Personalize Your Learning Experience</h3>
          <p className="text-sm text-blue-600 mt-1">
            Adjust content based on your background and experience level.
          </p>
          
          {isEditing ? (
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor="software" className="block text-sm font-medium text-gray-700 mb-1">
                  Software Background
                </label>
                <textarea
                  id="software"
                  name="software"
                  value={formData.software}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  rows="3"
                  placeholder="Describe your software development experience..."
                />
              </div>
              
              <div>
                <label htmlFor="hardware" className="block text-sm font-medium text-gray-700 mb-1">
                  Hardware Background
                </label>
                <textarea
                  id="hardware"
                  name="hardware"
                  value={formData.hardware}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  rows="3"
                  placeholder="Describe your hardware/electronics experience..."
                />
              </div>
              
              <div>
                <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700 mb-1">
                  Experience Level
                </label>
                <select
                  id="experienceLevel"
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
              
              <div className="flex space-x-3 pt-2">
                <button
                  type="button"
                  onClick={handleSave}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save Preferences
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Software Background</p>
                  <p className="text-sm text-gray-900">{user.softwareBackground || 'Not specified'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Hardware Background</p>
                  <p className="text-sm text-gray-900">{user.hardwareBackground || 'Not specified'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Experience Level</p>
                  <p className="text-sm text-gray-900 capitalize">{user.experienceLevel || 'Not specified'}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleEditClick}
                className="mt-3 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Edit Preferences
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalizationControls;