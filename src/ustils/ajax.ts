export const ajaxJson = (url:string, method: string = 'get', params: object) => {
    return fetch(url, {method, body: params})
        .then(response => response.json());
};

export const getJson = (url: string, params: Object): object => {
    return ajaxJson(url, 'get', params);

};

export const requestCallback = (url: string, params: object) => {
    return ajaxJson(url, 'POST', params);
};

export const putJson = (url: string, params: object): object => {
    return ajaxJson(url, 'put', params);
};


export const deleteJson = (url: string): object => {
    return ajaxJson(url, 'delete', {});
};