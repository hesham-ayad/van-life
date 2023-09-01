import { useOutletContext } from "react-router-dom";


function HostVanPricing() {

    const { price } = useOutletContext() || {}

    return price ?
        (
            <p><span>${price}</span>/day</p>
        )
        :
        <h6>loading ...</h6>
}

export default HostVanPricing