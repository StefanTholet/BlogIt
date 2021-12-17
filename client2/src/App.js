import style from './App.module.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage'
import BlogPostsPage from './Components/Blog/BlogPostsSection/BlogPostsSection';
import ReadBlogPost from './Components/Blog/ReadBlogPost/ReadBlogPost';
import CreateBlog from './Components/Blog/CreateBlog/CreateBlog';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/LogIn';
import Profile from './Components/Profile/Profile';
import { sendRequest } from './Components/services/server';
import { signInUserAndGetUserData, registerUser } from './Components/services/user';
import { useState, useEffect } from 'react';
import UserContext from './Components/Contexts/UserContext';
import TokenContext from './Components/Contexts/TokenContext'
import useToken from './hooks/useToken';

function App(props) {

  const [user, setUser] = useState(undefined);
  const { token, setToken } = useToken();

  useEffect(() => {
    if (token) {
      sendRequest(`/auth/user/${token}`)
        .then(res => res.json())
        .then(user => setUser(user))
        .catch(err => console.log(err));
    }
  }, [token])

  const onRegistrationSubmitHandler = (e) => {
    e.preventDefault();
    return registerUser(e)
      .then(userData => {
        if (userData._id) {
          setUser(userData)
          setToken(userData._id)
          props.history.push(`users/${userData._id}/profile`)
        }
      })
      .catch(err => err)
  }
  const onLoginSubmitForm = (e) => {
    e.preventDefault();
    return signInUserAndGetUserData(e)
      .then(userData => {
        if (userData._id) {
          setUser(userData)
          setToken(userData._id)
          return `Welcome back, ${userData.firstName}`
        }
       
      })
      .catch(err => 'Incorrect username or password')
  }

  return (
    <TokenContext.Provider value={token}>
      <UserContext.Provider value={[user, setUser]}>
          <div className={style["site-container"]}>
            <Header />
            <Switch>
              <Route path="/" component={MainPage} exact />
              <Route path="/blog" component={BlogPostsPage} exact />
              <Route path="/blog/read-more/:postId" component={ReadBlogPost} />
              <Route path="/create-blog" component={CreateBlog} exact />
              <Route path="/users/:userId/profile" component={Profile} exact></Route>
              <Route path="/register" component={() => <Register onRegistrationSubmitHandler={onRegistrationSubmitHandler} userId={user?._id}/>} exact></Route>
              <Route path="/login" render={() => <Login onLoginSubmitForm={onLoginSubmitForm} userId={user?._id} />} exact></Route>
            </Switch>
          </div>
      </UserContext.Provider>
    </TokenContext.Provider>
  );
}




export default withRouter(App);
