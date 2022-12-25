import React from 'react'

const Content = ({ title, subtitle }) => {
    return (
        <div className="content">
            <div className="container-c">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

export default Content