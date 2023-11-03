import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
const CartWidgetComponent = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faCartPlus} />
            <span>10</span>
        </div>
    )
}

export default CartWidgetComponent;