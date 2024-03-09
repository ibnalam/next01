import React from 'react'
import getAllPost from '../lib/getAllPost'
import Link from 'next/link';

const  post = async ()  => {
    const posts = await getAllPost();
    // console.log(posts);

  return (
    <div className='mt-6'>
        <h1>
            All Post
        </h1>
        <ul>
            {posts.map(posts =>
                 <li key={posts.id}>
                    <Link href={`/post/${posts.id}`}>{posts.title}</Link>
                    </li>
                 )}
        </ul>

    </div>
  )
}

export default post