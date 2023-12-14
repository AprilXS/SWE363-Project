// Date: 18/09/21
import IndexPage from "./pages/IndexPage";
import { UserContextProvider } from "./UserContext";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import Register from "./pages/Register";
import AccountPage from "./pages/AccountPage";
import BookDetails from "./pages/BookDetails";
import ProgressDetails from "./pages/ProgressDetails";

import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/accountPage/:subpage?" element={<AccountPage />} />
        <Route path="/accountPage/:subpage/:action" element={<AccountPage />} />
        <Route path='/bookDetails/:id' element={<BookDetails />} />
        <Route path='/progressDetails/:id' element={<ProgressDetails />} />
      </Route>
    </Routes>
    </UserContextProvider>
  );
} // end App

export default App; // export App component
