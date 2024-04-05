import { useReducer, useMemo, createContext, ReactElement } from "react";

interface Location {
    location_id: string;
    location_name: string;
}

interface Address {
    street: string;
    state: string;
    city: string;
    pincode: string;
}

interface Category {
    category_id: string;
    category_name: string;
}

interface Event {
    event_id: string;
    event_name: string;
}

interface Language {
    language_id: string;
    language_name: string;
}

interface Equipment {
    equipment_id: string;
    equipment_name: string;
}

interface Rate {
    per_hour: string;
}

interface Review {
    reviewer_name: string;
    reviewer_comments: string;
}

interface DateDetails {
    from: string;
    to: string;
    event_id: string;
    event_name: string;
    notes: string;
    price: string;
}

interface DateDetailsAvailableOrConflicts {
    from: string;
    to: string;
}

export type CartItemType = {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    gender: string;
    total_years_of_experience: string;
    user_photo: string;
    is_verified: boolean;
    current_location: string;
    base_location: string;
    preferred_locations: Location[];
    phone_no: number;
    email: string;
    password: string;
    performer_id: string;
    rank: string;
    address: Address;
    about: string;
    main_category: string;
    other_categories: Category[];
    preferred_events: Event[];
    native_language: string;
    preferred_language: Language[];
    primary_equipment: string;
    preferred_equipments: Equipment[];
    performance_details: string;
    rate: Rate;
    ratings: string;
    reviews: Review[];
    dates_booked: {
        booking_id: number;
        dates: DateDetails[];
    }[];
    dates_available: DateDetailsAvailableOrConflicts[];
    dates_conflicts: DateDetailsAvailableOrConflicts[];
    is_disable_reviews: boolean;
    is_user_blocked: boolean;
    user_issue_reports: {
        name_of_user: string;
        issue: string;
    }[];
    user_payment_details: {
        bank_name: string;
        ifsc_code: string;
        upi_id: string;
        branch_name: string;
        account_number: string;
    }[];
    is_payment_verified: boolean;
    user_payment_transaction_history: {
        transaction_id: string;
        amount: string;
        type_of_payment: string;
        notes: string;
        type_of_transaction: string;
    }[];
    photos: {
        photo_id: string;
        photo_name: string;
        photo_caption: string;
        photo_size: string;
        photo_extension: string;
        photo_captured_location: string;
        photo_captured_event_name: string;
    }[];
    videos: {
        video_id: string;
        video_name: string;
        video_caption: string;
        video_size: string;
        video_extension: string;
        video_captured_location: string;
        video_captured_event_name: string;
    }[];
    qty: number
}

type CartStateType = { cart: CartItemType[] }

const initCartState: CartStateType = { cart: [] }

const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT"
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
    type: string;
    payload?: CartItemType,
}

const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD: {
            if (!action.payload) {
                throw new Error("action.payload mission in ADD action");
            }

            const { id, first_name, last_name, username, gender, total_years_of_experience, user_photo, is_verified, current_location, base_location, preferred_locations, phone_no, email, password, performer_id, rank, address, about, main_category, other_categories, preferred_events, native_language, preferred_language, primary_equipment, preferred_equipments, performance_details, rate, ratings, reviews, dates_booked, dates_available, dates_conflicts, is_disable_reviews, is_user_blocked, user_issue_reports, user_payment_details, is_payment_verified, user_payment_transaction_history, photos, videos } = action.payload;
            
            const filteredCart: CartItemType[] = state.cart.filter((item) => {
                item.id !== id
            })

            const itemExists: CartItemType | undefined = state.cart.find((item) => {
                item.id === id
            })

            const qty: number = itemExists ? itemExists.qty + 1 : 1

            return {
                ...state,
                cart: [...filteredCart, {
                    id, first_name, last_name, username, gender, total_years_of_experience, user_photo, is_verified, current_location, base_location, preferred_locations, phone_no, email, password, performer_id, rank, address, about, main_category, other_categories, preferred_events, native_language, preferred_language, primary_equipment, preferred_equipments, performance_details, rate, ratings, reviews, dates_booked, dates_available, dates_conflicts, is_disable_reviews, is_user_blocked, user_issue_reports, user_payment_details, is_payment_verified, user_payment_transaction_history, photos, videos,
                    qty
                }]
            }
        }

        case REDUCER_ACTION_TYPE.REMOVE: {
            if (!action.payload) {
                throw new Error("action.payload mission in REMOVE action");
            }

            const { id } = action.payload;
            
            const filteredCart: CartItemType[] = state.cart.filter((item) => {
                item.id !== id
            })

            return {
                ...state,
                cart: [...filteredCart]
            }
        }

        case REDUCER_ACTION_TYPE.QUANTITY: {
            if (!action.payload) {
                throw new Error("action.payload mission in QUANTITY action");
            }

            const { id, qty } = action.payload;
            
            const itemExists: CartItemType | undefined = state.cart.find((item) => {
                item.id === id
            })

            if(!itemExists){
                throw new Error("Item must exist in order to update quantity");
                
            }

            const updatedItem: CartItemType = { ...itemExists, qty }

            const filteredCart: CartItemType[] = state.cart.filter((item) => {
                item.id !== id
            })

            return {
                ...state,
                cart: [...filteredCart, updatedItem]
            }
        }

        case REDUCER_ACTION_TYPE.SUBMIT: {
            return {
                ...state,
                cart: []
            }
        }

        default:
            throw new Error("Unidentified reducer action type");

    }
}

const useCartContext = (initCartState: CartStateType) => {
    const [state, dispatch] = useReducer(reducer, initCartState)

    const REDUCER_ACTIONS = useMemo(()=>{
        return REDUCER_ACTION_TYPE
    },[])

    const totalItems: number = state.cart.reduce((previousValue: number, cartItem: CartItemType)=>{
        return previousValue + cartItem.qty
    }, 0)

    const totalPrice = new Intl.NumberFormat('en-US',{
        style: 'currency', currency: 'USD'}).format(
            state.cart.reduce((previousValue: number, cartItem: CartItemType)=>{
                return previousValue + (cartItem.qty * Number(cartItem.rate.per_hour))
            }, 0)
        )
  
    const cart = state.cart.sort((a:CartItemType, b:CartItemType) =>{
        const itemA = Number(a.id)
        const itemB = Number(b.id)
        return itemA - itemB
    })

    return {
        dispatch,
        REDUCER_ACTIONS,
        totalItems,
        totalPrice,
        cart
    }
}

export type UseCartContextType = ReturnType<typeof useCartContext>

const initCartContextState: UseCartContextType = {
    dispatch: () => {},
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
    totalItems: 0,
    totalPrice: '',
    cart: []
}


const CartContext = createContext<UseCartContextType>(initCartContextState)

type ChildrenType = {
    children?: ReactElement | ReactElement[]
}

export const CartProvider = ({ children }: ChildrenType): ReactElement => {


    return (
        <CartContext.Provider value={useCartContext(initCartState)}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext