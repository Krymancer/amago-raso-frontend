import {Component, For, onMount, Show} from 'solid-js';
import {createQuery} from 'solid-urql';

import Blog from '@layouts/Blog';
import Post from '@components/Post';

const PostQuery = `
query{
  posts(sort: "createdAt:desc"){
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

const Main: Component = () => {
  const [items, itemState] = createQuery({
    query: PostQuery,
  });

  onMount(() => {
    console.log(items());
  });

  return (
    <Blog>
      <Show when={!itemState().fetching} fallback={<Post title="Loading..."/>} >
        <For each={items().posts.data} fallback={null}>
          {(item :any) => <Post id={item.id} title={item.attributes.Title} content={item.attributes.Content} />}
        </For>
      </Show>
    </Blog>
  );
};

export default Main;
