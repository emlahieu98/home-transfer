import React from 'react'
import { jsx, Box, Container, Button, Image, Link } from 'theme-ui'
import { FiPhoneIncoming } from 'react-icons/fi'
const info = () => {
    return (
        <Box id="" sx={styles.info}>
            <Box sx={styles.contentWrapper}>
                <Box sx={styles.circle}>
                    <FiPhoneIncoming />
                </Box>
                <a sx={styles.link} href="tel:0356.254.444">
                    0356.254.444
                </a>
            </Box>
        </Box>
    )
}

export default info

const styles = {
    info: {
        width: '170px',
        backgroundColor: '#0A8080',
        borderRadius: '0 15px 15px 0px',
        padding: '7px',
        a: {
            color: '#faeb0b',
            textDecoration: 'none',
            p: '6px',
        },
        position: 'fixed',
        bottom: '100px',
    },
    contentWrapper: {
        display: 'flex',
        justifyContent: 'center',
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
}
