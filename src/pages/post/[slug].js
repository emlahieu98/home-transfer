import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Post from '../../sections/postDetail';
import { useRouter } from 'next/router';
export default function PostDetails() {

    const router = useRouter()

    const { slug } = router.query

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO
                    title="Dịch vụ chuyển nhà online 24/7"
                    description="Chúng tôi cung cấp các giải pháp và chi phí vận chuyển nhà rẻ nhất Hà Nội !"
                />
            </Layout>
            <Post slug={slug} />
        </ThemeProvider>
    );
}
