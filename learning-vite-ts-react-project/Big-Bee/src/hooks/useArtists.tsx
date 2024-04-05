import { useContext } from "react"
import ArtistContext from "../context/ArtistProvider"
import { UseArtistsContextType } from "../context/ArtistProvider"

const useArtists = (): UseArtistsContextType => {
    return useContext(ArtistContext)
}

export default useArtists