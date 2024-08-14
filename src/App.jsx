
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import Preloader from './components/Preloader';
import 'aos/dist/aos.css';

function App() {
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Simulate a loading delay for demonstration purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust this duration as needed

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />; // Show preloader while loading
  }

  return (
    <>
      <Home />
    </>
  );
}

export default App;
