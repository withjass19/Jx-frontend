import React from "react";
import CurrencyInput from "react-currency-input-field";

function Jass() {
  const [value, setValue] = React.useState("");

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <CurrencyInput
      placeholder="Enter amount"
      value={value}
      onValueChange={handleChange}
      prefix="$"
      decimalsLimit={2}
      allowDecimals={true}
      decimalSeparator="."
      groupSeparator=","
    />
  );
}

export default Jass;
