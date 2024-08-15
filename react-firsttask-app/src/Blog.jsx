// eslint-disable-next-line no-unused-vars
import React from "react"
import { BlogTitle } from "./components/blog/BlogTitle"
import { CardContainer } from "./components/cardcontainer/CardContainer"
import './blog.css'
import { Dummy } from "./components/dummy/Dummy"

export default function Blog(){
  return(
    <div className="blog-section">
      <BlogTitle/>
      <CardContainer/>
      <Dummy/>
      </div>
  )
}


 
  
