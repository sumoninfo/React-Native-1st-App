import React, {useState, useEffect}         from 'react';
import {Alert, FlatList, Image, Text, View} from "react-native";
import ApiService                           from "../../services/api.service";
import axios                                from "axios";

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

    };

    const ChildView = ({ChildTitle, ChildSubTitle, img}) => {
        return (
            <View style={{flexDirection: "column", width: 185, height: 200, backgroundColor: "white", margin: 5}}>
                <View>
                    <Image style={{height: 100, width: "100%"}} source={{uri: img}}/>
                </View>
                <View style={{padding: 10}}>
                    <Text onPress={() => onPress(ChildTitle)}
                          style={{color: "black", fontSize: 18}}>{ChildTitle}</Text>
                    <Text style={{color: "blue", fontSize: 12}}>{ChildSubTitle}</Text>
                </View>
            </View>
        );
    };
    return (
        <FlatList numColumns={2} horizontal={false} data={posts}
                  renderItem={({item}) => <ChildView ChildTitle={item.title} ChildSubTitle={item.description}
                                                     img={item.image} />}
                  keyExtractor={(item, index) => index}
        />
    );
};

export default Posts;