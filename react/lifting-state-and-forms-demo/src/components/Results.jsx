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
                        props.allChars.map((character) => {
                            return <tr>
                                <td>{ character.name }</td>
                                <td>{ character.realName }</td>
                                <td>{ character.power }</td>
                                <td>{ character.numSidekicks }</td>
                                <td>{ character.isAlive ? "Yes" : "No" }</td>
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