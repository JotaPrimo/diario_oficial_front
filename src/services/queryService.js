const queryService = {
  createQueryString(params) {
    const queryString = new URLSearchParams();
    const hasOwnProperty = Object.prototype.hasOwnProperty;

    for (const key in params) {
      if (hasOwnProperty(key)) {
        const value = params[key];
        if (Array.isArray(value)) {
          // Se o valor for um array, adicione cada item individualmente
          value.forEach((item) => queryString.append(key, item));
        } else if (value !== undefined && value !== null) {
          // Adicione apenas se o valor não for indefinido ou nulo
          queryString.append(key, value);
        }
      }
    }
  },
};

export default queryService;
