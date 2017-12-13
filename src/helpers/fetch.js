export const getPost = async (api) => {
    let posts = null;
    let message = null;

    const response = await fetch(`${api}/?size=50`, {
        method: 'GET',
    });

    if (response.status !== 200) {
        throw new Error('Posts were not loaded!');
    }

    ({ data: posts, message } = await response.json());

    return { posts, message };
};

export const createPost = async (comment, api, token) => {
    let data = null;

    const response = await fetch(api, {
        method:  'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization:  token,
        },
        body: JSON.stringify({ comment }),
    });

    if (response.status !== 200) {
        throw new Error('Past was not created!');
    }

    ({ data } = await response.json());

    return { data };
};

export const likePost = async (id, api, token) => {
    let data = null;
    const response = await fetch(`${api}/${id}`, {
        method:  'PUT',
        headers: {
            Authorization: token,
        },
    });

    if (response.status !== 200) {
        throw new Error('Post was not liked!');
    }

    ({ data } = await response.json());

    return { data };
};

export const removePost = async (id, api, token) => {
    const data = null;

    const response = await fetch(`${api}/${id}`, {
        method:  'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization:  token,
        },
    });

    if (response.status !== 204) {
        throw new Error('Posts were not deleted!');
    }
};
