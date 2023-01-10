import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { reset } from '../../features/auth/authSlice'
import { getAllPosts } from '../../features/posts/postsSlice'
import Post from './Post/Post'

const Posts = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllPosts())
        dispatch(reset())
    }, [])

  return (
    <>
    <div></div>
    <Post/>
    </>
  )
}

export default Posts