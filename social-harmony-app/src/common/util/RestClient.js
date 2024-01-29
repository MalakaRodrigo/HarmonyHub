export class ServerError extends Error {
  constructor(response, ...params) {
    super(...params);

    this.name = 'ServerError';
    this.response = {};

    return this;
  }
}


export async function request(url, options = {}, ignoreAuth = false) {
  const config = {
    method: 'GET',
    ...options,
  };

  const errors = [];

  if (!url) {
    errors.push('url');
  }

  if (
    !config.payload &&
    config.method !== 'GET' &&
    config.method !== 'DELETE' &&
    config.method !== 'POST'
  ) {
    errors.push('payload');
  }

  if (errors.length) {
    const errorMsg = `Error! You must pass \`${errors.join('`, `')}\``;
    throw new Error(errorMsg);
  }

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'accept-encoding': 'gzip',
    Authorization: ignoreAuth ? '' : 'MySecret',
    ...config.headers,
  };

  const params = {
    headers,
    method: config.method,
  };

  if (params.method !== 'GET' && config.payload) {
    params.body = JSON.stringify(config.payload);
  }

  return fetch(url, params)
    .then(async (response) => {
      if (response.status > 299) {
        const error = new ServerError(response.statusText);
        const contentType = response.headers.get('content-type');

        if (contentType?.includes('application/json')) {
          error.response = {
            status: response.status,
            data: await response.json(),
          };
        } else {
          error.response = {
            status: response.status,
            data: await response.text(),
          };
        }

        throw error;
      } else {
        const contentType = response.headers.get('content-type');
        if (contentType?.includes('application/json')) {
          return response.json();
        }
        return response.blob();
      }
    })
    .catch((err) => {
      if (err instanceof ServerError) {
        throw err;
      } else {
        const error = new ServerError(err.message);
        error.response = {
          status: 500,
          data: 'ERROR',
        };
        throw error;
      }
    });
}
