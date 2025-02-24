import React from 'react'
import styles from './Main.module.css'
import Drop_down from './DropDown/Drop_down'
import Table from './Table/Table'
const Main = () => {
    return (
        <main className={styles['main']}>
            <Drop_down />
            <Table />
        </main>
    )
}

export default Main