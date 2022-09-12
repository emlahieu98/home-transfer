/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/icons/service1.png';
import icon2 from 'assets/images/icons/service2.png';
import icon3 from 'assets/images/icons/service3.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Tư vấn hỗ trợ & báo giá',
    description: `Nhân viên tư vấn sẽ tiếp nhận thông tin tư vấn khách hàng qua Hotline/Zalo và báo giá`,
  },
  {
    id: 3,
    icon: icon2,
    title: 'Vấn chuyển trọn gói',
    description: `Ký hợp đồng chuyển nhà, lên kế hoạch và tiến hành vận chuyển nhà cho quý khách hàng.`,
  },
  {
    id: 4,
    icon: icon3,
    title: 'Nghiệm thu và thanh toán',
    description: `Sau khi tháo lắp – vận chuyển – lắp đặt hoàn tất. Hai bên sẽ tiến hành nghiệm thu và thanh toán hợp đồng.`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Dịch vụ của chúng tôi"
          description=""
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
