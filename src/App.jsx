import { BrowserRouter, Route, Routes, Link, Navigate, Outlet } from "react-router-dom";
import './App.css';

const Dashboard = () => {
  return (
    <h1>Dashboard</h1>
  )
}

const Companies = () => {
  return (
    <h1>Companies</h1>
  )
}

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <p>Try setting token in local storage with name "TOKEN" to demonstrate.</p>
    </>
  )
}

const NotFound = () => {
  return (
    <h1>Not Found</h1>
  )
}
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/companies">Companies</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  )
}
export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={localStorage.getItem('TOKEN') ? <Outlet /> : <Navigate to="/login" />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/companies" element={<Companies />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};