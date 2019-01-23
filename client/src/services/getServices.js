const url = 'http://localhost:3000';

export default {
    getEmployees() {
        return fetch(`${url}/employees`).then(data => data.json());
    },
    getEmployeeById(id) {
        return fetch(`${url}/employees/${id}`).then(data => data.json());
    },
    getCompanies() {
        return fetch(`${url}/companies`).then(data => data.json());
    },
    getCredits() {
        return fetch(`${url}/credits`).then(data => data.json());
    }
}