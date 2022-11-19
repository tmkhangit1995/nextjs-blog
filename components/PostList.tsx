import { FunctionComponent } from 'react';
import { Post } from '../pages/api/blog';
import PostItem from './PostItem';

type PostListProps = {
  posts: Post[];
};

const PostList: FunctionComponent<PostListProps> = (props) => {
  return (
    <div>
      {props.posts.map((post, ind) => {
        return <PostItem key={ind} {...post} />;
      })}
    </div>
  );
};

export default PostList;
