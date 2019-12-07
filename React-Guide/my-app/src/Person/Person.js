import React from 'react'




const person = (props)=>{
    //JSX中，如果要用javascript， 需要用{}
    // /*
    //     在两个tag之间的内容是props.children,可以放一些复杂的html
    //  */
    return (
        <div>
            <p>I am {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>

        </div>
    )
}

// module.exports = person;  运行出错！
//
//
//

export default person;