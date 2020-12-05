import React, { ReactElement } from 'react'
import USA from "@svg-maps/usa"
import {SVGMap} from "react-svg-map"
interface Props {
    
}

export default function map({}: Props): ReactElement {
    return (
        <SVGMap map={USA}/>
    )
}
