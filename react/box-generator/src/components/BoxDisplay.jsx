export const BoxDisplay = (props) => {
    const { box } = props;
    // console.log(box.color)
    
    const boxStyle = {
        backgroundColor: `${box.color}`,
        width: `${ box.width }px`,
        height: `${ box.height }px`
    };
    
    return(
        <div>
            <div style={ boxStyle }></div>
        </div>
    )
}