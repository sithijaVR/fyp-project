
import React, { useState } from 'react';

function Sensors(){
    const [answers, setAnswers] = useState({
        question1: '',
        question2: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnswers(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className="tutorial-container">
            <h1>Sensor Tutorial</h1>
            <div className="content">
                <h2>Introduction to Sensors</h2>
                <p>Here is some introductory text about sensors...</p>
                
                <p>Description of Sensor Image 1</p>
                {/* Add more content and images as needed */}
            </div>

            <div className="questions">
                <h2>Text Answer Questions</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="question1">Question 1:</label>
                    <input
                        type="text"
                        id="question1"
                        name="question1"
                        value={answers.question1}
                        onChange={handleChange}
                    />

                    <label htmlFor="question2">Question 2:</label>
                    <input
                        type="text"
                        id="question2"
                        name="question2"
                        value={answers.question2}
                        onChange={handleChange}
                    />
                    
                    {/* Add more questions as needed */}

                    <input type="submit" value="Submit Answers" />
                </form>
                {submitted && (
                    <div className="answers">
                        <h2>Correct Answers</h2>
                        <p>Question 1: Correct Answer</p>
                        <p>Question 2: Correct Answer</p>
                        {/* Add more correct answers as needed */}
                    </div>
                )}
            </div>
        </div>
    );
}
export default Sensors;