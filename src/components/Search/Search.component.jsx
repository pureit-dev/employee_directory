function Search({ onChangeHandler, placeholder, teams, onDropDownChange }) {
	return (
		<div>
			<select defaultValue="Everyone" onChange={onDropDownChange}>
				<option value="Everyone">Everyone</option>
				{teams.map((team, index) => (
					<option key={index} value={team}>
						{team}
					</option>
				))}
			</select>
			<input
				type="search"
				onChange={onChangeHandler}
				placeholder={placeholder}
			/>
		</div>
	)
}

export default Search
