import { useOutletContext } from "react-router-dom"

function HostVanDetails() {
    const { name, type, description } = useOutletContext() || {}

    return name ?
        (
            <div>
                <p><span>Name:</span> {name}</p>
                <p><span>Category:</span> {type}</p>
                <p><span>Description:</span> {description}</p>
                <p><span>Visibility:</span> Public</p>
            </div>
        )
        :
        <h6>loading ...</h6>
}

export default HostVanDetails