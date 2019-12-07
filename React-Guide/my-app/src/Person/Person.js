import React from 'react'

const person = ()=>{
    //JSX中，如果要用javascript， 需要用{}
    return <p>I am a person and I am {Math.floor(Math.random()*30)} years old</p>
}

// module.exports = person;  运行出错！
//
//
//

export default person;