import React, { useState, useEffect} from 'react'
import {REACT_APP_API_URL} from "./plugins"
import axios from "axios";
import {Link} from "react-router-dom"

function Category(props) {
    const categorylug = props.match.params.id
    console.log(categorylug)
    const [blogs, setblogs] = useState([])
    const [currentCategory, setcurrentCategory] = useState('')


    useEffect(() =>{ 
    const capitalizeFirstLetter = (word) =>{
        if(word){   
            return word.charAt(0).toUpperCase() + word.slice(1);
       
        }
        return '';
    } 
    
    const category= props.match.params.id
    setcurrentCategory(capitalizeFirstLetter(category))

   
        const config ={
            headers:{
                'Content-Type': 'application/json'
            }
          

        };

        const fetchData = async () =>{
           try{
               const res = await axios.post(`${REACT_APP_API_URL}/api/blog/category/`, {category}, config);
               setblogs(res.data);
               console.log(res.data)
    
           }
           catch(error){
            console.log(error)
    
    
           }
    
        }   
        fetchData()
    }, [props.match.params.id])

    const capitalizeFirstLetter = (word) =>{
        if(word){   
            return word.charAt(0).toUpperCase() + word.slice(1);
       
        }
        return '';
    } 

   const getCategoryBlogs = () =>{
       let list = [];
       let result = [];

       blogs.map((blogPost) =>{
           return list.push(
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">{capitalizeFirstLetter(blogPost.category)}</strong>
                <h3 className="mb-0">{blogPost.title}</h3>
                <div className="mb-1 text-muted">{blogPost.date_created}</div>
                <p className="card-text mb-auto">{blogPost.excerpt}</p>
                <Link to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
            </div>
            <div className="col-auto d-none d-lg-block">
                <img src={blogPost.image_cover} width="200" height="250" alt="" style={{objectFit: 'contain'}}/>
            </div>
            </div>
            )})


    for(let i = 0; i<list.length; i+=2 )
    {
        result.push(
        <div key={i} className="row mb-2">
            <div className="col-md-6">{list[i]}</div>
            <div className="col-md-6">{list[i+1] ? list[i+1] : null}</div>
         </div>
         )

    
    };

    return result;

}    
   
    return (
        <div>
            <h3 className="display-4">{currentCategory} category</h3>
            <nav className="nav d-flex justify-content-between">
            <Link className="p-2 link-secondary" to="/category/love/">Love</Link>
            <Link className="p-2 link-secondary" to="/category/God/">God</Link>
            <Link className="p-2 link-secondary" to="/category/code/">Code</Link>
            <Link className="p-2 link-secondary" to="/category/programming/">Programming</Link>
            <Link className="p-2 link-secondary" to="/category/love/">Love</Link>
            <Link className="p-2 link-secondary" to="/category/adventure/">Adeventure</Link>
      
    </nav>
                
        
       { getCategoryBlogs()}
            
        </div>
    )
}

export default Category;
