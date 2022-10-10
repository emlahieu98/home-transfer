/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui'
import Masonry from 'react-masonry-component'
import SectionHeading from 'components/section-heading'
import BlogPost from 'components/cards/blog-post'
import { useState, useEffect } from 'react'

const masonryOptions = { originTop: true }

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const Blog = () => {
    const [postList, setPostList] = useState([])

    useEffect(() => {
        async function fetchPostList() {
            try {
                const requestURL = `${BASE_URL}/api/posts?page=1&page_size=6`

                const response = await fetch(requestURL)

                const responseJson = await response.json()

                const { data } = responseJson

                setPostList(data)
            } catch (error) {
                console.log('🚀 error', error.message)
            }
        }
        fetchPostList()
    }, [])

    return (
        <Box as="section" id="blog" sx={styles.section}>
            <Container>
                <SectionHeading sx={styles.heading} title="Tin tức" />
                <Masonry options={masonryOptions} sx={styles.postContainer}>
                    {postList?.map((post, index) => {
                        let item = {
                            id: post.id,
                            slug: post.slug,
                            thumbnail: post.image,
                            showDescription: true,
                            title: post.title,
                            description: post.content
                                .slice(0, 200)
                                .replace(/<[^>]+>/g, ''),
                        }
                        return <BlogPost key={post.id} post={item} />
                    })}
                </Masonry>
            </Container>
        </Box>
    )
}

export default Blog

const styles = {
    section: {
        pt: [8, null, null, 9, null, 11],
        pb: [8, null, null, 9, null, 11],
        position: 'relative',
    },
    heading: {
        mb: [6, 6, 7, 11],
    },
}
