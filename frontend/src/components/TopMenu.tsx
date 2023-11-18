import Link from "next/link";
import {getServerSession} from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
 
export default async function TopMenu () {
    const session = await getServerSession(authOptions)
    var profile
    if(session && session.user.token) profile = await getUserProfile(session.user.token)
      return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-950 p-2">
  <Link href={"./"}>
  <div className="flex items-center flex-shrink-0 text-white mr-6">
  <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              className="fill-current h-12 w-12 mr-4 rounded-full"
              viewBox="0 0 6.827 6.827"
            >
              <path style={{ fill: "#424242" }} d="M0 0h6.827v6.827H0z" />
              <g id="Layer_x0020_1">
                <g id="_509263016">
                  <path
                    id="_509264048"
                    className="fil1"
                    d="M2.228 1.128C2.622.896 3.018.78 3.415.78c.4 0 .798.118 1.194.352l-.054.092.054-.092c.034.02.053.056.052.093v1.23a.106.106 0 0 1-.037.08l-.201.2-.075-.076.075.076a.106.106 0 0 1-.075.031H2.483a.106.106 0 0 1-.08-.037l-.202-.2v.001a.106.106 0 0 1-.031-.076v-1.23c0-.042.023-.078.058-.096zM3.415.994a2.09 2.09 0 0 0-1.032.291V2.41l.144.143h1.777l.144-.143V1.285A2.09 2.09 0 0 0 3.415.994z"
                  />
                  <path
                    id="_509263928"
                    className="fil1"
                    d="M1.982 3.437a9.831 9.831 0 0 1 2.868.001l-.016.105.016-.105a.107.107 0 0 1 .09.106v.447a.107.107 0 0 1-.106.106H1.993a.107.107 0 0 1-.107-.106v-.448c0-.055.042-.1.096-.106zm1.41.107a9.594 9.594 0 0 0-1.293.092v.248h2.628v-.248a9.49 9.49 0 0 0-1.336-.092z"
                  />
                  <path
                    id="_509262896"
                    className="fil1"
                    d="M2.72 2.677a.107.107 0 0 0-.214 0v.736a.107.107 0 0 0 .214 0v-.736z"
                  />
                  <path
                    id="_509263232"
                    className="fil1"
                    d="M4.324 2.677a.107.107 0 0 0-.213 0v.736a.107.107 0 0 0 .213 0v-.736z"
                  />
                  <path
                    id="_509263184"
                    className="fil1"
                    d="M1.886 5.94a.107.107 0 0 0 .213 0V3.99a.107.107 0 0 0-.213 0v1.95z"
                  />
                  <path
                    id="_509263136"
                    className="fil1"
                    d="M2.396 5.234a.107.107 0 0 0 .213 0V3.991a.107.107 0 0 0-.213 0v1.243z"
                  />
                  <path
                    id="_509263064"
                    className="fil1"
                    d="M4.727 5.94a.107.107 0 0 0 .214 0V3.99a.107.107 0 0 0-.214 0v1.95z"
                  />
                  <path
                    id="_509262920"
                    className="fil1"
                    d="M4.218 5.234a.107.107 0 0 0 .213 0V3.991a.107.107 0 0 0-.213 0v1.243z"
                  />
                </g>
                <path
                  className="fil1"
                  d="m3.451 1.542.041.126h.256l-.1.072-.107.078.041.126.038.117-.1-.073-.107-.078-.107.078-.1.073.039-.117.04-.126-.107-.078-.1-.072h.257l.04-.126.038-.118.038.118zm-.026.178-.012-.036-.011.036-.01.028h-.067l.031.022.024.017-.01.028-.011.036.03-.022.024-.017.024.017.03.022-.011-.036-.01-.028.024-.017.031-.022h-.067l-.009-.028z"
                />
              </g>
              <path style={{ fill: "none" }} d="M0 0h6.827v6.827H0z" />
            </svg>
    <span className="font-semibold text-xl tracking-tight">CoWorkingSpace</span>
  </div></Link>
  <div className="block lg:hidden">
    {/* <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button> */}
  </div>
  <div className="flex-grow flex items-center w-auto ">
    <div className="text-sm flex-grow">
      <a href="/myreservation" className=" inline-block mt-0 text-teal-200 hover:text-white mr-4">
        My Reservation
      </a>
      {
        (profile && profile.data.role=="admin")?<a href="/addcoworkingspace" className=" inline-block mt-0 text-teal-200 hover:text-white mr-4">
        Add Co-working Space
        </a>:null
      }

      <a href="#responsive-header" className=" inline-block mt-0 text-teal-200 hover:text-white mr-4">
        
      </a>
      <a href="#responsive-header" className=" inline-block mt-0 text-teal-200 hover:text-white">
        
      </a>
    </div>
    <div>
    {
                session? <Link href="/api/auth/signout" className="text-sm ">
                            <div className="inline-block text-sm px-4 py-2 leading-none border rounded font-bold text-teal-800 bg-white border-white hover:border-transparent hover:text-white hover:bg-teal-900 mt-0">
                                Sign-Out of {session.user?.name}
                            </div>
                        </Link>
                        :<Link href="/api/auth/signin" className="text-sm ">
                            <div className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-0">
                                Sign-In
                            </div>
                        </Link>
            }
    </div>
  </div>
</nav>
        // <nav className="flex items-center justify-between flex-wrap bg-teal-950 p-3">
        //     <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            
        //     {
        //         session? <Link href="/api/auth/signout" className="text-sm ">
        //                     <div className="inline-block text-sm px-4 py-2 leading-none border rounded font-bold text-teal-800 bg-white border-white hover:border-transparent hover:text-white hover:bg-teal-900 mt-4 lg:mt-0">
        //                         Sign-Out of {session.user?.name}
        //                     </div>
        //                 </Link>
        //                 :<Link href="/api/auth/signin" className="text-sm ">
        //                     <div className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
        //                         Sign-In
        //                     </div>
        //                 </Link>
        //     }
        //         <div className="flex items-center flex-shrink-0 flex-grow text-white ml-6 " >
        //         <Link href={"./mybooking"}><span>mybooking</span>
                
        //         </Link></div>
        //         <div className="flex items-center ml-4">
        //             <TopMenuItem title="Booking" pageRef="/booking"/>
        //         </div>
        //     </div>
        //     <div className="flex items-center flex-shrink-0 text-white ml-6">
        //         <Link href={'./' }> <span className="font-semibold text-xl tracking-tight">VACCINE</span></Link>
        //         <Link href={'./' }>
        //             <Image src={'/logo.png'}
        //                 className="fill-current h-10 w-10 ml-2"
        //                 alt='logo' width={0} height={0} sizes="100vh"/></Link>
        //     </div>
        // </nav>
    )
}