import rcSuite from '../../assets/img/cards/nycro-suite-living-50796892.jpg';
import libertyTwoBed from '../../assets/img/cards/nycro-liberty-suite-50793956.jpg';
import madisonTwoBed from '../../assets/img/cards/nycro-nomad-madison-18547.jpg';
import liberty from '../../assets/img/cards/nycro-liberty-suite-50793953.jpg';
import madison from '../../assets/img/cards/nycro-suite-living-50796890.jpg';
import Card from '../Card/Card';
import './Rooms.css'

const suites = [
    {
        name: 'THE RITZ-CARLTON SUITE',
        img: rcSuite,
        size: '2100 SQ FT | 196 SQ M',
        view: 'DOWNTOWN MANHATTAN VIEW',
        features: [
            'Breathtaking views of downtown Manhattan',
            'Private wellness room with Peloton® Bike',
            'Exclusive Club Level Access'
        ]
    },
    {
        name: 'LIBERTY TWO BEDROOM SUITE',
        img: libertyTwoBed,
        size: '1410 SQ FT | 131 SQ M',
        view: 'DOWNTOWN MANHATTAN VIEW',
        features: [
            'Breathtaking views of downtown Manhattan',
            'Stylish design with spacious living area',
            'Abundant natural light'
        ]
    },
    {
        name: 'MADISON TWO BEDROOM SUITE',
        img: madisonTwoBed,
        size: '1300 SQ FT | 121 SQ M',
        view: 'DOWNTOWN MANHATTAN VIEW',
        features: [
            'Corner Two Bedroom Suite',
            'Elegantly appointed spacious living room',
            'Second bedroom with two double beds'
        ]
    },
    {
        name: 'LIBERTY SUITE',
        img: liberty,
        size: '850 SQ FT | 79 SQ M',
        view: 'DOWNTOWN MANHATTAN VIEW',
        features: [
            'Spectacular sunset views',
            'Abundant natural light',
            'Dining Area'
        ]
    },
    {
        name: 'MADISON SUITE',
        img: madison,
        size: '800 SQ FT | 75 SQ M',
        view: 'DOWNTOWN MANHATTAN VIEW',
        features: [
            'Corner One Bedroom Suite',
            'Elegantly appointed spacious living room',
            'Dining Area'
        ]
    }
];

export default function Rooms() {



    return (
        <div className='Rooms'>
            <div className='section'>
                <div className='left'>
                    <p>{`NEW YORK, NOMAD GUEST ROOMS & SUITES`}</p>
                    <h2>LUXURY MEETS SOPHISTICATION</h2>
                    <div className='btnCont'>
                        <button className='blackBtn'>RESERVE NOW</button>
                        <button >EXPLORE THE RITZ-CARLTON CLUB® LEVEL</button>
                    </div>
                </div>
                <div className='right'>
                    <p>{`Conceived as a pillar of the city’s renowned floral district, the hotel’s exceptionally detailed furniture and design draws inspiration from the beauty of nature. Suites are the epitome of luxury, their expansive living spaces filled with bespoke furnishings and artwork, while Club Lounge guests enjoy the attention of a dedicated concierge and curated culinary offerings throughout the day`}.</p>
                </div>
            </div>

            <nav className='nav2'>
                <a className='navItem2' href='/'>SUITES</a>
                <a className='navItem2' href='/'>CLUB LEVEL</a>
                <a className='navItem2' href='/'>ROOMS</a>
                <a className='navItem2' href='/'>COMPARE ROOM TYPES</a>
            </nav>

            <div className='cardCont'>
                {suites.map(e => {
                    return (<Card key={e.name} suite={e} />)
                }
                )}
            </div>
        </div>
    )
};