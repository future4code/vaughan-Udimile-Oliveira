import axios from "axios"
import { useEffect, useState } from "react"
import { urlBase } from "../../constants/urlBase"
import useProtect  from "../../Hooks/useProtect"
import { StyledCard, StyledCardMui, StyledDivFeed } from "./styled"
import moment from "moment";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const FeedPage = () => {
    useProtect()

    const [posts, setPosts] = useState(undefined)
    const [newPost, setNewPost] = useState()
    const [title, setTitle] = useState()

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
        return <StyledCardMui sx={{ maxWidth: 600, minWidth: 600, minHeight: 100 }} key={post.id}>
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
            </StyledCardMui>

    })

    useEffect(() => { getPosts() }, [])

    const createPost = () => {
        const token = window.localStorage.getItem("token")

        const headers = {
            headers: {
                Authorization: token
            }
        }
        const bodyData = {
            title: title,
            body: newPost
        }
        axios.post(`${urlBase}/posts`, headers, bodyData)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.response)
            })
    }

    return (
        <div>
            <StyledCard>
                <TextField
                    id="standard-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    variant="standard"
                    
                />
                <TextField
                    id="standard-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    variant="standard"
                />
                <Button onClick={createPost}>Postar</Button>
            </StyledCard>
            <StyledDivFeed>
                {feedList}
            </StyledDivFeed>
            <div>

            </div>

        </div>
    )
}