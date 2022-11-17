import CareerScreen from "../Screens/CareerScreen";
import SkillScreen from "../Screens/SkillScreen";
import ProjectScreen from "../Screens/ProjectScreen";
import GameDevScreen from "../Screens/GameDevScreen";
import AboutScreen from "../Screens/AboutScreen";

const ContentView = ({ activeTab }) => {
  return (
    <>
      {activeTab === "tab_0" && <CareerScreen />}
      {activeTab === "tab_1" && <SkillScreen />}
      {activeTab === "tab_2" && <ProjectScreen />}
      {activeTab === "tab_3" && <GameDevScreen />}
      {activeTab === "tab_4" && <AboutScreen />}
    </>
  );
};

export default ContentView;
