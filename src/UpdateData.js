import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

function UpdateUser() {
    const {student_id} = useParams();
    const [formData, setFormData] = useState({
        student_name: "",
        student_email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8081/student/UpdateData/${student_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Form data Updated successfully!');
            } else {
                alert('Failed to Update form data.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting form data.');
        }
    };
    return(
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <form onSubmit={handleSubmit}>
                    <h2 style={{ textAlign: 'center' }}>Update Form {formData.student_ID}</h2>

                    <div className="mb-3">
                        <label htmlFor="student_name" style={{fontWeight: 'bold'}}>student_name</label>
                        <input type="text" name="student_name" value={formData.student_name} onChange={handleChange} placeholder="Enter your name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="student_email" style={{fontWeight: 'bold'}}>student_email</label>
                        <input type="email" name="student_email" value={formData.student_email} onChange={handleChange} placeholder="Enter your email"/>
                    </div>
                    <button className="btn btn-success w-100">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;

// eslint-disable-next-line
{/* <div className="mb-3">
<label htmlFor="student_ID" style={{fontWeight: 'bold'}}>student_id</label>
<input type="text" name="student_id" value={formData.student_ID} onChange={handleChange} placeholder="Enter your ID"/>
</div> */}