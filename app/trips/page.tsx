import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservation"
import { ClientOnly } from "../components/ClientOnly/ClientOnly"
import { EmptyState } from "../components/EmptyState/EmptyState"
import { TripsClient } from "./TripsClient"

const TripsPage = async () => {
    const currentUser = await getCurrentUser()

    if(!currentUser){
        return (
            <ClientOnly>
                <EmptyState
                    title="Unauthorized"
                    subtitle="Please login"
                />
            </ClientOnly>
        )
    }

    const reservations = await getReservations({
        userId: currentUser.id
    })

    if(reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No tips found"
                    subtitle="Looks like you don't have any reserved trips"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <TripsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default TripsPage