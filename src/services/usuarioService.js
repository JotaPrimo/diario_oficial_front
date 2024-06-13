
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
      throw error;
    });
  },

  findById(idUsuario) {
    return fetch('http://localhost:8082/api/v1/usuarios/' + idUsuario, {
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
      return data;
    }).catch(error => {
      throw error;
    });
  },

  store(usuario) {
    const token = localStorage.getItem('accessToken');  

    return fetch('http://localhost:8082/api/v1/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(usuario)
    }).then(response => {
      if (!response.ok) {
        return response.json().then(err => {
          return Promise.reject(err);
        });
      }
      return response.json();
    })
  },

  update(usuario) {
    const token = localStorage.getItem('accessToken');   

    return fetch('http://localhost:8082/api/v1/usuarios/' + usuario.id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(usuario)
    }).then(response => {
      if (!response.ok) {
        return response.json().then(err => {
          return Promise.reject(err);
        });
      }
      return response.json();
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
  },

  // utils
  isAtivo(user) {
    return user.statusUsuario === 'ATIVO';
  }
};

export default usuarioService;
