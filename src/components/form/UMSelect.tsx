import { Select } from "antd";

const UMSelect = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Select
      defaultValue="lucy"
      style={{ width: "100%" }}
      onChange={handleChange}
      options={[
        { value: "jack", label: "Jack" },
        { value: "lucy", label: "Lucy" },
        { value: "Yiminghe", label: "yiminghe" },
        { value: "disabled", label: "Disabled", disabled: true },
      ]}
    />
  );
};

export default UMSelect;
