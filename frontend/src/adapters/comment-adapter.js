import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = '/api/posts/';

export const createComment = async ({ comment, user_id, post_id }) => (
    fetchHandler(`${baseUrl}${post_id}/comments`, getPostOptions({ comment, user_id, post_id }))
);