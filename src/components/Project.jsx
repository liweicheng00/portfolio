function Project(props) {
    console.log(props)
    const data = props.data
    return (
        <div className={`flex justify-center w-1/2 h-40 m-2 bg-slate-300/60 backdrop-blur-md rounded-2xl`}>
            <div className={`w-1/5 flex-none m-4 flex items-center`}>
                <img className={`max-h-full rounded-2xl`} src={data.image} alt=""/>
            </div>
            <div className={`flex justify-around items-center`}>
                <div className={`text-3xl flex w-1/3 items-center pl-4
                `}> {data.title}</div>
                <div className={`bg-gray-600 w-[1px] h-12 place-self-center`}/>
                <div className={`w-1/2 flex-grow h-full p-4 text-sm  overflow-auto flex items-center`}>
                    <div className={`overflow-auto`}>{data.content}</div>
                </div>
            </div>
        </div>
    )
}

export default Project
