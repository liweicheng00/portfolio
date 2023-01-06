import github from '../assets/images/github.png'
import linkedin from '../assets/images/linkedin.png'
import medium from '../assets/images/medium.png'
function Links(){
    const iconsInfo = [
        {src: github, url: 'https://github.com/liweicheng00', name: 'github'},
        {src: linkedin, url: 'https://www.linkedin.com/in/liweicheng00/', name: 'linkedin'},
        // {src: medium, url: 'https://medium.com/@liweicheng00', name: 'medium'}
    ]
    const iconsRender = iconsInfo.map(info => {
        return (
            <a href={info.url} target="_blank">
                <img className="bg-white rounded-lg w-8 m-2" src={info.src} />
            </a>
        )
    })
    return (
        <div className='flex justify-center items-center'>
            {iconsRender}
        </div>
    )
}

export default Links
