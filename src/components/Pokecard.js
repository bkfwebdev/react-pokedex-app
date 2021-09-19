import React from 'react'

export default function PoKecard (props) {
    return (
        <div>
             <p>Name:{props.name}</p>
             <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}/>
             <p>Type:{props.type}</p>
             <p>EXP:{props.exp}</p>
        </div>
    )
}

