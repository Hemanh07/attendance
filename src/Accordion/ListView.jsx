import React, { useState } from 'react'
import ListItem from './ListItem';

const ListView = (props) => {

    let { listItem } = props;
    let [toggleState, setToggleState] = useState(false);
    let handleToggle = () => {
        let newState = !toggleState;
        setToggleState(newState);

    }
    let childList = listItem.children && listItem.children.map((listItem) => {
        return <ListView
            listItem={listItem}
        />
    })


    return (
        <div>
            <h1
                onClick={handleToggle}
            >
                {
                    listItem.title
                }
            </h1>
            <section>
                {
                    (toggleState && listItem.children) && childList
                }
            </section>
        </div>
    )
}

export default ListView