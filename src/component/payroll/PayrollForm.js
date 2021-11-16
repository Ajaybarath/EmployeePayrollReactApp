import React from 'react';
import '../payroll/payrollForm.css'
import EmployeeService from '../../service/EmployeeService';
import axios from 'axios';
import pimg1 from '../assets/profile-images/Ellipse -3.png';
import pimg2 from '../assets/profile-images/Ellipse 1.png';
import pimg3 from '../assets/profile-images/Ellipse -8.png';
import pimg4 from '../assets/profile-images/Ellipse -7.png';
// import { useParams } from 'react-router-dom';



class PayrollForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            name: '',
            salary: '',
            profieImage: '',
            gender: '',
            department: [],
            startDate: '',
            note: '',
            date: '1',
            month: 'January',
            year: '2021',
            hr: 'false',
            sales: 'false',
            finance: 'false',
            engineering: 'false',
            others: 'false',
            nameError: '',
        }



        this.baseUrl = 'http://localhost:3000/employee';


        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
        // this.onChecked = this.onChecked.bind(this);
        this.onSalaryChange = this.onSalaryChange.bind(this);
        this.onReset = this.onReset.bind(this);

    }




    componentDidMount() {
        // const queryParams = new URLSearchParams(window.location.search);
        // const id = queryParams.get('id');
        // console.log(this.props)
        // console.log(this.props.employee)

    }

    onReset() {
        this.setState({
            name: '',
            salary: '',
            profieImage: '',
            gender: '',
            department: new Map(),
            dept: new Map(),
            startDate: '',
            note: '',
            date: '1',
            month: 'January',
            year: '2021',
            hr: 'false',
            sales: 'false',
            finance: 'false',
            engineering: 'false',
            others: 'false',
            nameError: '',
        })
    }

    handleChange(event) {

        if (event.target.name === 'name') {
            let name = RegExp('^[A-Z]{1}[a-z]{3,}$')
            if (name.test(event.target.value))
                this.setState({ nameError: "" })
            else this.setState({ nameError: "Invalid name" })
        }

        if (event.target.name === 'department') {
            var isChecked = event.target.checked;
            var item = event.target.value;

            console.log(isChecked);
            if (isChecked == true) {
                var upDept = this.state.department;
                upDept.push(event.target.value)
                console.log(upDept)
                this.setState({ dept: upDept })
            }
            else {
                var upDept = this.state.dept;
                upDept = upDept.filter(item => item !== event.target.value)
                console.log(upDept)
                this.setState({ dept: upDept })
            }

            // this.setState(prevState => ({ department: prevState.department.set(item, isChecked) }));
        }
        else {
            this.setState({ [event.target.name]: event.target.value });
            console.log(event.target.value);
            this.setState({ startDate: this.state.date + " " + this.state.month + " " + this.state.year });

            console.log(this.state.startDate)
        }


    }

    onSalaryChange(event) {
        this.setState({ salary: event.target.value });
        console.log(event.target.value)
    }

    save(event) {
        event.preventDefault();
        console.log("save");

        if (this.state.nameError === '') {

        }
        else {
            alert('Invalid name')
            return;
        }

        this.setState({ startDate: this.state.date + " " + this.state.month + " " + this.state.year });

        let object = {
            name: this.state.name,
            salary: this.state.salary,
            profilePic: this.state.profieImage,
            gender: this.state.gender,
            department: this.state.dept,
            startDate: this.state.startDate,
            note: this.state.note,
        }

        console.log(object);

        // axios.post(this.baseUrl, object)

        EmployeeService.addEmployee(object).then(data => {
            alert(object)
            alert(" data added successfully")
            console.log("data added");
        }).catch(err => {
            console.log('err while adding');
        })
    }

    render() {


        return (<>

            {console.log(this.props) }
            <div className="form-content">
                <form action="" className="form" onSubmit={this.save}>
                    <div className="form-head">
                        Employee Payroll form
                    </div>
                    <div className="row-content">
                        <label className="label text">Name</label>
                        <input type="text" className="input" id="name" name="name" placeholder="Your name.." required value={this.state.name} onChange={this.handleChange} />
                        <error-output className="text-error" >{this.state.nameError}</error-output>
                    </div>
                    <div className="row-content">
                        <label className="label text">Profile image</label>
                        <div className="profile-radio-content">
                            <label>
                                <input type="radio" id="profile1" name="profieImage" required onChange={this.handleChange}></input>
                                <img src={pimg1} alt="" id="image1" className="profile" />
                            </label>
                            <label>
                                <input type="radio" id="profile2" name="profieImage" value="../assets/profile-images/Ellipse 1.png" onChange={this.handleChange} />
                                <img src={pimg2} alt="" id="image2" className="profile" />
                            </label>
                            <label>
                                <input type="radio" id="profile3" name="profieImage"
                                    value="../assets/profile-images/Ellipse -8.png" onChange={this.handleChange} />
                                <img src={pimg3} alt="" id="image3" className="profile" />
                            </label>
                            <label>
                                <input type="radio" id="profile4" name="profieImage"
                                    value="../assets/profile-images/Ellipse -7.png" onChange={this.handleChange} />
                                <img src={pimg4} alt="" id="image4" className="profile" />
                            </label>
                        </div>
                    </div>
                    <div className="row-content">
                        <label className="label text">Gender</label>
                        <div>
                            <input type="radio" id="male" name="gender" value="male" required onChange={this.handleChange} />
                            <label className="text">Male</label>
                            <input type="radio" id="female" name="gender" value="female" onChange={this.handleChange} />
                            <label className="text">Female</label>
                        </div>
                    </div>
                    <div className="row-content">
                        <label className="label text">Department</label>
                        <div className="department-checkbox-content">
                            <input type="checkbox" id="hr" name="department" value="HR" className="group-required" onChange={this.handleChange} />
                            <label className="text">HR</label>
                            <input type="checkbox" className="checkbox" id="sales" name="department" value="Sales" onChange={this.handleChange} />
                            <label className="text">Sales</label>
                            <input type="checkbox" className="checkbox" id="finance" name="department" value="Finance" onChange={this.handleChange} />
                            <label className="text">Finance</label>
                            <input type="checkbox" className="checkbox" id="engineer" name="department" value="Engineer" onChange={this.handleChange} />
                            <label className="text">Engineer</label>
                            <input type="checkbox" className="checkbox" id="others" name="department" value="Others" onChange={this.handleChange} />
                            <label className="text">Others</label>
                        </div>
                    </div>
                    <div className="row-content">
                        <label className="label text">Choose your salary</label>
                        <input type="range" className="input" name="salary" id="salary" min="300000" max="500000" step="100"
                            value={this.state.salary} onChange={this.onSalaryChange} />
                        <output className="salary-output text">{this.state.salary}</output>
                    </div>
                    <div className="row-content">
                        <label className="label text">Start date</label>
                        <div className="date-content">
                            <select name="date" id="day" onChange={this.handleChange}>
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
                            <select name="month" id="month" onChange={this.handleChange}>
                                <option value="Jan">January</option>
                                <option value="Feb">Feburary</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="Nov">November</option>
                                <option value="December">December</option>
                            </select>
                            <select name="year" id="year" onChange={this.handleChange}>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                            </select>
                        </div>
                        <error-output className="date-error" ></error-output>
                    </div>
                    <div className="row-content">
                        <label className="label text">Notes</label>
                        <textarea name="note" id="note" className="notes" placeholder="" style={{ height: 100 }} onChange={this.handleChange}></textarea>
                    </div>
                    <div className="buttonParent">
                        <a href="/" className="resetButton button cancelButton"> Cancel</a>
                        <div className="submit-reset">
                            <button className="button submitButton" id="submitButton"
                                type="submit">Submit</button>
                            <button className="button resetButton" type="reset" onClick={this.onReset} >Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </>);
    }

}

export default PayrollForm;
