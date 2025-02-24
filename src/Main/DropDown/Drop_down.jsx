import React from "react";
import styles from './Drop_down.module.css'
let handleSelect = (event) => {
    console.log(event.target.value);

};
const Drop_down = () => {

    return (
        <select
            name="department-list" id="department-list"
            className={styles['drop-down']}

            onChange={handleSelect}
        >
            <option value="CSE">CSE</option>
            <option value="CSBS">CSBS</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="MECH">MECH</option>
            <option value="CIVIL">CIVIL</option>
        </select>
    );
};

export default Drop_down;
