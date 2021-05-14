import Chip from '@material-ui/core/Chip';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { decodeBlogPost } from '../services/blogService'
import ReactHtmlParser from 'react-html-parser';
import { useEffect, useState } from 'react';
import { getFavouritePosts } from '../services/blogService';

const BlogsInfo = (
  {
    user,
    blogBoxClickHandler,
    ownBlogDeleteHandler,
    deleteFavoriteHandler
  }) => {
    
  const [favoriteBlogs, setFavoriteBlogs] = useState()
  const { blogPosts: ownBlogs, favoritePosts } = user;

  useEffect(() => {
    if (favoritePosts) {
    getFavouritePosts({ posts: favoritePosts })
      .then(listOfFavorites => setFavoriteBlogs(listOfFavorites))
    }
  }, [user])
  
  return (
    <Grid className="general-info">
      <form>
        <div className="flex-container">
          <h2>Blogs</h2>
        </div>
        <div className="flex-container" style={{ marginTop: '0' }}>
          <h2>Your blogs</h2>
        </div>
        <div className="info-box-container">
          {ownBlogs ?
            ownBlogs.map(x => {
              x = decodeBlogPost(x)
              return <Chip key={x._id + x.title}
                icon={<MenuBookRoundedIcon />}
                label={ReactHtmlParser(x.title)} color="primary"
                variant="outlined"
                onClick={() => blogBoxClickHandler(x._id)}
                onDelete={() => ownBlogDeleteHandler(x._id)} />
            })
            : null
          }
        </div>
        <div className="flex-container" style={{ marginTop: '0' }}>
          <h2>Your favorites</h2>
        </div>
        <div className="info-box-container">
          {favoriteBlogs ?
            favoriteBlogs.map(x => {
              x = decodeBlogPost(x)
              return <Chip icon={<FavoriteIcon style={{ color: '#f50057' }} />}
                label={ReactHtmlParser(x.title)} color="secondary" variant="outlined"
                onClick={() => blogBoxClickHandler(x._id)}
                onDelete={() => deleteFavoriteHandler(x._id)}
                 />
            })
            : null
          }
        </div>
      </form>
    </Grid>


  );
}

export default BlogsInfo;