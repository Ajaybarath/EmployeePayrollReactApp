import axios from 'axios';
import React from 'react';

class EmployeeService extends React.Component {
    baseUrl = `http://localhost:3000/employee`;

    addEmployee = (data) => {
        console.log(data)
        return axios.post(this.baseUrl, data)
    }
}

export default new EmployeeService();