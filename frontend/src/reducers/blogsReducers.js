import {
    BLOG_DETAILS_FAIL,
    BLOG_DETAILS_REQUEST,
    BLOG_DETAILS_SUCCESS,
    BLOG_LIST_FAIL,
    BLOG_LIST_REQUEST,
    BLOG_LIST_SUCCESS,
    BLOG_SAVE_REQUEST,
    BLOG_SAVE_SUCCESS,
    BLOG_SAVE_FAIL

} from "../constants/blogsConstants";

function blogListReducer(state = { blogs: [] }, action) {

    switch (action.type) {
        case BLOG_LIST_REQUEST:
            return { loading: true };

        case BLOG_LIST_SUCCESS:
            return { loading: false, blogs: action.payload };

        case BLOG_LIST_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }

}

function blogDetailsReducer(state = { blog: {} }, action) {

    switch (action.type) {
        case BLOG_DETAILS_REQUEST:
            return { loading: true };

        case BLOG_DETAILS_SUCCESS:
            return { loading: false, blog: action.payload };

        case BLOG_DETAILS_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }

}

function blogSaveReducer(state = { blog: {} }, action) {

    switch (action.type) {
        case BLOG_SAVE_REQUEST:
            return { loading: true };

        case BLOG_SAVE_SUCCESS:
            return { loading: false, success: true, blog: action.payload };

        case BLOG_SAVE_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }

}

export {
    blogListReducer,
    blogDetailsReducer,
    blogSaveReducer
};