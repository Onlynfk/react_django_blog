import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom"
import {REACT_APP_API_URL} from "./plugins"



function Blog() {


    const [blogs, setBlogs] = useState([])
const [featuredBlog, setFeaturedBlog] = useState([])


useEffect(() =>{
    const fetchData = async () =>{
       try{
           const res = await axios.get(`${REACT_APP_API_URL}/api/blog/featured/`);
           setFeaturedBlog(res.data[0]);
           console.log(res.data)

       }
       catch(error){
        console.log(error)


       }

    }   
    fetchData()
}, [])


useEffect(() =>{
    const fetchBlog = async () =>{
       try{
           const res = await axios.get(`${REACT_APP_API_URL}/api/blog/`);
           setBlogs(res.data);

       }
       catch(error){
           console.log(error);

       }

    }   
    fetchBlog()
}, []);

const capitalizeFirstLetter = (word) =>{
    if(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
   
    }
    return '';

}


const getBlogs = () => {
    let list = [];
    let result = [];

    blogs.map(blogPost =>{
        return list.push(
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">{blogPost.category}</strong>
                    <h3 className="mb-0">Featured post</h3>
                    <div className="mb-1 text-muted">Nov 12</div>
                    <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <Link href="/" className="stretched-link">Continue reading</Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="/55595c"></rect><text x="50%" y="50%" fill="/eceeef" dy=".3em">Thumbnail</text></svg>
                </div>
        </div>
        )
    });

    for(let i = 0; i<list.length; i+=2 ){
        result.push(
            <div key={i} className="row mb-2">
               <div className="col-md-6">
               {list[i]}
               </div>
                <div className="col-md-6">
                    {list[i+1] ? list[i+1] : null}
        
                 </div>
        </div>
        )

    }

    return result;
        

    
};
    return (
        
<React.Fragment >
<div className="nav-scroller py-1 mb-2">
    <nav className="nav d-flex justify-content-between">
      <Link className="p-2 link-secondary" to="/category/love">Love</Link>
      <Link className="p-2 link-secondary" to="/category/God">U.S.</Link>
      <Link className="p-2 link-secondary" to="/category/code">Technology</Link>
      <Link className="p-2 link-secondary" to="/category/love">Design</Link>
      <Link className="p-2 link-secondary" to="/category/love">Culture</Link>
      <Link className="p-2 link-secondary" to="/category/love">Business</Link>
      <Link className="p-2 link-secondary" to="/category/love">Politics</Link>
      <Link className="p-2 link-secondary" to="/category/love">Opinion</Link>
      
    </nav>
  </div>
<main className="container">
    <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
        <h1 className="display-4 fst-italic">{featuredBlog.title}</h1>
        <p className="lead my-3">{featuredBlog.excerpt}</p>
        <p className="lead mb-0"><Link to={`/blog/${featuredBlog.slug}`} className="text-white fw-bold">Continue reading...</Link></p>
        </div>
    </div>

    {getBlogs()}

</main>
</React.Fragment>
    )
}

export default Blog;
