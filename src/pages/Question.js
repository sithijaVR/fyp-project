import React, { useState } from 'react';
import { database} from './FirebaseConfig';
import './Question.css'

function MultipleChoiceQuestions() {
   
    const [userData, setUserData] = useState({
        email: '',
        answer1: '',
        answer2: '',
        
    });

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(userData)
        database.ref('users').push(userData);
        
    
        setUserData({
            email: '',
            answer1: '',
            answer2: '',
          
        });
    };

    return (
        <div className="multiple-choice-questions">
            <h2>"Empowering Inquiry, One Question at a Time."</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={userData.email} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="answer1">Question 1:cbdsjcwdkcwcj:</label>
                    <select id="answer1" name="answer1" value={userData.answer1} onChange={handleInputChange} required>
                        <option value="">Select answer</option>
                        <option value="A">Option A</option>
                        <option value="B">Option B</option>
                        <option value="C">Option C</option>
                        
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="answer2">Question 2:jhcbwjekcwn:</label>
                    <select id="answer2" name="answer2" value={userData.answer2} onChange={handleInputChange} required>
                        <option value="">Select answer</option>
                        <option value="A">Option A</option>
                        <option value="B">Option B</option>
                        <option value="C">Option C</option>
                        
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="answer3">Question 3:jhcbwjekcwn:</label>
                    <select id="answer3" name="answer3" value={userData.answer3} onChange={handleInputChange} required>
                        <option value="">Select answer</option>
                        <option value="A">Option A</option>
                        <option value="B">Option B</option>
                        <option value="C">Option C</option>
                        
                    </select>
                </div>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MultipleChoiceQuestions;