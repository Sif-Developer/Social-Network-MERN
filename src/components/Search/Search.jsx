import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getPostByName } from '../../features/posts/postsSlice'
import Post from '../Posts/Post/Post'
import "./Search.scss"

const Search = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      navigate('/search/'+ text)
    }
  };


  const {postName} = useParams()

  useEffect(() => {
    dispatch(getPostByName(postName))
  }, [postName])
  
  return (
    <>
    <div className="container-search" >Search</div>
    <div  className="">
        <input onKeyUp={handleChange} placeholder="search post" name="text" />
      </div>
    <div>
      <Post/>
    </div>
    </>
  )
}

export default Search