import DashboardLayout from "../layouts/DashboardLayout";

function Settings() {
  const admin = JSON.parse(
    localStorage.getItem("admin")
  );

  return (
    <DashboardLayout>
      <div style={{ padding: "20px" }}>
        <h1>Settings</h1>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "400px",
          }}
        >
          <h3>Name</h3>
          <p>{admin?.name}</p>

          <h3>Email</h3>
          <p>{admin?.email}</p>

          <h3>Password</h3>
          <p>{admin?.password}</p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Settings;