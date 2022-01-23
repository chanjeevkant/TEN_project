import React from 'react'


function Copyright() {
    const date = new Date()
    var year = date.getFullYear()

    return (
        <div className="copyright">
            <h5> @ {year} Limitless Technologies - The Entrepreneurship Network</h5>
        </div>
    )
}

export default Copyright
