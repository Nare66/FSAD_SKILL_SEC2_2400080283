import React, { useState } from "react";
import "./StudentManager.css";

function StudentManager() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ram", course: "CSE" },
    { id: 2, name: "Sita", course: "ECE" },
    { id: 3, name: "Ravi", course: "IT" },
    { id: 4, name: "Anu", course: "EEE" },
    { id: 5, name: "Kiran", course: "MECH" }
  ]);

  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    course: ""
  });

  const addStudent = () => {
    if (!newStudent.id || !newStudent.name || !newStudent.course) {
      alert("Fill all fields");
      return;
    }

    setStudents([...students, newStudent]);
    setNewStudent({ id: "", name: "", course: "" });
  };

  const deleteStudent = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Manager</h2>

      <input
        type="text"
        placeholder="ID"
        value={newStudent.id}
        onChange={(e) =>
          setNewStudent({ ...newStudent, id: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Name"
        value={newStudent.name}
        onChange={(e) =>
          setNewStudent({ ...newStudent, name: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Course"
        value={newStudent.course}
        onChange={(e) =>
          setNewStudent({ ...newStudent, course: e.target.value })
        }
      />

      <br /><br />

      <button onClick={addStudent}>Add Student</button>

      {students.length === 0 ? (
        <p>No students available</p>
      ) : (
        <table border="1" style={{ marginTop: "10px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu, index) => (
              <tr key={index}>
                <td>{stu.id}</td>
                <td>{stu.name}</td>
                <td>{stu.course}</td>
                <td>
                  <button onClick={() => deleteStudent(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentManager;