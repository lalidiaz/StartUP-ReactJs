import React from 'react'
import Card from '../Card'
import './style.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'

class Cards extends React.Component {
    render() {
        const startUps = [
            {
                img: image1,
                title: "CourseIt",
                description: 'Description CourseIt'
            },
            {
                img: image2,
                title: 'Endava',
                description: 'Description Endava'
            }
        ]

        
        return (
            <div className='cardWrapper'>
                {startUps.map((startUp, key)=>{
                    return(
                        <Card key={key} startUp={startUp}/>
                    )
                })}
            </div>
        )
    }
}
export default Cards