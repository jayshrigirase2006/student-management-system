function Navbar() {
  const admin = JSON.parse(
    localStorage.getItem("admin")
  );

  const logout = () => {
    localStorage.removeItem("admin");
    window.location.href = "/";
  };

  return (
    <div className="bg-white shadow-md h-16 flex items-center justify-between px-8">
      <h1 className="text-2xl font-bold">
        Student Management System
      </h1>

      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/40"
          alt=""
          className="rounded-full"
        />

        <span>
          {admin?.name}
        </span>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;