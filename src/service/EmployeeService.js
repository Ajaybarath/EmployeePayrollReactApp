import axios from 'axios';
import React from 'react';

class EmployeeService extends React.Component {
    baseUrl = `http://localhost:3000/`;

    addEmployee = (data) => {
        console.log(data)
        return axios.post(this.baseUrl + 'employee', data)
    }

    getEmployee = () => {
        console.log("getting data");
        return axios.get(this.baseUrl + 'employee')
    }
 }

export default new EmployeeService();