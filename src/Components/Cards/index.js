import React from 'react'
import Card from '../Card'
import './style.css'
import ecobags from '../../assets/ecobags.png';
import impossiblefoods from '../../assets/impossiblefoods.png'
import elevate from '../../assets/elevate.png';
import holganix from '../../assets/holganix.png';



class Cards extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: [
                {
                    img: ecobags,
                    name: "Eco Bags",
                    description: 'We produce responsibly made and sourced bags so that reusable becomes a way of life.'
                },
                {
                    img: impossiblefoods,
                    name: 'Impossible Foods Inc',
                    description: 'We use plans to make the best meats and cheeses you’ll ever eat'
                },
                {
                    img: elevate,
                    name: "Elevate Structure",
                    description: 'A dream of developing profitable real estate by building eco-friendly structures.'
                },
                {
                    img: holganix,
                    name: 'Holganix',
                    description: 'Environmentally-friendly lawn care products that contain natural microorganisms.'
                }
            ]
        }
    }





    render() {
        const { cards } = this.state;
        const { filter } = this.props;
        return (
          <div className="cardWrapper">
            {cards.map((card, key) => {
              return (
                <React.Fragment>
                  {card.name.includes(filter) && (
                    <Card
                      key={key}
                      name={card.name}
                      img={card.img}
                      description={card.description}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        );
      }
    }
    
    export default Cards;