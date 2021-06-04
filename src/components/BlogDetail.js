import React, { useState, useEffect} from 'react'
import {REACT_APP_API_URL} from "./plugins"
import axios from "axios";
import {Link} from "react-router-dom"


function BlogDetail(props) {
    const [blog, setBlog] = useState([])

    useEffect(() =>{
        const slug = props.match.params.id
        console.log(slug)

        const fetchData = async () =>{
           try{
               const res = await axios.get(`${REACT_APP_API_URL}/api/blog/${slug}/`);
               setBlog(res.data);
               console.log(res.data)
    
           }
           catch(error){
            console.log(error)
    
    
           }
    
        }   
        fetchData()
    }, [props.match.params.id])
    

    const createblog = () =>{
        return { __html: blog.content }
    };     

    const capitalizeFirstLetter = (word) =>{
        if(word){
            return word.charAt(0).toUpperCase() + word.slice(1);
       
        }
        return '';
    
    }
    
    return (
        <div className="container">
            <h1 className="display-2">{blog.title}</h1>
            <Link to={`/category/${blog.category}`}><h2 className="text-muted"> {blog.category}</h2> </Link>
            <h4>{blog.month} {blog.day}</h4>
            <div className="mt-5 mb-5" dangerouslySetInnerHTML={createblog()}>
            </div>
            <hr />
            <p className="lead mb-5"> <Link to="/blog" className="font-weight-bold">Back to Blog</Link></p>
        </div>
    )
}

export default BlogDetail;
