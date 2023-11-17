'use client'
export default function InteractiveCard ({children} : {children : React.ReactNode}) {
    function onCardSelected() {
        alert("Card is Clicked")
    }
    function onCardMouseAction(event:React.SyntheticEvent){
        if(event.type == 'mouseover'){
            event.currentTarget.classList.remove('shadow-lg','bg-white')
            event.currentTarget.classList.add('shadow-2xl','bg-neutral-200')
        } else {
            event.currentTarget.classList.add('shadow-lg','bg-white')
            event.currentTarget.classList.remove('shadow-2xl','bg-neutral-200')
        }
    }
    return (
        <div className='w-full h-[400px] rounded-lg shadow-lg bg-white'
            // onClick={(e)=>{onCardSelected(); e.stopPropagation()}}
            onMouseOver={(e)=>onCardMouseAction(e)}
            onMouseOut={(e)=>onCardMouseAction(e)}>
            {children}
        </div>
    );
}
