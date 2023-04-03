import React from "react";

const myStyle = {
    backgroundColor: 'grey'
}

const val = 10
const InlineComp = (props) => {
    return (
        <h3>Element in JSX {10 * props.mult}</h3>
    )
}

const element = <h3>Element in JSX {10 * 5}</h3>

const Counter = () => {

    const [getCounter, setCounter] = React.useState(0)
    const [gettext, setText] = React.useState("Counter")
    const [isStart, setStart] = React.useState(false)

    var c = 1;
    const inc = () => {
        // alert('hi')
        // c++;
        // console.log(c)
        setCounter(c => c + 1)
        setCounter(c => c + 1)
        setText('Counter: ')
    }
    const dec = () => {
        setCounter(getCounter - 1)
    }

    return (
        <>
            {!isStart && 
                <button
                    className="btn btn-success"
                    onClick={()=>setStart(true)}
                >Start</button>
            }

            {isStart &&
                <>
                <InlineComp mult={7} />
                <p style={myStyle}>This is Sample Paragraph</p>
                <h3>{gettext}{getCounter}</h3>
                <button
                    className="btn btn-primary"
                    onClick={inc}
                >Increment</button>
                <button
                    className="btn btn-primary"
                    onClick={dec}
                    disabled={getCounter <= 0 ? true : false}
                >Decrement</button>
                </>
            }
        </>
    )
}

function Counter2() {
    return <h3>Counter 2 Component</h3>
}

export { Counter, Counter2 };