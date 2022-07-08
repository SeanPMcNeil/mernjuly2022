export const BoxDisplay = (props) => {
    // const { boxColor } = props;
    const { boxColor, boxWidth, boxHeight } = props;

    const boxStyle = {
        backgroundColor: `${ boxColor}`,
        width: `${ boxWidth }px`,
        height: `${ boxHeight }px`
    };
    
    return(
        <div style={ boxStyle }>

        </div>
    )
}