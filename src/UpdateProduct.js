import Header from './Header';
import {withRouter} from 'react-router-dom'
function UpdateProduct() {
    return (
        <><Header />
            <div>
            <h1>Update Product Page</h1>
        </div></>
    )
}

export default withRouter(UpdateProduct)