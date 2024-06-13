const roleService = {
    getAllRoles() {
        const token = localStorage.getItem('accessToken');

        return fetch('http://localhost:8082/api/v1/roles', {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados');
              }            
              return response.json();
        }).then(data => {
            return data;
        }).catch(error => {
            console.error('Erro:', error);
            throw error;
          });
    },

    getRolesForClientes() {
        const token = localStorage.getItem('accessToken');

        return fetch('http://localhost:8082/api/v1/roles/get-roles-for-clientes', {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados');
              }
              return response.json();
        }).then(data => {
            return data.content;
        }).catch(error => {
            console.error('Erro:', error);
            throw error;
          });
    }
};

export default roleService;