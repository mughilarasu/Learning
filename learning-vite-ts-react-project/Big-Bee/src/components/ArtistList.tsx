import useCart from "../hooks/useCart"
import useArtists from "../hooks/useArtists"
//import { UseArtistsContextType } from "../context/ArtistProvider"
import { ReactElement } from "react"
import Artist from "./Artist"

const ArtistList = () => {
    const { dispatch, REDUCER_ACTIONS, cart } = useCart()
    const { artists } = useArtists()

    let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>

    if (artists?.length) {
        pageContent = artists.map(artistItem => {
            const inCart: boolean = cart.some(item => item.id === artistItem.id)

            return (
                <Artist
                    key={artistItem.id}
                    artistItem={artistItem}
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                    inCart={inCart}
                />
            )
        })
    }
console.log('pageContent',pageContent)
    const content = (
        <main className="main main--artists">
            {pageContent}
        </main>
    )

    return content
}
export default ArtistList