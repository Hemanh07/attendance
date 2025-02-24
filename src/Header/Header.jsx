import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles['header']} >
            <section >

                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/4/43/Itechlogo.png'
                    alt='psgitech'
                    height="70px"
                    width="70px"
                />
            </section>
            <h1>
                PSG iTech - Attendance Monitor
            </h1>

        </header>
    )
}

export default Header