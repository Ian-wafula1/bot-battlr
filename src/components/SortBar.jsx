export default function SortBar({sortValue, setSortValue}) {
    return (
        <div>
            Sort By:{' '}
            <select value={sortValue} onChange={e => setSortValue(e.target.value)} name="sort" id="sort">
                <option value="name">Name</option>
                <option value="health">Health</option>
                <option value="damage">Damage</option>
                <option value="armor">Armour</option>
            </select>
        </div>
    )
}