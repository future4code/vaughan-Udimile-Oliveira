import axios from "axios"
import { useEffect, useState } from "react"
import { urlBase } from "../../constants/urlBase"
import useProtect  from "../../Hooks/useProtect"
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
=======
>>>>>>> 68d596f0d01b01a8c06416552e858f6f0cadc169
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
<<<<<<< HEAD
>>>>>>> 68d596f0d01b01a8c06416552e858f6f0cadc169
=======
>>>>>>> 68d596f0d01b01a8c06416552e858f6f0cadc169

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
<<<<<<< HEAD
<<<<<<< HEAD
        return <StyledCardMui sx={{ maxWidth: 600, minWidth: 600, minHeight: 100 }} key={post.id} >
            <CardActionArea onClick={()=>goToPostDetail(navigate)}>
=======
        return <StyledCardMui sx={{ maxWidth: 600, minWidth: 600, minHeight: 100 }} key={post.id}>
>>>>>>> 68d596f0d01b01a8c06416552e858f6f0cadc169
=======
        return <StyledCardMui sx={{ maxWidth: 600, minWidth: 600, minHeight: 100 }} key={post.id}>
>>>>>>> 68d596f0d01b01a8c06416552e858f6f0cadc169
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
<<<<<<< HEAD
<<<<<<< HEAD
                </CardActionArea>
=======
>>>>>>> 68d596f0d01b01a8c06416552e858f6f0cadc169
=======
>>>>>>> 68d596f0d01b01a8c06416552e858f6f0cadc169
            </StyledCardMui>

    })

    useEffect(() => { getPosts() }, [])

<<<<<<< HEAD
<<<<<<< HEAD
 
    return (
        <div>
            <StyledDivFeed>
                <MakeAPost/>
=======
=======
>>>>>>> 68d596f0d01b01a8c06416552e858f6f0cadc169
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
<<<<<<< HEAD
>>>>>>> 68d596f0d01b01a8c06416552e858f6f0cadc169
=======
>>>>>>> 68d596f0d01b01a8c06416552e858f6f0cadc169
                {feedList}
            </StyledDivFeed>
            <div>

            </div>

        </div>
    )
}