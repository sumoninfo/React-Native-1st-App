import React             from "react";
import { Switch, Route } from "react-router-native";

//Pages
import Home          from "../views/pages/Home";
import About         from "../views/pages/About";
import Posts         from "../views/pages/Posts";
import Post          from "../views/pages/Post";
import NotFound      from "../views/pages/NotFound";
import CategoryPosts from "../views/pages/CategoryPosts";
import { View }      from "react-native";
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
// then our route config
const routes = [
  {
    path     : "/about",
    component: About,
  },
  {
    path     : "/",
    component: Home,
  },
  {
    path     : "/posts",
    component: Posts,
  },
  {
    path     : "/posts/:post_id",
    component: Post,
  },
  {
    path     : "/posts/:type/:type_id",
    component: CategoryPosts,
  },
];

// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route exact path={route.path} render={props => (<route.component {...props} />)} />
);

const RouterPage = () => {
  return (
    /*<Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/posts/:type/:type_id" component={CategoryPosts}/>
        <Route path="/posts/:post_id" component={Post}/>
        <Route path="/posts" component={Posts}/>
    </Switch>*/
    <>
      {
        routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))
      }
    </>
  );
};
export default RouterPage;
