import React from 'react';
import PropTypes from 'prop-types';
import Shipment from './Shipment';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class Order extends React.Component {

    static propTypes ={ 
        burgers: PropTypes.object,
        order: PropTypes.object,
        deleteFromOrder: PropTypes.func
    }

renderOrder = (key) => {
    const burger = this.props.burgers[key];
            const count = this.props.order[key];
            const isAvailable = burger && burger.status === 'available';

            if(!burger) return null

            if(!isAvailable){
                return(
                    <CSSTransition classNames='order' key={key} timeout={{enter: 500, exit: 500}}>
                     <li className = 'unavailable' key={key}>
                    Вибачте , {burger ? burger.name : 'бургер'} недоступний!
                </li>
                </CSSTransition>
                )}
   return(
        <CSSTransition classNames='order' key={key} timeout={{enter: 500, exit:500}}>
        <li  key={key} >
            <span>
                <TransitionGroup component='span' className='count'>
                    <CSSTransition className='count' key={count} timeout={{enter: 500, exit: 500}} >
                        <span>{count}</span>
                        </CSSTransition>
                    шт.{burger.name}
                    <span>{count * burger.price}₴</span>
                    <button className='cancelItem'
                    onClick = {()=> this.props.deleteFromOrder(key)}
                    >&times;</button>
                </TransitionGroup>
            </span>
        </li>
    </CSSTransition>
    );
}

    render() {
        const orderIds = Object.keys(this.props.order)
        const total = orderIds.reduce((prevTotal, key) => {
            const burger = this.props.burgers[key];
            const count = this.props.order[key];

            const isAvailable = burger && burger.status === 'available';
            if (isAvailable) {
                return prevTotal + burger.price * count;  
            }

            return prevTotal;

        }, 0);

        return(
            <div className='order-wrap'>
                <h2>Ваше замовлення</h2>
                <TransitionGroup component='ul' className='order'>
                {orderIds.map(this.renderOrder)}
                </TransitionGroup>
               {total > 0 ? (< Shipment total={total}/>
               ) :
               (<div className='nothingSelected' > Виберіть страву і добавте в замовлення </div> ) }
            </div>
        )
    }
}

export default Order;