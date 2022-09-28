import React from 'react'
import { Box, Container, Image, Text } from 'theme-ui';


const postDetail = {
    id: '1',
    title: 'Bão Noru đang mạnh lên, mở rộng vùng rủi ro thiên tai cấp 4',
    slug: 'bao-nuru-dang-manh-len',
    content: 'TPO - Đến đầu giờ chiều nay (26/9), bão Noru đã mạnh lên cấp 13, giật cấp 15. Dự báo bão tiếp tục mạnh lên và duy trì cường độ khi áp sát đất liền nước ta. Thời gian bão quần thảo dữ dội nhất từ đêm 27 đến ngày 28/9. Vùng rủi ro thiên tai cấp 4 mở rộng ra Thừa Thiên Huế.Cường độ rất mạnh khi áp sát đất liền. Vào 13h ngày 26/9, tâm bão trên vùng biển phía Đông khu vực Bắc và Giữa Biển Đông, cách quần đảo Hoàng Sa khoảng 580km về phía Đông. Sức gió mạnh nhất vùng gần tâm bão mạnh cấp 12-13 (118-149km/giờ), giật cấp 15. Bán kính gió mạnh từ cấp 6, giật từ cấp 8 trở lên khoảng 230km tính từ tâm bão, bán kính gió mạnh từ cấp 10, giật từ cấp 12 trở lên khoảng 100km tính từ tâm bão.Theo ông Mai Văn Khiêm, Giám đốc Trung tâm Dự báo Khí tượng Thủy văn Quốc gia, bão Noru đang trong giai đoạn phát triển mạnh do gặp nhiều điều kiện thuận lợi như mặt biển ấm với nhiệt độ khoảng 31 độ và độ đứt gió nhỏ.Dự báo trong 24 giờ tới, bão di chuyển chủ yếu theo hướng Tây, mỗi giờ đi được 20-25km có xu hướng mạnh thêm.Đến 13h ngày 27/9, tâm bão ngay trên khu vực phía Nam quần đảo Hoàng Sa. Sức gió mạnh nhất vùng gần tâm bão mạnh cấp 13-14 (134-166km/giờ), giật cấp 17. Đây là thời điểm bão đạt cường độ mạnh nhất.',
    image: 'https://photo-cms-tpo.zadn.vn/w645/Uploaded/2022/dahtzbth-gznrxgahtb/2022_09_26/bao-so-4-15h-2609-1655.png'
}

const PostDetail = ({ slug }) => {
    return (
        <Box as="" id="post-detail" sx={styles.section}>
            <Container>
                <Box>
                    <Text as="p" sx={styles.title}>
                        {postDetail?.title}
                    </Text>
                    <Box sx={styles.image}>
                        <Image src={postDetail.image} alt="image-post" />
                    </Box>
                    <Text as="p" sx={styles.content}>
                        {postDetail?.content}
                    </Text>
                </Box>
            </Container>
        </Box>
    );
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
        objectFit: 'contain'
    },
    content: {
        pt: '10px',
        textAlign: 'justify',
        minHeight: ['500px'],
        lineHeight: [1.7]
    }

};
