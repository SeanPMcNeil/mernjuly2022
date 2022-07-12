import { useParams } from "react-router-dom";


const WordColor = props => {
    const { word, color1, color2 } = useParams();
    console.log(word, color1, color2);
    const style = {
        color: `${color1}`,
        backgroundColor: `${color2}`
    }
    return(
        <div style={ style } className="p-3">
            <h1>The word is: { word }</h1>
        </div>
    )
}

export default WordColor;