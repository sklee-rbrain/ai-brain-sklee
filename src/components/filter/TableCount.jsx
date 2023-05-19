import FromDrop from "../form/FormDrop";
import PropTypes from "prop-types";

TableCount.propTypes = {
  name: PropTypes.string.isRequired,
};

function TableCount({ name, ...others }) {
  return (
    <FromDrop
      style={{ backgroundColor: "rgb(255, 255, 255)" }}
      name={name}
      options={[
        { label: "10건", value: 10 },
        { label: "20건", value: 20 },
        { label: "30건", value: 30 },
      ]}
      sx={{ minWidth: "fit-content", height: 26, fontSize: 13 }}
      size="small"
      {...others}
    />
  );
}

export default TableCount;
