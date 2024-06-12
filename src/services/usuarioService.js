const usuarioService = {
    getAll() {
        return fetch('http://localhost:8082/api/v1/usuarios', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
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
    },
};

export default usuarioService;
