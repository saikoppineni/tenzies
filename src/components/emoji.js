function emoji(props){
    if(props.score<5)
    return <h6>good luck</h6>
    else
    return <h6>bad luck</h6>
}

export default emoji;