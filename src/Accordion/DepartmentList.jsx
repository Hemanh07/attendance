import React from 'react'
import { viewList } from './viewList'
import ListView from './ListView'



const DepartmentList = () => {
    let listContent = viewList.map((listItem) => {
        return <ListView
            key={viewList.indexOf(listItem)}
            listItem={listItem}
        />
    });
    return (
        <div>
            {
                listContent || "Something went wrong."
            }
        </div>
    )
}

export default DepartmentList