import "./ValoAcad.css";
import React, { useState } from "react";

const ValoAcad = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        agent: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.agent) {
            alert("Please select agent before submitting!");
            return;
        }

        try {
            const response = await fetch("https://danoapi.azurewebsites.net/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            
            })
            if(response.ok){
                const result = await response.json();
                alert("form submitted successfully");
                console.log("API response: ", result);
                console.log("form submission successful");

            } else{
                alert("Error submitting form");
                console.error("API error", response.statusText);
            }


        } catch (error) {
            alert ("An error occurred while submitting the form.")
            console.error("error", error);
        }
    };

   
    return (
        <div className="form-container">
            <div className="form-card">
                <h1> Valorant Academy </h1>
                <p> Fill out the details below if you're interested</p>
                <form onSubmit={handleSubmit}>

                    {/* Name Input Field */}
                    <div className="form-field">
                        <label htmlFor="name"> Name </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Age Input Field */}
                    <div className="form-field">
                        <label htmlFor="age"> Age </label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            placeholder="Enter your age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email Input Field */}
                    <div className="form-field">
                        <label htmlFor="email"> Email </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Agent Input Field */}
                    <div className="form-field">
                        <label htmlFor="agent"> Main Agent </label>
                        <select
                            id="agent"
                            name="agent"
                            value={formData.agent}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>
                                Select your Main Agent
                            </option>
                            <option value="Brimstone">Brimstone</option>
                            <option value="Phoenix">Phoenix</option>
                            <option value="Sage">Sage</option>
                            <option value="Sova">Sova</option>
                            <option value="Viper">Viper</option>
                            <option value="Cypher">Cypher</option>
                            <option value="Reyna">Reyna</option>
                            <option value="Killjoy">Killjoy</option>
                            <option value="Breach">Breach</option>
                            <option value="Omen">Omen</option>
                            <option value="Jett">Jett</option>
                            <option value="Raze">Raze</option>
                            <option value="Skye">Skye</option>
                            <option value="Yoru">Yoru</option>
                            <option value="Astra">Astra</option>
                            <option value="KAY/O">KAY/O</option>
                            <option value="Chamber">Chamber</option>
                            <option value="Neon">Neon</option>
                            <option value="Fade">Fade</option>
                            <option value="Harbor">Harbor</option>
                            <option value="Gekko">Gekko</option>
                            <option value="Deadlock">Deadlock</option>
                            <option value="Iso">Iso</option>
                            <option value="Clove">Clove</option>
                            <option value="Vyse">Vyse</option>
                            <option value="Tejo">Tejo</option>


                        </select>
                    </div>
                    {/* Submit Button */}
                    <button type="submit" className="Submit-btn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );

    }


export default ValoAcad;