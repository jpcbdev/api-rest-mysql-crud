const url = 'http://localhost:3000';
export default {
    updateEmployee(id, data) {
        return fetch(`${url}/employees/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.json());
    }
}