import React, {useState, useEffect, useCallback} from 'react';
import axios, {post} from 'axios'
import {useHistory} from "react-router-dom"
import {REACT_APP_API_URL} from "./plugins"

function CreateBlog() {
    const [ title, setTitle] = useState("")
    const [ slug, setSlug] = useState("")
    const [ category, setCategory] = useState(null)
    const [ imagecover, setImageCover] = useState(null)
    const [ excerpt, setExcerpt] = useState("")
    const [ month, setMonth] = useState("")
    const [ day, setDay] = useState("")
    const [ content, setContent] = useState("")
    const [ featured, setFeatured] = useState(false)
    const [ DateCreated, setDatecreated] = useState(null)

    const history = useHistory();



    const titleChangeHandler = (e) =>{
        setTitle(e.target.value)
     }
     const slugChangeHandler = (e) =>{
        setSlug(e.target.value)
     }
     const categoryChangeHandler = (e) =>{
        setCategory(e.target.value)
     }
     const imagecoverChangeHandler = (e) =>{  
        setImageCover(e.target.files[0])
     }
     const excerptChangeHandler = (e) =>{
        setExcerpt(e.target.value)
     }
     const monthChangeHandler = (e) =>{
        setMonth(e.target.value)
     }
     const dayChangeHandler = (e) =>{
        setDay(e.target.value)
     }
     const contentChangeHandler = (e) =>{
        setContent(e.target.value)
     }
     const featuredChangeHandler = (e) =>{
        setFeatured(e.target.value)
     }
     const DateCreatedChangeHandler = (e) =>{
        setDatecreated(e.target.value)
     }  

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(category);

        const getFormData = object => Object.keys(object).reduce((formData, key) => {
                    formData.append(key, object[key]);
                    return formData;
                }, new FormData());
        



        const data ={
            title: title,
            slug: slug,
            excerpt:excerpt,
            month: month,
            day: day,
            featured: featured,
            date_created: DateCreated,
            content:content,
            image_cover: imagecover,
            category:category
        }

        const config ={
            headers:{
                'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'

            },
    
        };
        const postBlog = async () =>{
           try{
               const res = await axios.post(`${REACT_APP_API_URL}/api/blog/new/`, getFormData(data), config);
              // setBlogs(res.data);
              console.log("Submitted true")
              history.push(`/blog`);

              
    
           }
           catch(error){
               console.log("Submitted false")
               console.log(error);
               console.log('Response body', error.response.data)


    
           }
    
        }   
        postBlog()
       

    }

 
    return (
        <div class="form-group">
         <form onSubmit={handleSubmit}>
        <fieldset>
                                {/* <input type="hidden" name="csrfmiddlewaretoken" value="qg5NUSE7xKbofZXB2K8ewnMYWeTN2NjRugOFQJsyrnhgGelv7PF8rvSnv41NUCj4"/> */}
                              
    <div class="form-group ">
  
    <label class="col-sm-2 control-label ">
      Title
    </label>
  <div class="col-sm-10">
    <input name="title" class="form-control" type="text" value={title} onChange={titleChangeHandler}/>    
  </div>
</div>
    <div class="form-group ">
    <label class="col-sm-2 control-label ">
      Slug
    </label>
  <div class="col-sm-10">
    <input name="slug" class="form-control" type="text" value={slug} onChange={slugChangeHandler}/>
  </div>
</div>
<div class="form-group ">
      
  <label class="col-sm-2 control-label ">
    Image cover
  </label>


<div class="col-sm-10">
  <input name="image_cover"  type="file"  accept="image/png, image/jpeg" onChange={imagecoverChangeHandler} required/>  
</div>
</div>
  
<div class="form-group">
  
    <label class="col-sm-2 control-label ">
      Category
    </label>
  

  <div class="col-sm-10">
    <select class="form-control" name="category" value={category} onChange={categoryChangeHandler}>
      
      
          
            <option value="love">Love</option>
          
      
          
            <option value="God">God</option>
          
      
          
            <option value="adventure">Adventure</option>
          
      
          
            <option value="code">Code</option>
          
      
          
            <option value="programming">Programming</option>
          
      
    </select>

    

    
  </div>
</div>
    
  
    <div class="form-group ">
  
    <label class="col-sm-2 control-label ">
      Excerpt
    </label>
  <div class="col-sm-10">
    <input name="excerpt" class="form-control" type="text" value={excerpt} onChange={excerptChangeHandler}/>
  </div>
</div>

    <div class="form-group ">
  
    <label class="col-sm-2 control-label ">
      Month
    </label>
  <div class="col-sm-10">
    <input name="month" class="form-control" type="text" value={month} onChange={monthChangeHandler}/>    
  </div>
</div>
  <div class="form-group ">
    <label class="col-sm-2 control-label ">
      Day
    </label>
  
  <div class="col-sm-10">
    <input name="day" class="form-control" type="text" value={day} onChange={dayChangeHandler}/>  
  </div>
</div>
    <div class="form-group ">
  
    <label class="col-sm-2 control-label ">
      Content
    </label>

  <div class="col-sm-10">
    <textarea name="content" class="form-control" onChange={contentChangeHandler}></textarea>
   
  </div>
</div>
  
    <div class="form-group horizontal-checkbox ">
  
    <label class="col-sm-2 control-label ">
      Featured
    </label>
  

  <div class="col-sm-10">
    <input type="checkbox" name="featured" value={featured} onChange={featuredChangeHandler}/>  
  </div>
</div>
    <div class="form-group ">
  
    <label class="col-sm-2 control-label ">
      Date created
    </label>

  <div class="col-sm-10">
    <input name="date_created" class="form-control" type="datetime-local" defaultValue={DateCreated} onChange={DateCreatedChangeHandler}/>
    
  </div>
</div>
<div class="form-actions">
    <button type="submit" >POST</button>
    </div>
     </fieldset>
 </form>
 
</div>
    )
}

export default CreateBlog;
