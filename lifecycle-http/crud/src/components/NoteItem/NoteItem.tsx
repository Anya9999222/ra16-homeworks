import './NoteItem.css';
import  Note from '../models/Note';

interface ItemProps {
    item: Note,
    deleteItem: (id: number) => void
}

const NoteItem = ({item, deleteItem}: ItemProps) => {
    return(
        <div className="note-container">
            <button className="delete" onClick={deleteItem}></button>
            <div className='note-content'>
                {item.content}
            </div>
        </div>
    )
}

export default NoteItem;