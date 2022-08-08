import type {Component, JSX} from 'solid-js';

import Header from '@components/Header';

interface BlogProps {
  children?: JSX.Element | JSX.Element[];
}

const Blog: Component<BlogProps> = (props) => {
  return (
    <div class="h-full min-h-screen xl:m-auto m-auto xl:max-w-[900px]">
      <div class="overflow-hidden">
        <Header />
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
};

export default Blog;
