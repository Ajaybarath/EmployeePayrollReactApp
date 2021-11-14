import React, { Component } from 'react'

class Display extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <div>
                {this.props.employeeArray.map((employee, ind) => {
                    { console.log(employee.name) }
                    <tr>
                        <td>
                            <img src="../assets/profile-images/Ellipse -2.png" alt="" className="profile" />
                        </td>
                        <td>{employee.name}</td>
                        <td>{this.state.emp}</td>
                        {/* {employee.department.map(dept => {
                                <td>
                                <div className="dept-label">{dept}</div>
                            </td>
                            })} */}

                        <td>{employee.salary}</td>
                        <td>{employee.startDate}</td>
                        <td className="action-content">
                            <img src="../assets/icons/delete-black-18dp.svg" id="1" onClick="remove(this)" alt="delete" />
                            <img src="../assets/icons/create-black-18dp.svg" id="2" onClick="update(this)" alt="delete" />
                        </td>
                    </tr>
                })}
            </div>
        )
    }
}

export default Display;