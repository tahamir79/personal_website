function SquareButton(props) {
    console.log("Props in Input :", props);

    return (
        <div>
            <button>{props.text}</button>
        </div>
    )
}

export default SquareButton