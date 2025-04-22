export default function SortBar({ sortValue, setSortValue }) {
	return (
		<>
            <label htmlFor="sort">Sort by:</label>
			<div>
				<select value={sortValue} onChange={(e) => setSortValue(e.target.value)} name="sort" id="sort">
					<option value="name">Name</option>
					<option value="health">Health</option>
					<option value="damage">Damage</option>
					<option value="armor">Armour</option>
				</select>
				<span className="focus"></span>
			</div>
		</>
	);
}
