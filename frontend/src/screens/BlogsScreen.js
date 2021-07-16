import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { saveBlog } from "../actions/blogsActions";

function BlogsScreens(props) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const blogSave = useSelector(state => state.blogSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = blogSave;
    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            //
        };
        // eslint-disable-next-line
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveBlog({ name, image, category, description, }));
        history.push("/dashboard")

    }


    return <div className="form">
        <form onSubmit={submitHandler} >
            <ul className="form-container">
                <li>
                    <h2>Create Blogs</h2>
                </li>
                <li>
                    {loadingSave && <div>Loading....</div>}
                    {errorSave && <div>{errorSave}</div>}
                </li>
                <li>
                    <label htmlFor="name">
                        Name
                </label>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="image">
                        Image
                </label>
                    <input type="text" name="image" id="image" onChange={(e) => setImage(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="category">
                        Category
                </label>
                    <input type="text" name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="name">
                        Description
                </label>
                    <textarea name="description" id="name" onChange={(e) => setDescription(e.target.value)}>
                    </textarea>
                </li>

                <li>
                    <button type="submit" className="button primary">Create</button>
                </li>

            </ul>
        </form>


    </div>
}

export default BlogsScreens;