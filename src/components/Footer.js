import React from 'react'
import Socialmedia from '../components/Socialmedia'
import Contact from './Contact'
import Newsletter from './Newsletter'

function Footer() {
    return (<section id="footer">
        <div className="footer Linkers">
            <Socialmedia/>
            <Newsletter/>
            <Contact/>
        </div>
        </section>
    )
}

export default Footer
