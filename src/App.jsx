import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import WhatsAppButton from './Components/WhatsApp/whatsapp';
import Home from './Pages/Home/home';
import About from './Pages/About/about';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <WhatsAppButton />
    </>
  );
};

export default App;
