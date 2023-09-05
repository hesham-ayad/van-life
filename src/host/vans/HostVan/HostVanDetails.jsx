import { useOutletContext } from "react-router-dom"

function HostVanDetails() {
    const { name, type, description } = useOutletContext()

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