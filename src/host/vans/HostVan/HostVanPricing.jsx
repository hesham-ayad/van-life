import { useOutletContext } from "react-router-dom";

export function HostVanPricing() {

    const { price } = useOutletContext()

    return (
        <p><span>${price}</span>/day</p>
    )
}