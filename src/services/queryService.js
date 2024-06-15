const queryService = {
  createQueryString(params) {
    const queryString = new URLSearchParams();

    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        const value = params[key];
        if (Array.isArray(value)) {
          // Se o valor for um array, adicione cada item individualmente
          value.forEach(item => {
            if (item !== undefined && item !== null && item !== '') {
              queryString.append(key, item);
            }
          });
        } else if (value !== undefined && value !== null && value !== '') {
          // Adicione apenas se o valor não for indefinido, nulo ou vazio
          queryString.append(key, value);
        }
      }
    }
  
    return queryString.toString();
  },
};

export default queryService;
