/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useEffect } from 'react'
import { jsx, Box, Container, Button, Flex, Checkbox, Label } from 'theme-ui'
import { rgba } from 'polished'
import SectionHeading from 'components/section-heading'
import Input from 'components/input'
import illustration from 'assets/images/subscribe-bg.png'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

function validatePhoneNumber(input_str) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

    return re.test(input_str)
}

const SubscribeUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!validatePhoneNumber(e.target['email'].value)) {
            alert('Vui lòng nhập số điện thoại chính xác để nhận tư vấn')
        } else {
            fetchSendMail(e.target['email'].value)
        }
    }

    async function fetchSendMail(phoneNumber) {
        try {
            const requestURL = `${BASE_URL}/api/common/send-mail`

            const response = await fetch(requestURL, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phoneNumber,
                }),
            })

            const responseJson = await response.json()

            if (responseJson)
                alert(
                    'Xin cám ơn bạn đã đăng kí tư vấn, vui lòng chờ ít phút , nhân viên chúng tôi sẽ gọi điện thoại hỗ trợ cho bạn'
                )
            window.location = '/'
        } catch (error) {
            console.log('🚀 error', error.message)
        }
    }

    return (
        <Box as="section" sx={styles.section} variant="section.subscribe">
            <Container>
                <Box sx={styles.contentWrapper}>
                    <SectionHeading
                        sx={styles.heading}
                        title="Để lại số điện thoại để nhận tư vấn miễn phí"
                    />
                    <Box
                        as="form"
                        sx={styles.subscribe}
                        onSubmit={handleSubmit}
                    >
                        <Flex sx={styles.inputGroup}>
                            <Label htmlFor="email" variant="styles.srOnly">
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="input"
                                className="email-input"
                                placeholder="Nhập số điện thoại"
                            />
                            <Button variant="secondary">Tư vấn</Button>
                        </Flex>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default SubscribeUs

const styles = {
    section: {
        background: [
            'none',
            null,
            null,
            `#F8F0EA url(${illustration}) no-repeat center bottom / contain`,
        ],
        pt: [8, null, null, null, 10],
        pb: [8, null, null, 9, 11],
    },
    contentWrapper: {
        backgroundColor: '#fff',
        borderRadius: 15,
        p: [null, null, null, '40px 110px 50px', '50px 50px', '40px'],
        gap: '50px',
        display: ['block', null, 'grid', 'block', 'grid'],
        alignItems: 'center',
        gridTemplateColumns: ['repeat(2, 1fr)'],
    },
    heading: {
        textAlign: ['center', null, 'left', 'center', 'left'],
        mb: ['30px', null, null, null, 0],
        ml: 0,
        h2: {
            fontSize: [6, null, null, null, null, 8, 9],
        },
        p: {
            lineHeight: 1.87,
            marginTop: 1,
            ml: ['auto', null, null, null, 0],
            mr: ['auto', null, null, null, 0],
            maxWidth: 420,
        },
    },
    subscribe: {
        '.email-input': {
            mr: [0, null, null, '15px'],
            minHeight: ['50px', '50px', '60px'],
        },
        button: {
            minHeight: ['50px', '50px', '60px'],
            fontSize: ['14px', '14px', '16px'],
            mt: ['15px', null, null, 0],
        },
    },
    inputGroup: {
        flexDirection: ['column', null, null, 'row'],
    },
    checkbox: {
        mt: ['24px'],
        label: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: 1.14,
            color: rgba('#9095AD', 0.9),
            zIndex: 10,
            svg: {
                path: {
                    fill: '#EFF3F7',
                },
            },
            '&.checked': {
                svg: {
                    path: {
                        fill: 'primary',
                    },
                },
            },
        },
    },
}
