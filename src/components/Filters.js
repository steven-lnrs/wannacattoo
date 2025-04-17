function Filters({ sort, setSort }) {
  return (
    <div className="filters">
      <label>Sort/Filter By:</label>
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="age">Age</option>
        <option value="name">Name</option>
        <option value="vaccinated">Only Vaccinated</option>
      </select>
    </div>
  );
}

export default Filters;
