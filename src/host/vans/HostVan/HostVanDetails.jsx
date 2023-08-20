import { useContext } from "react";

import { HostVanContext } from "./HostVanLayout";


function HostVanDetails() {
    const {name, type, description } = useContext(HostVanContext) || {}

    return (
        <div>
            <p><span>Name:</span> {name}</p>
            <p><span>Category:</span> {type}</p>
            <p><span>Description:</span> {description}</p>
            <p><span>Visibility:</span> Public</p>
        </div>
    )
}

export default HostVanDetails