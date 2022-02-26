import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog({data}) {
    return (
        <>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            {data.map((item, index) => (
                <Link to={`/blog/${item.title}`}>
                    <div key={index}>{item.title}</div>
                </Link>
            ))}
        </>
    )
}
