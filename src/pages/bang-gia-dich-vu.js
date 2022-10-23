import { ThemeProvider } from 'theme-ui'
import theme from 'theme'
import SEO from 'components/seo'
import Layout from 'components/layout'
import { useRouter } from 'next/router'
import { jsx, Box, Heading, Container } from 'theme-ui'

export default function ServicesDetails() {
    const router = useRouter()

    const { slug } = router.query

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO
                    title="Dịch vụ chuyển nhà online 24/7"
                    description="Chúng tôi cung cấp các giải pháp và chi phí vận chuyển nhà rẻ nhất Hà Nội !"
                />
                <Box as="" id="services-detail" sx={styles.section}>
                    <Container>
                        <Box>Dịch vụ chuyển nhà trọn gói</Box>
                    </Container>
                </Box>
            </Layout>
        </ThemeProvider>
    )
}
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
}
