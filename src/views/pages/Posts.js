import React, {useState, useEffect}         from 'react';
import {Alert, FlatList, Image, Text, View} from "react-native";
import ApiService                           from "../../services/api.service";
import axios                                from "axios";
import {Link}                               from "react-router-native";

const Posts = () => {
    const [search, setSearch]         = useState("");
    const [posts, setPosts]           = useState([]);
    const [pagination, setPagination] = useState({
        current_page: 1,
    });
    useEffect(() => {
        console.log(posts)
        getPosts()
        console.log(posts)
    }, [])
    //------------getPosts------------------
    const getPosts = async (current_page = null) => {
        const params = {
            page   : current_page ?? pagination.current_page,
            keyword: search
        };
        await ApiService.get('/fr/posts', {params: params}).then(res => {
            const result = res.data;
            setPagination(result.meta);
            setPosts(result.data)
        }).catch(error => {
            console.log('Error:=>', error)
        })
    }

    const onPress = (alertTitle) => {
        Alert.alert(alertTitle)
    };

    const ChildView = ({post}) => {
        return (
            <View style={{flexDirection: "column", width: 185, height: 200, backgroundColor: "white", margin: 5}}>
                <View>
                    <Image style={{height: 100, width: "100%"}} source={{uri: post.image}}/>
                </View>
                <View style={{padding: 10}}>
                    <Link to={`/posts/${post.id}`}>
                        <Text style={{color: "black", fontSize: 18}}>{post.title}</Text>
                    </Link>
                    {/*<Text style={{color: "blue", fontSize: 12}}>{post.description}</Text>*/}
                </View>
            </View>
        );
    };
    return (
        <FlatList numColumns={2} horizontal={false} data={posts}
                  renderItem={({item}) => <ChildView post={item}/>}
                  keyExtractor={(item, index) => index}
        />
    );
};

export default Posts;
