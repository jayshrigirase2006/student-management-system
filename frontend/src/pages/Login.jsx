
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Login Data:", {
      email,
      password,
    });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          email,
          password,
        }
      );

      console.log("Login Success:", res.data);

      localStorage.setItem(
        "admin",
        JSON.stringify(res.data)
      );

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      console.log("Login Error:", error);

      console.log(
        "Server Response:",
        error.response?.data
      );

      alert("Invalid Email or Password");
    }
  };

 
    return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700">
    <div className="bg-white p-14 rounded-3xl shadow-2xl w-[700px]">

      <div className="text-center mb-9">
        <div className="text-9xl">🎓</div>

        <h1 className="text-5xl font-bold mt-4 text-gray-700">
          Student Management System
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Login
        </p>
      </div>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-4 rounded-lg mb-5 text-lg"
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 p-4 rounded-lg mb-5 text-lg"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg hover:bg-blue-700"
        >
          Login
        </button>

        <p className="text-center mt-5 text-lg">
          New User?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-bold"
          >
            Register Here
          </Link>
        </p>

      </form>
    </div>
  </div>
);
}

export default Login;

