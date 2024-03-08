import Link from 'next/link'
import React from 'react'

const blog = () => {
    const blogs = [{
        id: 1,
        title: "Blog 1",
        description: " Blog 1 description"
    },
    {
        id: 2,
        title: "Blog 2",
        description: " Blog 2 description"
    }
]
  return (
    <main>
        
        <ul>
        {blogs.map((blog) => (
                    <li key={blog.title}>
                        <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                        
                    </li>
                ))}
        </ul>
    </main>
    
  )
}

export default blog