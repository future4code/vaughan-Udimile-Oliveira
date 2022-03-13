import axios from "axios"
import { useEffect, useState } from "react"
import { urlBase } from "../../constants/urlBase"
import useProtect  from "../../Hooks/useProtect"
import { StyledCardMui, StyledDivFeed } from "./styled"
import moment from "moment";
import * as React from 'react';
import {CardActionArea } from "@mui/material"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {goToPostDetail} from '../../Router/coordinator'
import { useNavigate } from "react-router-dom"
import { MakeAPost } from "../../components/MakeAPost/MakeAPost"

export const FeedPage = () => {
    useProtect()
    const navigate = useNavigate()
    const [posts, setPosts] = useState(undefined)


    const getPosts = () => {
        const token = window.localStorage.getItem("token")

        const headers = {
            headers: {
                Authorization: token
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
        return <StyledCardMui sx={{ maxWidth: 600, minWidth: 600, minHeight: 100 }} key={post.id} >
            <CardActionArea onClick={()=>goToPostDetail(navigate)}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        postado por <b>{post.username}</b> há {moment(post.createdAt).startOf('hora').fromNow()}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {post.title}
                    </Typography>
                    <Typography variant="body2">
                        {post.body}
                    </Typography>
                </CardContent>
                </CardActionArea>
            </StyledCardMui>

    })

    useEffect(() => { getPosts() }, [])

    return (
        <div>
            <StyledDivFeed>
                <MakeAPost/>
                {feedList}
            </StyledDivFeed>
            <div>

            </div>

        </div>
    )
}