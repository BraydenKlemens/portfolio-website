import React from "react";
import TabSelector from "./TabSelector";
import ContentSelector from "./ContentSelector";

const ContentSelector = () => {
  const [tabID, setTabId] = useState("0");
  const tabChangeHandler = () => {
    switch(tabID)
  }

  return (
    <div>
      <TabSelector/>
      <ContentSelector/>
    </div>
  );
};

export default ContentSelector;
