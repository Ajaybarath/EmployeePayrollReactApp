import React from 'react';
import '../component/payrollForm.css'
import img1 from '../assets/profile-images/Ellipse -3.png'


class PayrollForm extends React.Component {

    constructor() {
        super()
        this.state = {

            name: '',
            salary: '',
            profieImage: '',
            gender: '',
            department: '',
            startDate: '',
            note: '',
        }
    }

    render() {
        return (<>

            <div className="form-content">
                <form action="" className="form" onsubmit="save(); return false">
                    <div className="form-head">
                        Employee Payroll form
                    </div>
                    <div className="row-content">
                        <label for="name" className="label text">Name</label>
                        <input type="text" className="input" id="name" name="name" placeholder="Your name.." required />
                        <error-output className="text-error" for="text"></error-output>
                    </div>
                    <div className="row-content">
                        <label for="profile" className="label text">Profile image</label>
                        <div className="profile-radio-content">
                            <label>
                                <input type="radio" id="profile1" name="profile" required ></input>
                                <img src="../assets/profile-images/Ellipse -3.png" alt="" id="image1" className="profile" />
                            </label>
                            <label>
                                <input type="radio" id="profile2" name="profile" value="../assets/profile-images/Ellipse 1.png" />
                                <img src="../assets/profile-images/Ellipse 1.png" alt="" id="image2" className="profile" />
                            </label>
                            <label>
                                <input type="radio" id="profile3" name="profile"
                                    value="../assets/profile-images/Ellipse -8.png" />
                                <img src="../assets/profile-images/Ellipse -8.png" alt="" id="image3" className="profile" />
                            </label>
                            <label>
                                <input type="radio" id="profile4" name="profile"
                                    value="../assets/profile-images/Ellipse -7.png" />
                                <img src="../assets/profile-images/Ellipse -7.png" alt="" id="image4" className="profile" />
                            </label>
                        </div>
                    </div>
                    <div className="row-content">
                        <label for="gender" className="label text">Gender</label>
                        <div>
                            <input type="radio" id="male" name="gender" value="male" required />
                            <label for="male" className="text">Male</label>
                            <input type="radio" id="female" name="gender" value="female" />
                            <label for="female" className="text">Female</label>
                        </div>
                    </div>
                    <div className="row-content">
                        <label for="department" className="label text">Department</label>
                        <div className="department-checkbox-content">
                            <input type="checkbox" id="hr" name="department" value="HR" className="group-required" />
                            <label for="hr" className="text">HR</label>
                            <input type="checkbox" className="checkbox" id="sales" name="department" value="Sales" />
                            <label for="sales" className="text">Sales</label>
                            <input type="checkbox" className="checkbox" id="finance" name="department" value="Finance" />
                            <label for="finance" className="text">Finance</label>
                            <input type="checkbox" className="checkbox" id="engineer" name="department" value="Engineer" />
                            <label for="engineer" className="text">Engineer</label>
                            <input type="checkbox" className="checkbox" id="others" name="department" value="Others" />
                            <label for="others" className="text">Others</label>
                        </div>
                    </div>
                    <div className="row-content">
                        <label for="salary" className="label text">Choose your salary</label>
                        <input type="range" className="input" name="salary" id="salary" min="300000" max="500000" step="100"
                            value="400000" />
                        <output className="salary-output text">400000</output>
                    </div>
                    <div className="row-content">
                        <label for="startDate" className="label text">Start date</label>
                        <div className="date-content">
                            <select name="Day" id="day">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select name="Month" id="month">
                                <option value="January">January</option>
                                <option value="Feburary">Feburary</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                            <select name="Year" id="year">
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                            </select>
                        </div>
                        <error-output className="date-error" for="text"></error-output>
                    </div>
                    <div className="row-content">
                        <label for="notes" className="label text">Notes</label>
                        <textarea name="Notes" id="notes" className="notes" placeholder="" style={{height: 100}}></textarea>
                    </div>
                    <div className="buttonParent">
                        <a href="../html/AppHomePage.html" className="resetButton button cancelButton"> Cancel</a>
                        <div className="submit-reset">
                            <button className="button submitButton" id="submitButton" onclick="save(this); return false"
                                type="submit">Submit</button>
                            <button className="button resetButton" type="reset" onclick="resetForm(); return false">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </>);
    }

}

export default PayrollForm;
