import { ArtistType } from "../context/ArtistProvider"
import { ReducerActionType, ReducerAction } from "../context/CartProvider"
import { ReactElement, memo } from "react"

type PropsType = {
    artistItem: ArtistType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean,
}

const Artist = ({ artistItem, dispatch, REDUCER_ACTIONS, inCart }: PropsType): ReactElement => {

    const img: string = new URL(`../images/${artistItem.id}.webp`, import.meta.url).href
    console.log(img)

    const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...artistItem, qty: 1 } })

    const itemInCart = inCart ? ' → Item in Cart: ✔️' : null

    const content =
        <article className="artistItem">
            <h3>{artistItem.first_name}</h3>
            <img src={img} alt={artistItem.first_name} className="artist__img" />
            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(artistItem.rate.per_hour))}{itemInCart}</p>
            <button onClick={onAddToCart}>Add to Cart</button>
        </article>

    return content
}

function areArtistsEqual({ artistItem: prevArtist, inCart: prevInCart }: PropsType, { artistItem: nextArtist, inCart: nextInCart }: PropsType) {
    return (
        Object.keys(prevArtist).every(key => {
            return prevArtist[key as keyof ArtistType] ===
                nextArtist[key as keyof ArtistType]
        }) && prevInCart === nextInCart
    )
}
const MemoizedArtist = memo<typeof Artist>(Artist, areArtistsEqual)

export default MemoizedArtist