import './Details.css'

interface Obj {
    avatar: string,
  details: {
    city: string,
    company: string,
    position: string
  },
  id: number,
  name: number
}
interface Props {
    info: Obj
}

const Details = (info: Props) => {
    const {avatar, name, details} = info.info;
    return (
        <div className="info-container">
            
                <img src={avatar} className='img'/>
            <div className="info name">
                {name}
            </div>
            <div className="info city">
                {details.city}
            </div>
            <div className="info company">
                Company: {details.company}
            </div>
            <div className="info position">
                Position: {details.position}
            </div>
            
        </div>
    )
}

export default Details;