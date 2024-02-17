import './Header.css'

interface HeaderProps {
    update: () => void
}
const Header = ({update}: HeaderProps) => {
    return(
        <div className="header">
            <h2>Notes</h2>
            <button className="update" onClick={update}></button>
        </div>
    )
}

export default Header