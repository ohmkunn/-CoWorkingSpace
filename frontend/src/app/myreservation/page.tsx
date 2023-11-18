import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

import ReservationPanel from "@/components/ReservationPanel";

export default async function page() {
    const session = await getServerSession(authOptions)

    return (
        <div>
            <ReservationPanel session={session}/>
        </div>
    );
}
