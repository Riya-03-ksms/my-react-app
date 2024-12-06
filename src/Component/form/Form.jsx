import { useState } from "react";
import "./Form.css";

export default function Inputuseref() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleClick = (event) => {
        event.preventDefault();
        setSubmitted(true); 
    };

    return (
        <>
            <form>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="xyz@gmail.com"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                />
                <button onClick={handleClick}>Submit</button>
            </form>
            {submitted && (
                <div className="output">
                    <h3>Submitted Data:</h3>
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Password:</strong> {formData.password}</p>
                </div>
            )}
        </>
    );
}
