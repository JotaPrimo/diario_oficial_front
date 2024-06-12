const authService = {
    async login(credentials) {
      try {
        const response = await fetch('http://localhost:8082/api/v1/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        });
  
        if (!response.ok) {
          throw new Error('Falha na autenticação');
        }
  
        const data = await response.json();
        const token = data.token;
        
        localStorage.setItem('accessToken', token);
  
        return token;
      } catch (error) {
        console.error('Erro durante a autenticação:', error);
        throw error;
      }
    },
  };
  
  export default authService;
  