import { useOutletContext } from "react-router-dom";


function HostVanPricing() {

    const { price } = useOutletContext()

    return (
        <p><span>${price}</span>/day</p>
    )

}

export default HostVanPricing