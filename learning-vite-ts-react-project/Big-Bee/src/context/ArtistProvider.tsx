import { ReactElement, createContext, useEffect, useState } from "react";

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

export type ArtistType = {
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
}


const initState: ArtistType[] = []

export type UseArtistsContextType = { artists: ArtistType[] }

const initContextState: UseArtistsContextType = { artists: [] }

const ArtistContext = createContext<UseArtistsContextType>(initContextState)

type ChildrenType = {
    children?: ReactElement | ReactElement[]
}

export const ArtistProvider = ({ children }: ChildrenType): ReactElement => {

    const [artists, setArtists] = useState<ArtistType[]>(initState)

    useEffect(() => {
        const fetchArtists = async (): Promise<ArtistType[]> => {
            const data = await fetch('http://localhost:3500/artists').then((res) => {
                return res.json()
            }).catch((err) => {
                if (err instanceof Error) {
                    console.log(err)
                }
            })

            return data
        }
        fetchArtists().then((res: ArtistType[]) => {
            setArtists(res)
        })
    }, [])

    return (
        <ArtistContext.Provider value={{ artists }}>
            {children}
        </ArtistContext.Provider>
    )

}

export default ArtistContext