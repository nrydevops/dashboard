import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleRightPanel } from "../redux/layout/layout.action";
import { Box, Button, Collapsible, ResponsiveContext, Layer } from "grommet";
import { FormClose } from "grommet-icons";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isLeftPanelOpen = useSelector(state => state.layout.isLeftPanelOpen);
  const isRightPanelOpen = useSelector(state => state.layout.isRightPanelOpen);
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box fill>
          <Header />
          <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
            <Box background="brand" style={{ position: "relative" }}>
              <Collapsible direction="horizontal" open={isLeftPanelOpen}>
                <Box flex width="50px" background="brand" elevation="small" />
              </Collapsible>
              <Sidebar isOpen={isLeftPanelOpen} />
            </Box>
            <Box flex align="center" justify="center">
              {children}
            </Box>
            {!isRightPanelOpen || size !== "small" ? (
              <Collapsible direction="horizontal" open={isRightPanelOpen}>
                <Box
                  flex
                  width="medium"
                  background="brand"
                  elevation="small"
                  align="center"
                  justify="start"
                >
                  Notifications can go here
                </Box>
              </Collapsible>
            ) : (
              <Layer>
                <Box
                  background="brand"
                  justify="end"
                  align="center"
                  direction="row"
                >
                  <Button
                    icon={<FormClose />}
                    onClick={() => dispatch(toggleRightPanel())}
                  />
                </Box>
                <Box fill background="brand" align="center" justify="center" />
              </Layer>
            )}
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Layout;
