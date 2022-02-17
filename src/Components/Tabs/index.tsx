import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Box, Tabs as TabsBar, Typography } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";

export type TabsField = {
  label: string;
  component: React.ReactNode;
};

export type TabsFields = TabsField[];

type Props = {
  tabsFields: TabsField[];
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export function Tabs({ tabsFields }: Props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  function TabPanel({ children, value, index, ...other }: TabPanelProps) {
    const current: boolean = index === value;
    return (
      <div
        role="tabpanel"
        hidden={!current}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
      >
        {value === index && children}
      </div>
    );
  }

  return (
    <Paper className={classes.root}>
      <TabsBar
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {tabsFields.map(({ label }: TabsField) => {
          return <Tab label={label} />;
        })}
      </TabsBar>
      {tabsFields.map(({ component }: TabsField, i) => {
        return (
          <TabPanel index={i} value={value}>
            {component}
          </TabPanel>
        );
      })}
    </Paper>
  );
}
