import './Card.css'

export default function Card({suite}) {
    return (
        <div className='Card'>
            <img className='cardImg' src= {suite.img} alt= {suite.name}/>
            <h2>{suite.name}</h2>
            <div><h3>SIZE </h3> {suite.size}</div>
            <div><h3>VIEW </h3> {suite.view}</div>
            <ul>
                <li>{suite.features[0]}</li>
                <li>{suite.features[1]}</li>
                <li>{suite.features[2]}</li>
            </ul>
        </div>
    )
};