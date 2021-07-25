import React    from "react";
import {Switch} from "react-router-native";

//Pages
import Home          from "../views/pages/Home";
import About         from "../views/pages/About";
import Posts         from "../views/pages/Posts";
import Post          from "../views/pages/Post";
import NotFound      from "../views/pages/NotFound";
import CategoryPosts from "../views/pages/CategoryPosts";
import {Route}       from "react-router-native";
//Admin
// import Dashboard       from "../views/admin/Dashboard";
// import PostIndex       from "../views/admin/post/Index";
// import PostCreate      from "../views/admin/post/Create";
// import PostEdit        from "../views/admin/post/Edit";
// import CategoryIndex   from "../views/admin/category/Index";
// //auth
// import Login           from "../views/auth/Login";
// import Register        from "../views/auth/Register";
// import isAuthenticated from "../utils/isAuthenticated";


const RouterPage = () => {

    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/posts/:type/:type_id" component={CategoryPosts}/>
            <Route path="/posts/:post_id" component={Post}/>
            <Route path="/posts" component={Posts}/>
        </Switch>

    )
}
export default RouterPage;
