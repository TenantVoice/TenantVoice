// These functions all take in a body and return an options object
// with the provided body and the remaining options
import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = '/api/posts';

export const createPost = async ({ category, description, picture, user_id, problem_duration }) => (
    fetchHandler(baseUrl, getPostOptions({ category, description, picture, user_id, problem_duration }))
);

//static async addPost(category, description, picture, previously_reported = false, user_id, location_id)
export const getAllPosts = async () => {
    const [posts] = await fetchHandler(baseUrl);
    return posts || [];
};

export const getPost = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const getPostById = async (id) => {
    const [post] = await fetchHandler(`${baseUrl}/${id}`)
    return post || [];
};


export const updateDescription = async ({ id, description }) => (
    fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, description }))
);
