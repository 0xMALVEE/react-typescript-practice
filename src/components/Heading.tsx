import { ReactElement } from "react";

interface HeadingProps {
    title: string
}

const Heading = ({title}: HeadingProps): ReactElement => {
    return (
        <div>
            {title}
        </div>
    )
}

export default Heading;