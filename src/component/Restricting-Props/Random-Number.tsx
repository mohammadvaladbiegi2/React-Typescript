


// when we use this case we want sent props value and just one fo this options isPositive /  isNegative /  isZero otherwise get Error

type ValueNumberType = {
    value: number
}

type PositiveNumberType = ValueNumberType & {
    isPositive: boolean,
    isNegative?: never
    isZero?: never
}
type NegativeNumberType = ValueNumberType & {
    isNegative: boolean,
    isPositive?: never
    isZero?: never
}
type ZeroNumberType = ValueNumberType & {
    isZero: boolean,
    isPositive?: never
    isNegative?: never
}


type RandomNumberType = {
    value: PositiveNumberType | NegativeNumberType | ZeroNumberType
}



const RandomNumber = ({ value }: RandomNumberType) => {
    return (
        <div>
            {value.value} {value.isPositive && "Positive"} {value.isNegative && "Negative"} {value.isZero && "Zero"}
        </div>
    );
}

export default RandomNumber;
