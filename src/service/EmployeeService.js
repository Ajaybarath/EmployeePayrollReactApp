import axios from 'axios';
import React from 'react';

class EmployeeService extends React.Component {
    baseUrl = `http://localhost:8080/employeepayrollservice/`;

    addEmployee = (data) => {
        console.log(data)
        return axios.post(this.baseUrl + 'create', data)
    }

    getEmployee = () => {
        console.log("getting data");
        return axios.get(this.baseUrl + 'get')
    }

    updateEmployee = (data) => {
        console.log(data);
        return axios.put(this.baseUrl , data)
    }

    deleteEmployee = (data) => {
        console.log(data);
        return axios.delete(this.baseUrl + 'delete/' + data)
    }
 }

export default new EmployeeService();