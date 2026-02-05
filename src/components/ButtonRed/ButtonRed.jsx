// import React from 'react';
// import { HashLink } from "react-router-hash-link";

// const ButtonRed = ({ children, onClick, className = '', to = '#' }) => {
//     return (
//         <HashLink
//             onClick={onClick}
//             to={to}
//             className={`
//                 flex items-center justify-center
//                 bg-red-600 text-white max-w-[300px]
//                 px-10 py-3 
//                 font-medium text-lg
//                 transition-all duration-300 ease-in-out
//                 hover:bg-red-500 hover:shadow-xl hover:-translate-y-0.5
//                 active:scale-95
//                 rounded-lg
//                 ${className}
//             `}
//         >
//             {children}
//         </HashLink>
//     );
// };

// export default ButtonRed;
import React from 'react'
import { HashLink } from "react-router-hash-link"

const ButtonRed = ({
    children,
    onClick,
    className = '',
    to,
}) => {

    const isTel = to?.startsWith('tel:')
    const isMail = to?.startsWith('mailto:')
    const isExternal = isTel || isMail || to?.startsWith('http')

    const classes = `
    flex items-center justify-center
    bg-red-600 text-white max-w-[300px]
    px-10 py-3
    font-medium text-lg
    transition-all duration-300 ease-in-out
    hover:bg-red-500 hover:shadow-xl hover:-translate-y-0.5
    active:scale-95
    rounded-lg
    ${className}
  `

    if (isExternal) {
        return (
            <a
                href={to}
                onClick={onClick}
                className={classes}
            >
                {children}
            </a>
        )
    }

    return (
        <HashLink
            to={to}
            onClick={onClick}
            className={classes}
        >
            {children}
        </HashLink>
    )
}

export default ButtonRed
