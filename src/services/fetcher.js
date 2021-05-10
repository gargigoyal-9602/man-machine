import axios from 'axios';

function fetcher(serviceType) {
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + serviceType.bearerToken,
  };
  let params = {};

  typeof serviceType.headers === 'object' &&
    (headers = { ...headers, ...serviceType.headers });
  typeof serviceType.params === 'object' &&
    (params = { ...params, ...serviceType.params });

  if (serviceType.method.toLowerCase() === 'post') {
    return axios
      .post(serviceType.url, serviceType.body, { params, headers })
      .then((response) => {
        response.isJson = typeof response.data === 'object';
        return { response };
      })
      .catch((error) => {
        if (error.response) {
          error.response.isJson =
            typeof error.response.data === 'object';
        }
        return { error };
      });
  } else if (serviceType.method.toLowerCase() === 'put') {
    return axios
      .put(serviceType.url, serviceType.body, { params, headers })
      .then((response) => {
        response.isJson = typeof response.data === 'object';
        return { response };
      })
      .catch((error) => {
        if (error.response) {
          error.response.isJson =
            typeof error.response.data === 'object';
        }
        return { error };
      });
  } else if (serviceType.method.toLowerCase() === 'delete') {
    return axios
      .delete(serviceType.url, { params, headers })
      .then((response) => {
        response.isJson = typeof response.data === 'object';
        return { response };
      })
      .catch((error) => {
        if (error.response) {
          error.response.isJson =
            typeof error.response.data === 'object';
        }
        return { error };
      });
  } else if (serviceType.method.toLowerCase() === 'get') {
    return axios
      .get(serviceType.url, { params, headers })
      .then((response) => {
        response.isJson = typeof response.data === 'object';
        return { response };
      })
      .catch((error) => {
        if (error.response) {
          error.response.isJson =
            typeof error.response.data === 'object';
        }
        return { error };
      });
  }
}
export default fetcher;
