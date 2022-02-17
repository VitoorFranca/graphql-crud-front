import { Tabs } from "../../Components/Tabs/index";
import type { TabsFields } from "../../Components/Tabs";
import { Users } from "../../Components/Users";

export function Home() {
  const Temp = ({ value }: { value: any }) => <>Temp {value}</>;
  const tabsFields: TabsFields = [
    {
      label: "Usuarios",
      component: <Users />,
    },
    {
      label: "Add Usuarios",
      component: <Temp value="Add Usuarios" />,
    },
    {
      label: "Posts",
      component: <Temp value="Posts" />,
    },
    {
      label: "Add Posts",
      component: <Temp value="Add Posts" />,
    },
  ];
  return (
    <>
      <Tabs tabsFields={tabsFields} />
    </>
  );
}
