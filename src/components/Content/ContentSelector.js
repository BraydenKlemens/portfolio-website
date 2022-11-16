import { useState } from "react";
import TabSelector from "./TabSelector";
import ContentView from "./ContentView";

const ContentSelector = () => {
  const [tab, setTab] = useState("");
  const onTabChange = (tabID) => {
    switch (tabID) {
      case "tab_0":
        setTab((currTab) => (currTab = "tab_0"));
        break;
      case "tab_1":
        setTab((currTab) => (currTab = "tab_1"));
        break;
      case "tab_2":
        setTab((currTab) => (currTab = "tab_2"));
        break;
      case "tab_3":
        setTab((currTab) => (currTab = "tab_3"));
        break;
      case "tab_4":
        setTab((currTab) => (currTab = "tab_4"));
        break;
      default:
        setTab((currTab) => (currTab = "tab_0"));
        break;
    }
  };

  return (
    <>
      <TabSelector activeTab={tab} onTabChange={onTabChange} />
      <ContentView activeTab={tab} />
    </>
  );
};

export default ContentSelector;
