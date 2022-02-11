
export default function AppBar(props) {

    return(
        <div>
            <button onClick={() => props.changeScreen("matches")}>lista de matches</button>
            <button onClick={() => props.changeScreen("choose")}>Escolher</button>
        </div>
    )
}