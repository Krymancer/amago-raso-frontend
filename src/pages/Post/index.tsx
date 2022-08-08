import {useParams} from '@solidjs/router';
import Blog from '@src/layouts/Blog';
import {Component, Show} from 'solid-js';

import PostComponent from '@components/Post';
import {createQuery} from 'solid-urql';

const PostQuery = `
query GetPost($id: ID!){
  post(id: $id){
    data {
      id
      attributes {
        Title
        Content
      }
    }
  }
}
`;

const Post: Component = () => {
  const {id} = useParams();

  const [item, itemState] = createQuery({
    query: PostQuery,
    variables: {id},
  });

  return (
    <Blog>
      <Show when={!itemState().fetching} fallback={<PostComponent title="Loading..."/>} >
        <PostComponent id={Number(id)} title={item().post.data.attributes.Title} content={item().post.data.attributes.Content}/>
      </Show>
    </Blog>
  );
};

export default Post;
