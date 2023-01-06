import {useEffect} from 'react'
import {gsap} from "gsap";


function Hero() {
    useEffect(() => {
        const tl = gsap.timeline({
            repeat: -1,
            defaults: {
                duration: 4
            }
        })
        tl
            .fromTo('.code-js', {y: ''}, {y: '200%'}, 0)
            .fromTo('.code-python', {y: '-100%'}, {y: '100%'}, 0)
        window.addEventListener('mousemove', (event) => {
            if (event.movementY > 0) {
                tl.play()
            } else if (event.movementY < 0) {
                tl.reverse()
            } else {
                tl.pause()
            }
        })
    })
    return (
        <div className={`h-screen`}>
            <div className={`translate-y-1/5 h-1/2 flex justify-center items-end`}>
                <div className={`overflow-hidden relative`}>
                    <div className={`code-js relative text-amber-100 align-baseline text-right`}>
                        <span className={`text-[#8CDFFA]`}>console</span>.
                        <span className={`text-[#DCD4AB]`}>log</span>
                        <span className={`text-[#0AE56F]`}>(</span>'
                    </div>

                    <div
                        className={`code-python absolute right-0 bottom-0 text-amber-100 align-baseline text-right`}>
                        <span className={`text-[#DCD4AB]`}>print</span>
                        <span className={`text-[#0AE56F]`}>(</span>"
                    </div>
                </div>
                <div
                    className={`font-['Chivo_Mono'] italic text-9xl text-[#E5C199] align-baseline leading-[0.8]`}>Hello
                    world.
                </div>
                <div className={`overflow-hidden relative`}>
                    <div className={`code-js relative text-amber-100 align-baseline `}>
                        '
                        <span className={`text-[#0AE56F]`}>)</span>
                    </div>
                    <div className={`code-python absolute right-0 bottom-0 text-amber-100 align-baseline`}>
                        "
                        <span className={`text-[#0AE56F]`}>)</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero
