import React from 'react';
import PropTypes from 'prop-types';


class Shipment extends React.Component {

static propTypes = {
    total: PropTypes.number
}

    render(){
        const {total} = this.props;
        const shipping = total > 0 && total < 500 ? 150 : 0;
        const shippingNeon = shipping === 0 ?
         (<span className='font-effect-neon total_wrap-cheap' > {shipping} ₴ </span>
        ) : (
            <span>{shipping} ₴</span>
        ) ;
        return(
            <div className='total'>
            <div className='total_wrap'>
                <div  >
                    <div>
                        Доставка : { total > 0 ? shippingNeon : null }
                        <div className='total_wrap-free' >
                            {total < 500 ? ` Замовте ще на ${500 - total } ₴ для безкоштовної доставки` : null}
                        </div>
                    </div>
                </div>
                <div className='total_wrap-final'>
                    Сума: {total}₴
                </div>
            </div>
        </div>
        )
    }
}

export default Shipment;