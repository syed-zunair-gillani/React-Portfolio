import React from 'react'
import { useParams } from 'react-router-dom'

export default function SingleBlog({data}) {

    const {title} = useParams();

    return (
        <div>
            {
                data.filter(blog => blog.title === title).map((item, index) => (
                    <>
                        <div>{item.title}</div>
                        <div>{item.description}</div>
                    </>
                ))
            }
        </div>
    )
}
