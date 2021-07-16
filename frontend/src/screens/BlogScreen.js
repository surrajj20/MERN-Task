import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { detailsBlog } from '../actions/blogsActions';
import img from "./../images/article.jpg"

function BlogScreen(props) {
    const blogDetails = useSelector(state => state.blogDetails);
    const { blog, loading, error } = blogDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsBlog(props.match.params.id));
        return () => {
            //
        };
        // eslint-disable-next-line 
    }, [])

    return <div>
        <div className="back-to-result">
            <Link to="/">Back to result</Link>
        </div>
        {loading ? <div>Loading...</div> :
            error ? <div>{error} </div> :
                (
                    <div className="details">
                        <div className="details-image">
                            <img src={img} alt="blog-img"></img>
                        </div>
                        <div className="details-info">
                            <ul>
                                <li>
                                    <h4>{blog.name}</h4>
                                </li>
                                <li>
                                    Description:
                        <div>
                                        {blog.description}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="details-action">
                            <ul>

                            </ul>
                        </div>
                    </div>

                )
        }


    </div>
}

export default BlogScreen;