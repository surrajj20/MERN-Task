import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Row } from "reactstrap";
import { useSelector, useDispatch } from 'react-redux';
import { listBlogs } from "../actions/blogsActions";
import img from "./../images/article.jpg"

function HomeScreen(props) {

    const blogList = useSelector(state => state.blogList);
    const { blogs, loading, error } = blogList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listBlogs());
        return () => {
            //
        }
        //eslint-disable-next-line
    }, [])


    return (loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
            <div>
                <Row style={{ justifyContent: "space-evenly", alignItems: "space-evenly" }}>
                    <Link to="/createBlog">
                        <button style={{ backgroundColor: "grey", color: "#ffffff", height: "50px", width: "120px", outline: "none", border: "none", borderRadius: "20px", padding: "15px", marginTop: "30px", marginLeft: "20px" }}> Create Blog</button>
                    </Link>

                    <Link >
                        <button style={{ backgroundColor: "grey", color: "#ffffff", height: "50px", width: "120px", outline: "none", border: "none", borderRadius: "20px", padding: "15px", marginTop: "30px", marginLeft: "20px" }}> Edit Blog</button>
                    </Link>
                    <Link >
                        <button style={{ backgroundColor: "grey", color: "#ffffff", height: "50px", width: "120px", outline: "none", border: "none", borderRadius: "20px", padding: "15px", marginTop: "30px", marginLeft: "20px" }}> Update Blog</button>
                    </Link>
                    <Link >
                        <button style={{ backgroundColor: "grey", color: "#ffffff", height: "50px", width: "120px", outline: "none", border: "none", borderRadius: "20px", padding: "15px", marginTop: "30px", marginLeft: "20px" }}> Delete Blog</button>
                    </Link>
                </Row>
                <ul className="blogs">
                    {
                        blogs.map(blog =>
                            <li key={blog._id}>
                                <div className="blog">
                                    <Link to={'/blog/' + blog._id}><img className="blog-image" src={img} alt="blog-img" /></Link>
                                    <div className="blog-name">
                                        <Link to={'/blog/' + blog._id}>{blog.name}</Link>
                                    </div>
                                    <div className="blog-description">{blog.description}</div>
                                </div>
                            </li>)
                    }
                </ul>
            </div>
    )
}

export default HomeScreen;