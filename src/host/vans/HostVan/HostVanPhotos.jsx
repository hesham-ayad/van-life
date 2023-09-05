import { useOutletContext } from "react-router-dom";


function HostVanPhotos() {

    const { imageUrl } = useOutletContext()

    return (
        <img src={imageUrl} max-width="150px" alt="" />
    )
}

export default HostVanPhotos