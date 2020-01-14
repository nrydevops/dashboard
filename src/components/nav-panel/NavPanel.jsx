import React from "react";
import { useDispatch } from "react-redux";
import { toggleLeftPanel } from "../../redux/layout/layout.action";
import { Box, Button } from "grommet";
import { Next } from "grommet-icons";

const NavPanel = ({ isOpen }) => {
  const dispatch = useDispatch();
  return (
    <Box
      style={{ position: "absolute", top: 0, left: 0 }}
      margin={{ left: isOpen ? "200px" : "0px" }}
    >
      <Button
        icon={<Next />}
        hoverIndicator={true}
        onClick={() => dispatch(toggleLeftPanel())}
      />
    </Box>
  );
};

export default NavPanel;
