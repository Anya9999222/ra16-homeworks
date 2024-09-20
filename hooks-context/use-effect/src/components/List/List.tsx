import './List.css'

interface Props {
    children: React.ReactNode
}

const List = ({children}: Props) => {
    return(
        <table className="list-container">
            <tbody>
            {children}
            </tbody>
        </table>
    )    
}

export default List;