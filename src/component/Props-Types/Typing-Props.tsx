// type Props = {     simple props
//     title:string
// }
// type Props = { 
//     title:string, 
//     price?:string,  // options props
//    readonly id:string | number,  // just first time declered and its requier for first time
// }



// type Props = {
//     children : React.ReactNode  // when use children
// }

type Props = {
    product: { id: string, title: string }[] // we use thise more
}

const TypingProps = (props: Props) => {



    return (
        <div>
            {props.product[0].title}
        </div>
    );
}

export default TypingProps;




