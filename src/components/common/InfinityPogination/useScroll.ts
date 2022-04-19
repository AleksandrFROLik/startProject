import {MutableRefObject, useEffect, useRef} from "react";

export const useScroll = (parentRef:MutableRefObject<undefined>, childRef:MutableRefObject<undefined>, callback:Function) => {

    const observer = useRef()

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        }
        //@ts-ignore
        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                callback()
            }
        }, options)
        //@ts-ignore
        observer.current.observe(childRef.current)

        return ()=> {
            //@ts-ignore
            observer.current.unobserve(childRef.current)
        }
    }, [callback])
};

