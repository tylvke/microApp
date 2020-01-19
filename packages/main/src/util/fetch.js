import axios from 'axios';

const fetch = (params) => {
  return new Promise((resolve, reject) => {
    const { url } = params;
    params.method = (params.method || 'get').toUpperCase();
    params.url = `${url}${url.indexOf('?') > -1 ? '&' : '?'}__time= ${new Date().getTime()}`
    axios(params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        const data = err.response.data;
        reject(data);
      });
  });
};

export default fetch;
