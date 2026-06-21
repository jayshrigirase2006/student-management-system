import DashboardLayout from "../layouts/DashboardLayout";

function AddCourse() {
  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl">

        <h1 className="text-4xl font-bold mb-8">
          Add New Course
        </h1>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Course Name"
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="text"
            placeholder="Teacher Name"
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="number"
            placeholder="Course Duration (Months)"
            className="w-full border p-4 rounded-lg"
          />

          <textarea
            rows="5"
            placeholder="Course Description"
            className="w-full border p-4 rounded-lg"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            Save Course
          </button>

        </form>

      </div>
    </DashboardLayout>
  );
}

export default AddCourse;