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
            <nav>
                <ul className={styles["nav-links"]}>

                    <li>
                        <a
                            href="#"
                        >
                            Home
                        </a>
                    </li>



                    <li>
                        <a
                            href="contact"
                        >
                            Contact Us
                        </a>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Header