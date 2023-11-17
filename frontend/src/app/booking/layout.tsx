export default function BookingLayout ({children, dashboard, booking}:
    {children:React.ReactNode, dashboard:React.ReactNode, booking:React.ReactNode}) {
        return (
            <div className="flex flex-col w-full">
                {children}
                {dashboard}
                {/* {booking} */}
            </div>
        )
    }