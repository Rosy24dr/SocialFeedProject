import React from 'react';

const DisplayPosts = (props) =>{
      let singleName =  props.displayPost.map(post =>{
          return <div>{post.name}</div>    
})
      let singlePost =  props.displayPost.map(post =>{
          return <div>{post.post}</div>    
})
return(
    <div>
        <div>
            {singleName}
            {singlePost}
        </div>
        <button>like</button>
        <button>dislike</button>
    </div>
    
)
}


export default DisplayPosts;