import React, { useState, useEffect }         from "react";
import { Alert, FlatList, Image, Text, View } from "react-native";
import ApiService                             from "../../services/api.service";
import axios                                  from "axios";
import { Link }                               from "react-router-native";
import NotificationService                                   from "../../services/notification.service";
import { Body, Button, CardItem, Header, Icon, Input, Item } from "native-base";

const Posts = () => {
  const [search, setSearch]         = useState("");
  const [posts, setPosts]           = useState([]);
  const [pagination, setPagination] = useState({
    current_page: 1,
  });
  useEffect(() => {
    getPosts();
  }, []);
  //------------getPosts------------------
  const getPosts = async (current_page = null) => {
    console.log(search, 'search');
    const params = {
      page   : current_page ?? pagination.current_page,
      keyword: search,
    };
    await ApiService.get("/fr/posts", { params: params }).then(res => {
      const result = res.data;
      setPagination(result.meta);
      setPosts(result.data);
    }).catch(error => {
      NotificationService.error(error.response.data.message);
    });
  };

  const onPress = (alertTitle) => {
    Alert.alert(alertTitle);
  };

  const ChildView = ({ post }) => {
    return (
      <View style={{ flexDirection: "column", width: 185, height: 200, backgroundColor: "white", margin: 5 }}>
        <View>
          <Image style={{ height: 100, width: "100%" }} source={{ uri: post.image }} />
        </View>
        <View style={{ padding: 10 }}>
          <Link to={`/posts/${post.id}`}>
            <Text style={{ color: "black", fontSize: 18 }}>{post.title}</Text>
          </Link>
          {/*<Text style={{color: "blue", fontSize: 12}}>{post.description}</Text>*/}
        </View>
      </View>
    );
  };
  return (
    <View>
      <Header searchBar rounded>
        <Item>
          <Icon onPress={() => getPosts()} name="ios-search" />
          <Input value={search} onChangeText={(value)=>setSearch(value)} placeholder="Search" />
          <Icon name="ios-search" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      <FlatList numColumns={2} horizontal={false} data={posts}
                renderItem={({ item }) => <ChildView post={item} />}
                keyExtractor={(item, index) => index}
      />
    </View>

  );
};

export default Posts;
