import React, { ReactElement } from 'react'
import USA from "@svg-maps/usa"
import {CheckboxSVGMap} from "react-svg-map"
import "react-svg-map/lib/index.css";
interface Props {
    
}

export default function map({}: Props): ReactElement {
    return (
        <CheckboxSVGMap map={USA} />
    )
}
