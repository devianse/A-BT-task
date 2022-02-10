const data = require("./data.json");

const Autocomplete = (props) => {
  return (
    <select>
      <option value="none" selected disabled hidden>
        Select name
      </option>
      {data.map((item) => (
        <option value={item.name}>{item.name}</option>
      ))}
    </select>
  );
};

export default Autocomplete;
