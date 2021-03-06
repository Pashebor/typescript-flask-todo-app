export const ajaxJson = (url, method, params) => {
    return fetch(url, {
        method: method,
        body: params})
        .then(response => response.json());
};

export const getJson = (url: string, params: Object) => {
    return ajaxJson(url, 'POST', params);

};

export const requestCallback = (url: string, params: Object) => {
    return ajaxJson(url, 'POST', params);
};

export const putJson = (url: string, params: Object): object => {
    return ajaxJson(url, 'put', params);
};


export const deleteJson = (url: string): object => {
    return ajaxJson(url, 'delete', {});
};