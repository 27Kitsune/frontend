import React, { useEffect, useState } from "react";
import axios from "axios";

function DisplayData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Make an HTTP GET request to fetch data from your backend endpoint
        axios.get("http://localhost:8081/student")
            .then(response => {
                // Upon successful response, update the state with the fetched data
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []); // Empty dependency array to execute the effect only once

    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {data.map(student => (
                    <li key={student.student_id}>
                        {/* Render each student's information */}
                        {student.student_name} - {student.student_email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayData;