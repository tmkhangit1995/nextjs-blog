import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React, { FunctionComponent } from 'react';
import { getPostDetail, getPostIds, Post } from '../api/blog';

type PostDetailProps = {
  post: Post;
};

interface Iparams extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = () => {
  const postIds = getPostIds();
  const paths = postIds.map((postId) => ({
    params: {
      id: postId,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { id } = params as Iparams;
  const post = getPostDetail(id);
  return {
    props: {
      post,
    },
  };
};

const PostDetail: FunctionComponent<PostDetailProps> = (props) => {
  return (
    <div className='max-w-md mx-auto text-left my-4'>
      <div className='text-3xl font-bold mb-2'>{props.post.title}</div>
      <div className='text-sm mb-2'>{props.post.date}</div>
      <div
        className=''
        dangerouslySetInnerHTML={{
          __html: props.post && props.post.htmlContent,
        }}
      ></div>
    </div>
  );
};

export default PostDetail;
