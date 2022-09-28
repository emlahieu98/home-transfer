/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import BlogPost from 'components/cards/blog-post';
import thumb1 from 'assets/images/blog/1.png';
import thumb2 from 'assets/images/blog/2.png';
import thumb3 from 'assets/images/blog/3.png';
import thumb4 from 'assets/images/blog/4.png';
import { useState, useEffect } from 'react'


const data = [
  {
    id: 1,
    slug: 'nen-lua-chon-dich-vu-nao',
    thumbnail: thumb1,
    showDescription: true,
    title: `Nên lựa chọn dịch vụ chuyển đồ đạc giá rẻ uy tín ở đâu ?`,
    description: `
    Hiện nay, trên thị trường có rất nhiều những đơn vị cung cấp các loại hình dịch vụ vận chuyển, chính vì thế, người tiêu dùng có thể dễ dàng tìm kiếm được một đơn vị khi có nhu cầu. Tuy nhiên, câu hỏi đặt ra cho khách hàng là nên lựa chọn...`,
  },
  {
    id: 2,
    slug: 'tai-sao-nen-lua-chon-dich-vu-nay',
    thumbnail: thumb3,
    showDescription: false,
    title: `Tại sao nên sử dụng dịch vụ chuyển nhà trọn gói`,
    description: `
    Không phải ngẫu nhiên mà Vận chuyển như ý đang là cái tên được người tiêu dùng ưu tiên lựa chọn mỗi khi có nhu cầu sử dụng các loại hình dịch vụ vận chuyển. Cùng tìm hiểu những lý do tại sao nên sử dụng dịch vụ chuyển nhà trọn gói Như Ý để hiểu vì sao chúng tôi là một trong những đơn vị cung cấp dịch vụ được tin dùng hàng đầu hiện nay...`,
  },
  {
    id: 3,
    slug: 'chuyen-nha-tron-goi',
    thumbnail: thumb3,
    showDescription: false,
    title: `Chuyển nhà trọn gói vào mùa đông có khó khăn gì không?`,
    description: `Mùa đông là thời điểm mà nhiều gia đình lựa chọn để chuyển đến nơi ở mới.Đồng thời, đây là lúc mà nhiều hợp đồng thuê nhà đã hết hạn hoặc các doanh nghiệp muốn thay đổi địa điểm để mở rộng kinh doanh, lấy vận may trong năm mới. Tuy nhiên, đây cũng là thời điểm mà bạn sẽ gặp phải một số khó khăn khi quyết định chuyển nhà trọn gói...`,
  },
  {
    id: 4,
    slug: 'nhung-viec-quan-trong',
    thumbnail: thumb2,
    showDescription: true,
    title: `Những việc làm quan trọng trước khi chuyển chuyển nhà`,
    description: `Việc chuyển về ngôi nhà mới là việc cực kỳ quan trọng bởi đây sẽ là nơi mà gia đình bạn bắt đầu cuộc sống mới. Chính vì vậy, trước khi chuyển nhà bạn cần phải làm được 2 việc cực kỳ quan trọng: làm sạch không gian và loại bỏ nguồn khí tiêu cực...`,
  },
  {
    id: 5,
    slug: 'mot-so-luu-y',
    thumbnail: thumb4,
    showDescription: false,
    title: `Một số lưu ý khi chọn dịch vụ chuyển nhà giá rẻ`,
    description: `Chuyển nhà giá rẻ là điều mà bạn sẽ cần nắm được để chắc rằng công việc chuyển nhà của mình sẽ được diễn ra một cách thuận lợi và an toàn, đảm bảo được lợi ích của mình. Những lưu ý đó sẽ được Vận chuyển Như Ý chia sẻ qua bài viết sau đây.`,
  },
];



const masonryOptions = { originTop: true };
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const Blog = () => {

  const [postList, setPostList] = useState([])


  useEffect(() => {
    async function fetchPostList() {

      try {
        const requestURL = `${BASE_URL}/api/posts?page=1&page_size=5`

        const response = await fetch(requestURL)

        const responseJson = await response.json()

        const { data } = responseJson
        console.log("🚀 ~ file: blog.js ~ line 80 ~ fetchPostList ~ data", data)

        setPostList(data)

      } catch (error) {
        console.log("🚀 error", error.message)

      }

    }
    fetchPostList()
  }, [])

  return (
    <Box as="section" id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Tin tức"
        />
        <Masonry options={masonryOptions} sx={styles.postContainer}>
          {data?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [8, null, null, 9, null, 11],
    pb: [8, null, null, 9, null, 11],
    position: 'relative',
  },
  heading: {
    mb: [6, 6, 7, 11],
  },
};
