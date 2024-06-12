
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

  store(usuario) {
    return fetch('http://localhost:8082/api/v1/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(usuario)
    }).then(res => {
      return res;
    }).catch(() => {
      throw new Error('Erro ao tentar cadastrar usuário');
    })
  },

  delete(idUsuario) {
    return fetch('http://localhost:8082/api/v1/usuarios/' + idUsuario, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(response => {
      return response;
    }).catch(error => {
      console.log(error);
    })
  }

};

export default usuarioService;
