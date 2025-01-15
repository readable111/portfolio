import React, { Component, useRef } from 'react'
import '../styles/particle.css'
import PropTypes from 'prop-types';

type Props = {
        xpos: number;
        ypos: number; 
        useMouse
        getPosition: Function;
    };

export default class Particle extends Component<Props> {
    const particleRef = useRef()

    const useMousePosition = () => {
        const [
            mousePosition,
            setMousePosition
        ] = React.useState<{x: number | null; y: number | null}>({x: null, y: null});

        React.useEffect(() => {
            const updateMousePosition = (ev: MouseEvent): void =>{
                setMousePosition({x:ev.clientX, y:ev.clientY})
            }

            window.addEventListener('mousemove', updateMousePosition)

            return() => {
                window.removeEventListener('mousemove', updateMousePosition)
            }
        }, [])

        return mousePosition
    }

    constructor(props){
        super(props);
    }
    while(True){
        this.useMousePosition()
        

    }

}
