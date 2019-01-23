const url = 'http://localhost:3000';
export default {
    addEmployee(data) {
        return fetch(`${url}/employees`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.json());
    },
    addCompany(data) {
        return fetch(`${url}/companies`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.json());
    },
    addCredit(data) {
        return fetch(`${url}/credits`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(data => data.json());
    }
}