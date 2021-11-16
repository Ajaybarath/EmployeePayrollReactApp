import React, { Component, } from 'react'
import EmployeeService from '../../service/EmployeeService'
import '../homePage/HomePage.css';
import { Link } from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';
import delBtn from '../assets/icons/delete-black-18dp.svg';
import editBtn from '../assets/icons/create-black-18dp.svg';
import addBtn from '../assets/icons/add-24px.svg';
// import '../assets/profile-images/Ellipse 1.png';
// import * as Images from '../assets/profile-images/';

class HomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employees: [],
            editStatus: ''
        }

        this.onEditClick = this.onEditClick.bind(this);
        this.OnDelete = this.OnDelete.bind(this);
    }


    onEditClick(event) {
        // history = useHistory();

        // history.push('/add');
        // const navigate = useNavigate();
        // navigate('/home')
        // console.log(this.props)
        // this.props.navigation.navigate('/form', event.target.id)


    }

    OnDelete(event) {
        EmployeeService.deleteEmployee(event.target.id)
            .then(res => {
                EmployeeService.getEmployee()
                    .then(res => {
                        console.log(res.data.data);
                        this.setState({ employees: res.data.data })
                    })
            })
    }

    componentDidMount() {
        EmployeeService.getEmployee()
            .then(res => {
                console.log(res.data.data);
                this.setState({ employees: res.data.data })
            })
    }

    render() {
        // if (this.state.toDashboard) {
        //     return <Redirect to='/dashboard' />
        // }
        return (
            <div>
                <div className="main-content">
                    <div className="header-content">
                        <div className="emp-detail-text">
                            Employee Detail <div className="emp-content"></div>
                        </div>
                        <a href="/form" className="add-button">
                            <img src={addBtn} alt="" />Add User</a>
                    </div>

                    <table className="table-main" id="display">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Department</th>
                                <th>Salary</th>
                                <th>Start Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        {this.state.employees.map((employee) => {
                            return (<tr key={employee.id}>
                                {/* {this.imagePath = require(employee.profileUrl+'')} */}
                                <td>
                                    <img src={employee.profileUrl} alt="" className="profile" />
                                    {/* <Image style={{height: 50, width: 50}} source={this.imagePath} />
                                       {console.log(this.imagePath)} */}
                                </td>
                                <td>{employee.name}</td>
                                <td>{employee.gender}</td>
                                <td>

                                    {employee.department.map(dept => {

                                        return <div className="dept-label" key={dept}>{dept}</div>
                                    })}
                                </td>
                                <td>{employee.salary}</td>
                                <td>{employee.startDate}</td>
                                <td className="action-content">
                                    <img src={delBtn} id={employee.id} onClick={this.OnDelete} alt="delete" />
                                    <Link to='/form/' params={{employee:employee}} >
                                        <img src={editBtn} id={employee.id} alt="delete" />
                                    </Link>
                                    {/* <img src={editBtn} id={employee.id} onClick={this.onEditClick} alt="delete" /> */}
                                </td>
                            </tr>)
                        })}
                    </table>
                </div>
            </div>
        )
    }
}

export default HomePage
