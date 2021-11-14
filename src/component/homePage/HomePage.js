import React, { Component } from 'react'
import EmployeeService from '../../service/EmployeeService'

import '../homePage/HomePage.css'
import delBtn from'../assets/icons/delete-black-18dp.svg';
import editBtn from '../assets/icons/create-black-18dp.svg';


class HomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employees: [],
        }
    }

    componentDidMount() {
        EmployeeService.getEmployee()
            .then(res => {
                console.log(res.data);
                this.setState({ employees: res.data })
            })
    }

    render() {
        return (
            <div>
                <div className="main-content">
                    <div className="header-content">
                        <div className="emp-detail-text">
                            Employee Detail <div className="emp-content"></div>
                        </div>
                        <a href="/form" className="add-button">
                            <img src="../assets/icons/add-24px.svg" alt="" />Add User</a>
                    </div>

                    <table className="table-main" id="display">

                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>Start Date</th>
                            <th>Actions</th>
                        </tr>

                        {this.state.employees.map((employee) => {
                            return (<tr>
                                <td>
                                    <img src="../assets/profile-images/Ellipse -2.png" alt="" className="profile" />
                                </td>
                                <td>{employee.name}</td>
                                <td>{employee.gender}</td>
                                {/* {employee.department.map(dept => {
                                <td>
                                <div className="dept-label">{dept}</div>
                            </td>
                            })} */}
                                <td>
                                    <div className="dept-label">{employee.department}</div>
                                </td>
                                <td>{employee.salary}</td>
                                <td>{employee.startDate}</td>
                                <td className="action-content">
                                <img src={delBtn} id="1" onClick="remove(this)" alt="delete" />
                                <img src={editBtn} id="2" onClick="update(this)" alt="delete" />
                                </td>
                            </tr>)
                        })}
                        <tr>
                            <td>
                                <img src="../assets/profile-images/Ellipse -2.png" alt="" className="profile" />
                            </td>
                            <td>Ajay Barath</td>
                            <td>Male</td>
                            <td>
                                <div className="dept-label">HR</div>
                                <div className="dept-label">Finance</div>
                            </td>
                            <td>3000000</td>
                            <td>1 Nov 2020</td>
                            <td className="action-content">
                                <img src={delBtn} id="1" onClick="remove(this)" alt="delete" />
                                <img src={editBtn} id="2" onClick="update(this)" alt="delete" />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default HomePage
