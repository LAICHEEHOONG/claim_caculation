import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AlertSnackbar from "./components/AlertSnackbar";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  generateWebPassword,
  generateClientPassword,
} from "./features/login/loginSlice";

function App() {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const handle = {
    generateWebPassword: () => {
      dispatch(generateWebPassword());
    },
    generateClientPassword: (password) => {
      dispatch(generateClientPassword(password));
    },
  };

  useEffect(() => {
    handle.generateWebPassword();
  }, []);

  return (
    <>
      {login.login ? (
        <div className="app-container">
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/claim_caculation" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/claim_caculation/about" element={<AboutPage />} />
          </Routes>
        </div>
      ) : (
        <LoginPage />
      )}

      <div className="alert-container">
        <AlertSnackbar />
      </div>
    </>
  );
}

export default App;
