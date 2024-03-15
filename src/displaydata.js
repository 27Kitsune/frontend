import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function DisplayData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Make an HTTP GET request to fetch data from your backend endpoint
        axios.get("http://localhost:8081/student/Display")
            .then(response => {
                // Upon successful response, update the state with the fetched data
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []); // Empty dependency array to execute the effect only once
    /* Render each student's information */
    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {data.map(student => (
                    <div key={student.student_ID}>
                        <li>
                        ID: {student.student_ID} -- 
                        Name: {student.student_name} -- 
                        Email: {student.student_email}
                    </li>
                    <Link to={`/student/UpdateData/${student.student_ID}`}>Update</Link> {"  "}
                    <Link to="/Delete">Delete</Link>
                    </div>
                ))}
            </ul>
            <div>
                <h4>Total number of students: {data.length}</h4>
            </div>
        </div>
    );
}

export default DisplayData;