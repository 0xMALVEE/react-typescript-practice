
import React, { Fragment, ReactNode } from "react"

interface SectinoProps { 
    title? : string,
    children: ReactNode
}

const Section = ({title = "Default title", children}: SectinoProps) =>{
    return(
        <Fragment>
            <h2>{title}</h2>
            {children}
        </Fragment>
    )
}

export default Section;