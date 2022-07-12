const aliveButtonStyle = {
    backgroundColor: "lightgreen"
}

const deadButtonStyle = {
    backgroundColor: "salmon"
}

const Results = props => {
    return(
        <div>
            <h1>Results</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Real Name</th>
                        <th scope="col">Power</th>
                        <th scope="col"># of Sidekicks</th>
                        <th scope="col">Alive?</th>
                        <th scope="col">Universe</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.allChars.map((character, i) => {
                            return <tr>
                                <td>{ character.name }</td>
                                <td>{ character.realName }</td>
                                <td>{ character.power }</td>
                                <td>{ character.numSidekicks }</td>
                                <td style={ character.isAlive ? aliveButtonStyle : deadButtonStyle } onClick={ () => props.toggleLife(i) }>{ character.isAlive ? "Yes" : "No" }</td>
                                <td>{ character.universe }</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Results;