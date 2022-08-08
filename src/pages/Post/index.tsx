import {useParams} from '@solidjs/router';
import Blog from '@src/layouts/Blog';
import {Component} from 'solid-js';

import PostComponent from '@components/Post';

const Post: Component = () => {
  const title = 'Post Title';
  const content = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui veniam asperiores fugiat labore quos id quo, nostrum dolores unde doloremque, quaerat distinctio, nihil ratione assumenda molestias quisquam. Amet, atque neque.';
  const {id} = useParams();
  return (
    <Blog>
      <PostComponent id={Number(id)} title={title} content={content}/>
    </Blog>
  );
};

export default Post;
