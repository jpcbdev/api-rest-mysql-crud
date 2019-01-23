const url = 'http://localhost:3000';

export default {
    deleteEmployee(id) {
        return fetch(`${url}/employees/${id}`, {
                method: 'DELETE'
            })
            .then(data => data.json());
    },
    deleteCompany(id) {
        return fetch(`${url}/companies/${id}`, {
                method: 'DELETE'
            })
            .then(data => data.json());
    }
}