/** @jsxRuntime classic */
/** @jsx jsx */
import NextLink from 'next/link'
import { jsx, Link as A } from 'theme-ui'
import { Link as MenuLink } from 'react-scroll'
import { HiOutlineChevronRight } from 'react-icons/hi'

export function NavLink({ path, label, children, ...rest }) {
    return (
        <MenuLink
            to={path}
            spy={true}
            offset={-70}
            smooth={true}
            duration={500}
            className="nav-item"
            activeClass="active"
            onClick={() => handleClick({ path, label, children, ...rest })}
            {...rest}
        >
            {label}
        </MenuLink>
    )
}

export function Link({ path, label, children, ...rest }) {
    return (
        <NextLink href={path}>
            <A sx={styles.link} {...rest}>
                {children ? children : label}
            </A>
        </NextLink>
    )
}

export function LearnMore({ path, label, children, ...rest }) {
    return (
        <NextLink href={path}>
            <A sx={styles.learnMore} {...rest}>
                {label ?? 'Learn More'} <HiOutlineChevronRight />
            </A>
        </NextLink>
    )
}

export function handleClick({ path, label, children, ...rest }) {
    console.log(
        '🚀 ~ file: link.js ~ line 47 ~ handleClick ~ children',
        children
    )
    console.log('🚀 ~ file: link.js ~ line 47 ~ handleClick ~ path', path)
    if (path === 'chuyen-nha-tron-goi') {
        console.log(1)
        return (
            <NextLink href={path}>
                <A sx={styles.link} {...rest}>
                    {children ? children : label}
                </A>
            </NextLink>
        )
    }
}

const styles = {
    learnMore: {
        color: 'link',
        cursor: 'pointer',
        fontSize: [1, 1, 1, 2],
        fontWeight: 500,
        display: 'inline-flex',
        alignItems: 'center',
        svg: {
            transition: 'margin-left 0.3s ease-in-out 0s',
            ml: '3px',
        },
        ':hover': {
            svg: {
                ml: '5px',
            },
        },
    },
    link: {
        cursor: 'pointer',
    },
}
