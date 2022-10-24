import { jsx, Box, Container, Button } from 'theme-ui'
import Sticky from 'react-stickynode'
import Logo from 'components/logo'
import { NavLink } from 'components/link'
import { DrawerProvider } from 'contexts/drawer/drawer-provider'
import { FiPhoneIncoming } from 'react-icons/fi'
import { FaBuilding } from 'react-icons/fa'
import { FcAlarmClock } from 'react-icons/fc'
export default function index() {
    return (
        <DrawerProvider>
            <Box as="info" sx={styles.header}>
                <Container>
                    <Box sx={styles.infoWrapper}>
                        <Box sx={styles.logoWrapper}>
                            <Logo sx={styles.logo} />
                        </Box>
                        <Box sx={styles.info}>
                            <Box sx={styles.item}>
                                <Box sx={styles.circle}>
                                    <FiPhoneIncoming />
                                </Box>
                                <Box sx={styles.phone}>
                                    <p>0356.254.444</p>
                                    <p>chuyennhanhuyhanoi@gmail.com</p>
                                </Box>
                            </Box>
                            <Box sx={styles.item}>
                                <Box sx={styles.circle}>
                                    <FaBuilding />
                                </Box>
                                <Box sx={styles.phone}>
                                    <p>Toà nhà An Bình, 521 Cổ Nhuế</p>
                                    <p>Bắc Từ Liêm Hà Nội</p>
                                </Box>
                            </Box>
                            <Box sx={styles.item}>
                                <Box sx={styles.circle}>
                                    <FcAlarmClock />
                                </Box>
                                <Box sx={styles.phone}>
                                    <p>Thời gian làm việc</p>
                                    <p>24/7 các ngày trong tuần</p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </DrawerProvider>
    )
}

const styles = {
    logoWrapper: {
        margin: 'auto',
    },
    header: {
        backgroundColor: '#0A8080',
    },
    infoWrapper: {
        display: 'flex',
    },
    info: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 20px',
    },
    circle: {
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        padding: '10px',
        background: '#faeb0b',
        color: '#000',
        textAlign: 'center',
    },
    phone: {
        margin: '25px',
    },
}
