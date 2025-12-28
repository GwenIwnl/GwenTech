
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the logo animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#060010] flex items-center justify-center z-50">
        <div className="loading-logo-container">
          <img 
            src="https://static.readdy.ai/image/8e842a3d425149bd94931785aa07d90d/ca0d5e3536ee96f40ca6889eef75ace8.png" 
            alt="GwenTech Loading" 
            className="w-20 h-20 object-contain animate-spin-slow"
          />
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
