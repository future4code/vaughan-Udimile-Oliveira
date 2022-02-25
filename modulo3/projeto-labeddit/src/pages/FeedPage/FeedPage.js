import axios from "axios"
import { useEffect, useState } from "react"
import { urlBase } from "../../constants/urlBase"
import { useProtect } from "../../Hooks/useProtect"
import {StyledDivFeed} from "./styled"

export const FeedPage = () => {
 
    useProtect()
 
    const [posts, setPosts] = useState(undefined)
 
    const getPosts = () => {
        const token = window.localStorage.getItem("token")
        console.log(token)
        const headers = {
            headers: {
                Authorization:  token 
            }
        }
            axios.get(`${urlBase}/posts`, headers)
                .then(res => {
                    setPosts(res.data)
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err.response)
                })
    }

    const feedList = posts && posts.map(post => {
        return <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>{post.createdAt}</p>
            <p>{post.commentCount}</p>
            <p>{post.userVote}</p>
            <p>{post.username}</p>
            <p>{post.voteSum}</p>
        </div> 
        
    })

    useEffect(() => { getPosts() }, [])

    const createPost = () => {

    }

    return (
        <div>
            <div>
              
            </div>
            <StyledDivFeed> {feedList} </StyledDivFeed>
            <div>

            </div>

        </div>
    )
}