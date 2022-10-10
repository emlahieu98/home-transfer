import React, { useState, useEffect } from 'react'
import { Box, Container, Image, Text } from 'theme-ui'
import ReactHtmlParser, {
    processNodes,
    convertNodeToElement,
    htmlparser2,
} from 'react-html-parser'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const PostDetail = ({ slug }) => {
    const [postDetail, setPostDetail] = useState({})

    useEffect(() => {
        async function fetchPostDetail() {
            try {
                const requestURL = `${BASE_URL}/api/posts/${slug}`

                const response = await fetch(requestURL)

                const responseJson = await response.json()

                const { data } = responseJson

                setPostDetail(data)
            } catch (error) {
                console.log('🚀 error', error.message)
            }
        }
        fetchPostDetail()
    }, [slug])

    return (
        <Box as="" id="post-detail" sx={styles.section}>
            <Container>
                <Box>
                    <Text as="p" sx={styles.title}>
                        {postDetail?.title}
                    </Text>
                    <Box sx={styles.image}>
                        <Image src={postDetail?.image} alt="image-post" />
                    </Box>
                    <Text as="p" sx={styles.content}>
                        {ReactHtmlParser(postDetail?.content)}
                    </Text>
                </Box>
            </Container>
        </Box>
    )
}

export default PostDetail

const styles = {
    section: {
        position: 'relative',
        pt: [105, null, null, 140, 15, null, 170],
        pb: [8, null, null, 0],
        zIndex: 0,
        ':before': {
            content: ['none', null, null, `''`],
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 72,
            zIndex: -1,
        },
        minHeight: ['900px'],
    },
    title: {
        textAlign: 'center',
        fontSize: '22px',
        fontWeight: 600,
    },
    image: {
        textAlign: 'center',
        padding: '25px',
        maxWidth: ['100%', null, null, '100%', null, '90%', '100%'],
        objectFit: 'contain',
    },
    content: {
        pt: '10px',
        textAlign: 'justify',
        minHeight: ['500px'],
        lineHeight: [1.7],
    },
}
