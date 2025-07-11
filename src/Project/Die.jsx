export default function dieValues(details) {
    const styles = {
        backgroundColor : details.isClicked ? "red" : "gray"
    }

    return (
        <button 
            style={styles}
            onClick={() => details.hold(details.id)}>
            {details.value}</button>
    )
}

// export default function Die(props) {
//     const styles = {
//         backgroundColor: props.isClicked ? "blue" : "gray"
//     }

//     return (
//         <button 
//             style = {styles}
//             onClick = {() => props.hold(props.id)}
//         >{props.value}</button>
//     )
// }