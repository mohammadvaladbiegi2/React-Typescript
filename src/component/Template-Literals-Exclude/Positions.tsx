/**
 * we want Position prop can be one of
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
 * "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */

// without using Template Literals

type PositionsProps = {
    positions: "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
    "center-bottom" | "right-center" | "right-top" | "right-bottom"
}

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type positionType = `${HorizontalPosition}-${VerticalPosition}` // still we have problem / problem is we have center-center positions 

// with using Exclude


type positionTypeExclude = Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center' // first arg is positions and second arg  There is a situation that I want to be removed 

// and this | 'center' mean positions also can be single center



export const Toast = (position: positionTypeExclude) => {
    return <div>Toast Notification Position - {position}</div>
}