import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AlarmsContainer from './containers/AlarmsContainer';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CategoryPage from './pages/CategoryPage';
import { AuthProvider } from './contexts/AuthContext';
import { ContentProvider } from './contexts/ContentContext';
import { CartProvider } from './contexts/CartContext';
import AuthPage from './pages/AuthPage';
import AdminDashboard from './pages/AdminDashboard';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <AuthProvider>
      <ContentProvider>
        <CartProvider>
          <Router
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
          >
            <MainLayout>
              <ToastContainer />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/alarms" element={<AlarmsContainer />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<AuthPage />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/category/:category" element={<CategoryPage />} />
              </Routes>
              <FloatingButtons />
            </MainLayout>
          </Router>
        </CartProvider>
      </ContentProvider>
    </AuthProvider>
  );
}

export default App;
