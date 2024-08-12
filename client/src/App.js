import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import './App.css';
import { getBanner } from './services/api';

const App = () => {
  const [banner, setBanner] = useState(null);

  const fetchBanner = async () => {
    const data = await getBanner();
    setBanner(data);
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    <div className="App">
      {banner && (
        <Banner
          description={banner.description}
          timeLeft={banner.timer}
          link={banner.link}
          isVisible={banner.isVisible}
        />
      )}
      <Dashboard onBannerUpdate={fetchBanner} />
    </div>
  );
};

export default App;
