import {FunctionComponent, useEffect, useReducer, useState} from "react";

const CustomCarousel: FunctionComponent = ({ slideTime }) => {
    const initialCarouselState = {
        offset: 0,
        desired: 0,
        active: 0
    };
    
    const [current, setCurrent] = useState(0);
    const carouselBehavior = useCarousel(slideTime);
    const [state, dispatch] = useReducer(carouselReducer, initialCarouselState);


    function carouselReducer(state, action) {
        switch (action.type) {
            case "jump":
                return {
                    ...state,
                    desired: action.desired
                };
            case "next":
                return {
                    ...state,
                    desired: next(action.length, state.active)
                };
            case "prev":
                return {
                    ...state,
                    desired: previous(action.length, state.active)
                };
            case "done":
                return {
                    ...state,
                    offset: NaN,
                    active: state.desired
                };
            case "drag":
                return {
                    ...state,
                    offset: action.offset
                };
            default:
                return state;
        }
    }



    useEffect(() => {
        const next = (current + 1) % slides.length;
        const id = setTimeout(() => setCurrent(next), time);
        return () => clearTimeout(id);
    }, [current]);

    return <div className="my-carousel">...</div>;
};

export default CustomCarousel