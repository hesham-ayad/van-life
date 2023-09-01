import { useOutletContext } from "react-router-dom";


function HostVanPhotos() {

    const { imageUrl } = useOutletContext() || {}

    return imageUrl ?
        (
            <img src={imageUrl} max-width="150px" alt="" />
        )
        :
        <h6>loading ...</h6>
}

export default HostVanPhotos