import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { Post } from '../pages/api/blog';

type PostItemProps = Post;

const PostItem: FunctionComponent<PostItemProps> = (props) => {
  return (
    <div className='mb-4 bg-green-200 p-4'>
      <Link href={'/post/' + props.id} className='text-2xl mb-2'>
        {props.title}
      </Link>
      <div className='text-stale-600'>{props.excerpt}</div>
      <div className='text-sm text-stone-400 font-light'>{props.date}</div>
    </div>
  );
};

export default PostItem;
