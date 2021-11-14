import React, { Component } from 'react'
import EmployeeService from '../../service/EmployeeService'

import '../homePage/HomePage.css'
import Display from './Display'

class HomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employees: [],
            emp: '',
        }
    }

    componentDidMount() {
        EmployeeService.getEmployee()
            .then(res => {
                console.log(res.data);
                this.setState({ employees: res.data })
                this.setState({ emp: res.data[0].name })
                console.log(this.state.emp);
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

                        {this.state.employees.map(employee => {
                            console.log(employee);
                            <td>{employee.name}</td>

                        })}

                        <Display employeeArray={this.state.employees} />

                        <tr>
                            <td>
                                <img src="../assets/profile-images/Ellipse -2.png" alt="" className="profile" />
                            </td>
                            <td>{this.state.emp}</td>
                            <td>Male</td>
                            <td>
                                <div className="dept-label">HR</div>
                                <div className="dept-label">Finance</div>
                            </td>
                            <td>3000000</td>
                            <td>1 Nov 2020</td>
                            <td className="action-content">
                                <img src="../assets/icons/delete-black-18dp.svg" id="1" onClick="remove(this)" alt="delete" />
                                <img src="../assets/icons/create-black-18dp.svg" id="2" onClick="update(this)" alt="delete" />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default HomePage
