import getPost from '@/app/lib/getPost'
import React from 'react'

const postpage = async ({params}) => {
    const {id} = params
    const post = await getPost(id)
  return (
    <div>
        <h2>
            {post.title}
            
        </h2>
        <p className='mt-6'>{post.body}</p>
    </div>
  )
}

export default postpage