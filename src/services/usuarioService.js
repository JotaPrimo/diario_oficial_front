const usuarioService = {
  getAll(page, size, queryString = '') {
    return fetch(`http://localhost:8082/api/v1/usuarios?page=${page}&size=${size}&${queryString}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar os dados");
        }
        return response.json();
      })
      .then((data) => {        
        return data;
      })
      .catch((error) => {
        throw error;
      });
  },

  search(page, size, queryString = '') {
    return fetch(`http://localhost:8082/api/v1/usuarios?page=${page}&page=${size}&${queryString}&`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar os dados");
        }
        return response.json();
      })
      .then((data) => {
        return data.content;
      })
      .catch((error) => {
        throw error;
      });
  },

  findById(idUsuario) {
    return fetch("http://localhost:8082/api/v1/usuarios/" + idUsuario, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar os dados");
        }
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw error;
      });
  },

  store(usuario) {
    const token = localStorage.getItem("accessToken");

    return fetch("http://localhost:8082/api/v1/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(usuario),
    }).then((response) => {
      if (!response.ok) {
        return response.json().then((err) => {
          return Promise.reject(err);
        });
      }
      return response.json();
    });
  },

  async update(usuario) {
    try {
      console.log("UPDATE");
      console.log(usuario.id);
      const token = localStorage.getItem("accessToken");
      const response = await fetch(
        `http://localhost:8082/api/v1/usuarios/${usuario.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(usuario),
        }
      );

      console.log(response);

      if (!response.ok) {
        const err = await response.json();
        return Promise.reject(err);
      }

      return response.json();
    } catch (err) {
      return Promise.reject(err);
    }
  },

  delete(idUsuario) {
    return fetch("http://localhost:8082/api/v1/usuarios/" + idUsuario, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async ativarUsuario(usuario) {
    try {
      const response = await fetch(
        `http://localhost:8082/api/v1/usuarios/${usuario.id}/ativar`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }

      console.log("ativarUsuario");
      console.log(response);
      return response;
    } catch (err) {
      console.error("ativarUsuario catch");
      console.error(err);
      throw err;
    }
  },

  async inativarUsuario(usuario) {
    try {
      console.log("inativarUsuario");
      console.log(usuario);
      const response = await fetch(
        `http://localhost:8082/api/v1/usuarios/${usuario.id}/inativar`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (!response.ok) {
        console.log("ativarUsuario");
        console.log(response);
        return response;
      }
    } catch (error) {
      console.log("inativarUsuario catch");
      console.log(error);
      return error;
    }
  },

  // utils
  isAtivo(user) {
    return user.statusUsuario === "ATIVO";
  },
};

export default usuarioService;
