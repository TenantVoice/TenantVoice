// These functions all take in a body and return an options object
// with the provided body and the remaining options
import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";


const baseUrl = '/api/posts';

export const createPost = async ({ category, description, user_id }) => (
    fetchHandler(baseUrl, getPostOptions({ category, description, user_id }))
);
//static async addPost(category, description, picture, previously_reported = false, user_id, location_id)
export const getAllPosts = async () => {
    const [post] = await fetchHandler(baseUrl);
    return post || [];
};

export const getPost = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updateDescription = async ({ id, description }) => (
    fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, description }))
);
