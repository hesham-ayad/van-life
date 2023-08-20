import { useContext } from "react";

import { HostVanContext } from "./HostVanLayout";

function HostVanPricing() {
    const { price } = useContext(HostVanContext) || {}

    return (
        <p><span>${price}</span>/day</p>
    )
}

export default HostVanPricing