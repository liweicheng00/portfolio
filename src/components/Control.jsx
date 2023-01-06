function Control({className}) {
    return (
        <div className={`flex absolute ${className}`}>
            <div className="rounded-full bg-[#E5C199] w-5 h-5 m-1 hover:transition-all hover:w-6 hover:h-6"/>
            <div className="rounded-full bg-[#E5C199] w-5 h-5 m-1 hover:transition-all hover:w-6 hover:h-6"/>
            <div className="rounded-full bg-[#E5C199] w-5 h-5 m-1 hover:transition-all hover:w-6 hover:h-6"/>
        </div>
    )
}

export default Control
