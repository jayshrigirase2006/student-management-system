import DashboardLayout from "../layouts/DashboardLayout";

function Reports() {
  return (
    <DashboardLayout>
      <div>

        <h1 className="text-4xl font-bold mb-8">
          Reports & Analytics
        </h1>

        <div className="grid grid-cols-4 gap-6">

          <div className="bg-blue-500 text-white p-6 rounded-xl">
            <h3>Total Students</h3>
            <p className="text-4xl font-bold mt-2">120</p>
          </div>

          <div className="bg-green-500 text-white p-6 rounded-xl">
            <h3>Total Courses</h3>
            <p className="text-4xl font-bold mt-2">8</p>
          </div>

          <div className="bg-purple-500 text-white p-6 rounded-xl">
            <h3>Attendance</h3>
            <p className="text-4xl font-bold mt-2">85%</p>
          </div>

          <div className="bg-orange-500 text-white p-6 rounded-xl">
            <h3>Pass Rate</h3>
            <p className="text-4xl font-bold mt-2">92%</p>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Reports;