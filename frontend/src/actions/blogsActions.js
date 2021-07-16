import {
    BLOG_LIST_REQUEST,
    BLOG_LIST_SUCCESS,
    BLOG_LIST_FAIL,
    BLOG_SAVE_REQUEST,
    BLOG_SAVE_SUCCESS,
    BLOG_SAVE_FAIL,
    BLOG_DETAILS_REQUEST,
    BLOG_DETAILS_SUCCESS,
    BLOG_DETAILS_FAIL,
} from '../constants/blogsConstants';
import axios from 'axios';
import Axios from 'axios';

const listBlogs = () => async (dispatch) => {

    try {
        dispatch({ type: BLOG_LIST_REQUEST });
        const { data } = await axios.get("/api/blogs");
        dispatch({ type: BLOG_LIST_SUCCESS, payload: data });

    } catch (error) {

        dispatch({ type: BLOG_LIST_FAIL, payload: error.message });
    }
}

const saveBlog = (blog) => async (dispatch, getState) => {
    try {
        dispatch({ type: BLOG_SAVE_REQUEST, payload: blog });
        const { userSignin: { userInfo } } = getState();
        const { data } = await Axios.post('/api/blogs', blog, {
            headers: {
                'Authorization': 'Bearer' + userInfo.token
            }
        });
        dispatch({ type: BLOG_SAVE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: BLOG_SAVE_FAIL, payload: error.message });

    }
}

const detailsBlog = (blogId) => async (dispatch) => {
    try {
        dispatch({ type: BLOG_DETAILS_REQUEST, payload: blogId });
        const { data } = await axios.get("/api/blogs/" + blogId);
        dispatch({ type: BLOG_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: BLOG_DETAILS_FAIL, payload: error.message });
    }
}

export { listBlogs, detailsBlog, saveBlog }