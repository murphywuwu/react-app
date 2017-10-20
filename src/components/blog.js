import React from 'react'

export default function Blog ( props ) {
    const sidebar = (
        <ul>
            {
                props.posts.map((post => {
                    return <li key={post.id}>{post.title}</li>
                }))
            }
        </ul>
    );
    const content = props.posts.map((post => {
        return <div key={post.id}>
                 <h3>{post.title}</h3>
                 <p>{post.content}</p>
               </div>
    }));

    return (
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    )
}  