// export const Greettdd = ({name}) => {
//     return (
//       <div>
//         Hello {name}
//       </div>
//     )
//   }

// OR typescript type as down

type GreettddProps={
    name?: string
}
export const Greettdd = (props: GreettddProps) => {
    return (
      <div>
        Hello {props.name? props.name:"guest"}
      </div>
    )
}
