interface Props {
    onClick: () => void
}

const ButtonOpen = ({onClick}: Props) => {
    return (
        <tr className="list-item additional" onClick={onClick}>
            <td> ... </td> 
        </tr>
    )
}

export default ButtonOpen