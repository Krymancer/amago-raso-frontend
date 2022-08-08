import {Link} from '@solidjs/router';
import type {Component} from 'solid-js';

interface PostProps {
  title?: string;
  content?: string;
  id?: number;
}

const Post : Component<PostProps> = (props) => {
  return (
    <div class="bg-base min-h-fit m-5 p-5 px-8">
      <Link href={`/post/${props.id}`}>
        <div class="text-2xl cursor-pointer hover:text-subtext1 hover:underline xl:text-5xl sm:text-4xl">
          {props.title}
        </div>
      </Link>
      <div class="py-2">
        {props.content}
      </div>
    </div>
  );
};

export default Post;
