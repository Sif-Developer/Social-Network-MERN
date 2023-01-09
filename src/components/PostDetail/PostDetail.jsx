import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPostById } from '../../features/posts/postsSlice'
import "./PostDetail.scss"


const PostDetail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {post} = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getPostById(id))
    }, [])


  return (
    <div className="container-top"> 
    <h1>Post Detail</h1>
    <p>{post.userId}</p>
    <p>{post.title}</p>
    <p>{post.body}</p>
    
    </div>

  )
}

export default PostDetail