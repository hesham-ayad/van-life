import { useContext } from "react";

import { HostVanContext } from "./HostVanLayout";

function HostVanPhotos() {
    const { imageUrl } = useContext(HostVanContext) || {}

    return (
        <img src={imageUrl} max-width="150px" alt="" />
    )
}

export default HostVanPhotos