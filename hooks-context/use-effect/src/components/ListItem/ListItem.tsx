import "./ListItem.css"

interface Obj {
    id: number,
    name: string
}

interface Props {
    item: Obj,
    onClick: (info: Obj) => void,
    active: boolean
}

const ListItem = ({item, onClick, active} : Props) => {
   const info = {
    id: item.id,
    name: item.name
   }
    return(
        <tr className={active ? 'list-item active' : 'list-item'} key={item.id} onClick={(e) => {onClick(info)} }> 
            <td>{item.name}</td> 
        </tr>
    )
}

export default ListItem