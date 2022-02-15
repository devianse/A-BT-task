const data = require("./data.json");
import { useEffect, useState } from "react";

const Autocomplete = () => {
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(false);

  const changeHandler = (e) => {
    setSelected(false);
    setInput(e.target.value);
    setVisible(true);
  };

  useEffect(() => {
    if (input && !selected) {
      setFilteredData(
        data.filter((item) =>
          item.name.toLowerCase().includes(input.toLocaleLowerCase())
        )
      );
    } else {
      setFilteredData(data);
    }
  }, [input, selected]);

  const toggleHandler = (e) => {
    setVisible((prevState) => !prevState);
  };

  const onClickHandler = (val) => {
    setInput(val);
    setVisible(false);
    setSelected(true);
  };

  return (
    <div>
      <input
        onChange={changeHandler}
        value={input || ""}
        onClick={toggleHandler}
      />

      <ul className="suggestions">
        {visible &&
          filteredData &&
          filteredData.map((item, i) => (
            <li key={i} onClick={() => onClickHandler(item.name)}>
              {item.name}
            </li>
          ))}
        {visible && filteredData && filteredData.length === 0 && (
          <li className="no-options">no options</li>
        )}
      </ul>
    </div>
  );
};

export default Autocomplete;
