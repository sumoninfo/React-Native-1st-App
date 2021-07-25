import React, {useEffect, useState} from 'react';
import {Image, Text, View}          from "react-native";
import ApiService                   from "../../services/api.service";
import NotificationService          from "../../services/notification.service";

import {Body, Button, Card, CardItem, Content, Icon, Left, Thumbnail} from "native-base";

const SinglePost = ({match}) => {
    const {post_id}                        = match.params;
    const [post, setPost]                  = useState({});
    const [categories, setCategories]      = useState([]);
    const [related_posts, setRelatedPosts] = useState([]);
    //------------getPost------------------
    const getPost                          = async () => {
        await ApiService.get(`/fr/posts/${post_id}`).then(res => {
            const result = res.data.data;
            setPost(result);
            setRelatedPosts(result.related_posts);
        }).catch(error => {
            NotificationService.error(error.response.data.message);
        })
    }
    //------------getCategories------------------
    const getCategories                    = async () => {
        await ApiService.get(`/fr/categories`).then(res => {
            setCategories(res.data.data);
        }).catch(error => {
            NotificationService.error(error.response.data.message);
        })
    }
    useEffect(() => {
        getPost()
    }, [match]);

    useEffect(() => {
        getCategories()
    }, []);


    return (
        <Content>
            <Card style={{flex: 0}}>
                <CardItem>
                    <Left>
                        <Body>
                            <Text>{post.title}</Text>
                            <Text note>{post.created_time}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Image source={{uri: post.image}} style={{height: 200, width: "100%", flex: 1}}/>
                        <Text>{post.description}</Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent textStyle={{color: '#87838B'}}>
                            <Text>{post.category?.title}</Text>
                        </Button>
                    </Left>
                </CardItem>
            </Card>
        </Content>
    );
};

export default SinglePost;
