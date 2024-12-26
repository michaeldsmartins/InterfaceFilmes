import { FaRegStar, FaStar } from "react-icons/fa6"
import './index.scss'
export interface props {
    rating: number
}


export default function rating(props: props) {
    
    const numstar = Math.round(props.rating / 2)
    
    const fullstar = []
    const zerostar = []

    for(let i = 0; i < 5; i++) {
        if (i < numstar) {
                fullstar.push(i)
        } else {
                zerostar.push(i)
        }
    }
    

    return (
        
            <div className="rating">
                {fullstar.map(index =>
                    <FaStar key={index} />
                )}
                {zerostar.map(index =>
                    <FaRegStar key={index} />
                )}
                
                
            </div>
        
    )
}