import { useOutletContext } from "react-router-dom";

export function HostVanPhotos() {

    const { imageUrl } = useOutletContext()

    return (
        <img src={imageUrl} max-width="150px" alt="" />
    )
}