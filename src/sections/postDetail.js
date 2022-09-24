import React from 'react'

const postDetail = {
    id: '1',
    slug: 'abc-x',
    content: 'logasbfkjasfbhamsfbkas',
    image: 'http://'
}

const PostDetail = ({ slug }) => {
    return (
        <div>{slug}</div>
    )
}

export default PostDetail