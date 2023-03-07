import './Search.styles.css'

function Search({ onChangeHandler, placeholder, teams, onDropDownChange }) {
	return (
		<div>

			<div className='search-container'>
				<select className="dropdown" defaultValue="Everyone" onChange={onDropDownChange} >
					<option value="Everyone">Everyone</option>
					{teams.map((team, index) => (
						<option key={index} value={team}>
							{team}
						</option>
					))}
				</select>
				<input
					className="search"
					type="search"
					onChange={onChangeHandler}
					placeholder={placeholder}
					autoFocus
				/>
			</div>
		</div>
	)
}

export default Search
