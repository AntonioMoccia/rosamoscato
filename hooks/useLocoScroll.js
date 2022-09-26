import {useEffect,useState} from 'react'


const useLocoScroll = (isLoaded)=>{

    const [scroll,setScroll] = useState(undefined)

    useEffect(async ()=>{   
        const locomotive = (await import("locomotive-scroll")).default

        const locoScroll = new locomotive({
            el:document.querySelector('.container'),
            smooth:true
        })
        console.log(locoScroll);
       setScroll(
            locoScroll
        )
        return ()=>locoScroll.destroy()
        },[])   




    return scroll
}

    export default useLocoScroll