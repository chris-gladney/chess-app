function Square({letterSquare, numberSquare}) {
    return <div className={`square unused ${letterSquare} ${numberSquare}`}>
        <p>{letterSquare} {numberSquare}</p>
    </div>
}

export default Square;
