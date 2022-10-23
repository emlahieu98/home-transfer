import facebook from 'assets/images/icons/facebook.png'
import twitter from 'assets/images/icons/close.png'
import dribbble from 'assets/images/icons/dribbble.png'

export const menuItems = [
    {
        id: 2,
        title: 'Các cơ sở ',
        items: [
            {
                path: 'https://www.google.com/maps/dir//To%C3%A0+nh%C3%A0+An+B%C3%ACnh,+521+C%E1%BB%95+Nhu%E1%BA%BF,+B%E1%BA%AFc+T%E1%BB%AB+Li%C3%AAm+H%C3%A0+N%E1%BB%99i/@9.779349,105.6189045,11z?hl=vi-VN',
                label: 'CS1: Toà nhà An Bình, 521 Cổ Nhuế, Bắc Từ Liêm Hà Nội',
            },
        ],
    },
    {
        id: 3,
        title: 'Thông tin liên hệ',
        items: [
            {
                path: '#!',
                label: 'Số ĐT: 0356.254.444',
            },
            {
                path: '#!',
                label: `Email: chuyennhanhuyhanoi
        @gmail.com`,
            },
            {
                path: '#!',
                label: 'Google map',
            },
        ],
    },
    {
        id: 4,
        title: 'Dịch vụ của chúng tôi',
        items: [
            {
                path: '/chuyen-nha-tron-goi',
                label: 'Chuyển nhà trọn gói',
            },
            {
                path: '/chuyen-nha-tron-goi',
                label: 'Chuyển nhà liên tỉnh',
            },
            {
                path: '/cho-thue-xe-tai',
                label: 'Cho thuê xe tải',
            },
            {
                path: 'ban-thung',
                label: 'Bán thùng, hộp giấy',
            },
        ],
    },
    {
        id: 5,
        title: 'Liên hệ',
        items: [
            {
                path: 'https://www.facebook.com/profile.php?id=100057492768070',
                icon: facebook,
                label: 'Facebook',
            },
            {
                path: 'https://mail.google.com',
                icon: twitter,
                label: 'Gmail',
            },
            {
                path: '/',
                icon: dribbble,
                label: 'Số điện thoại',
            },
        ],
    },
]
