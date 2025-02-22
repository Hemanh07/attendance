import React from 'react'

const ListItem = (props) => {
    let { item } = props;

    return (
        <div>{item}</div>
    )
}

export default ListItem