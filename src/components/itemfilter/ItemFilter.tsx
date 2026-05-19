import './ItemFilter.css';
import type { ItemFilterProps } from './ItemFilterProps';

function ItemFilter({ onChange }: ItemFilterProps) {
    return (
        <div className="itemfilter">
            <input type="text" placeholder="Search" onChange={onChange} />
        </div>
    )
}

export default ItemFilter;