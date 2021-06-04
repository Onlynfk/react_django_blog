import React from 'react'
import {Link} from "react-router-dom"

function Home() {
    return (
        <div class="container py-4">
        <header class="pb-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
            <span class="fs-4">Hello there'😊' </span>
          </a>
        </header>
    
        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Welcome to Our Awesome  Blog</h1>
            <p class="col-md-8 fs-4">Click the button below to Access it '👇🏼'</p>
            <Link to="/blog" class="btn btn-primary btn-lg" type="button">View Blog</Link>
          </div>
        </div>
    
       
    
        <footer class="pt-3 mt-4 text-muted border-top">
          © 2021
        </footer>
      </div>
    )
}

export default Home
