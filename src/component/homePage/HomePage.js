import React, { Component } from 'react'
import EmployeeService from '../../service/EmployeeService'

import '../homePage/HomePage.css'
import delBtn from '../assets/icons/delete-black-18dp.svg';
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
                        <tbody>
                            {this.state.employees.map((employee) => {
                                return (<tr key={employee.id}>
                                    <td>
                                        <img src={employee.profileUrl} alt="" className="profile" />
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
                                        <img src={delBtn} id="1" onClick="remove(this)" alt="delete" />
                                        <img src={editBtn} id="2" onClick="update(this)" alt="delete" />
                                    </td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default HomePage
