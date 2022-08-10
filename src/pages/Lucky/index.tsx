import Blog from '@src/layouts/Blog';
import {Component, createEffect, createSignal, Show, on} from 'solid-js';
import {createQuery} from 'solid-urql';

import PostComponent from '@components/Post';

const PostQuery = `
query {
  posts (sort: "createdAt:desc", pagination: { limit: 100 })  {
    data {
      id
      attributes {
        Title
        Content
      }
    }
    meta {
      pagination {
        page
        pageSize
        total
      }
    }
  }
}
`;

const Lucky : Component = () => {
  const [post, setPost] = createSignal({
    id: -1,
    title: '',
    content: '',
  });

  const [item, itemState] = createQuery({
    query: PostQuery,
  });

  createEffect(on(item, (item) => {
    const postId = Math.floor(Math.random() * item.posts.meta.pagination.total);
    const post = item.posts.data[postId];
    setPost({id: post.id, title: post.attributes.Title, content: post.attributes.Content});
  }, {defer: true}));

  return (
    <Blog>
      <Show when={!itemState().fetching} fallback={<PostComponent title="Loading..."/>} >
        <PostComponent id={post().id} title={post().title} content={post().content}/>
      </Show>
    </Blog>
  );
};

export default Lucky;

