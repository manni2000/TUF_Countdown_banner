import React, { useState, useEffect } from 'react';
import { getBanner, updateBanner } from '../services/api';

const Dashboard = ({ onBannerUpdate }) => {
  const [description, setDescription] = useState('');
  const [timer, setTimer] = useState(10);
  const [link, setLink] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fetchBanner = async () => {
      const data = await getBanner();
      setDescription(data.description);
      setTimer(data.timer);
      setLink(data.link);
      setIsVisible(data.isVisible);
    };

    fetchBanner();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { description, timer, link, isVisible };

    try {
      await updateBanner(data);

      if (onBannerUpdate) {
        const updatedBanner = await getBanner();
        onBannerUpdate(updatedBanner);
      }
    } catch (error) {
      console.error('Error updating banner:', error);
      alert(`Failed to update banner: ${error.response?.data?.error || 'An unexpected error occurred'}`);
    }
  };

  return (
    <div className="dashboard">
      <h2>Banner Settings</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Timer (seconds):
          <input
            type="number"
            value={timer}
            onChange={(e) => setTimer(e.target.value)}
          />
        </label>
        <label>
          Link:
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </label>
        <label>
          Visible:
          <input
            type="checkbox"
            checked={isVisible}
            onChange={(e) => setIsVisible(e.target.checked)}
          />
        </label>
        <button type="submit">Update Banner</button>
      </form>
    </div>
  );
};

export default Dashboard;
