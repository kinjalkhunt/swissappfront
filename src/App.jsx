import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './Component/pages/auth/Login';
import FabricEntryForm from './Component/pages/FabricEntryForm';

function LoginWithRedirect({ onLogin }) {
  const navigate = useNavigate();
  return <Login onLogin={() => { onLogin(); navigate('/fabric-entry'); }} />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginWithRedirect onLogin={() => setIsLoggedIn(true)} />} />
        <Route
          path="/fabric-entry"
          element={isLoggedIn ? <FabricEntryForm /> : <Navigate to="/login" replace />}
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
