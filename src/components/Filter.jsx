export default function Filter({filterValue, setFilterValue}) {
    return (
        <select value={filterValue} onChange={e => setFilterValue(e.target.value)} name="filter" id="filter">
            <option value="All">All</option>
            <option value="Support">Support</option>
            <option value="Medic">Medic</option>
            <option value="Witch">Witch</option>
            <option value="Defender">Defender</option>
            <option value="Assault">Assault</option>
            <option value="Captain">Captain</option>
        </select>
    )
}