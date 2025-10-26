import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import WhatsAppButton from './components/whatsappButton/whatsapp';
import AlarmsContainer from './containers/AlarmsContainer';
import About from './pages/About';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<AlarmsContainer />} />
          <Route path="/alarms" element={<AlarmsContainer />} />
          <Route path="/about" element={<About />} />
          <WhatsAppButton/>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;