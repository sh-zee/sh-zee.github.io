import "./App.css";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";
import Dock from "./components/Dock";

import SplitText from "./components/SplitText";
import SpotlightCard from "./components/SpotlightCard";
import TextType from "./components/TextType";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";

function App() {
  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => alert("Home!"),
    },
    {
      icon: <VscArchive size={18} />,
      label: "Archive",
      onClick: () => alert("Archive!"),
    },
    {
      icon: <VscAccount size={18} />,
      label: "Profile",
      onClick: () => alert("Profile!"),
    },
    {
      icon: <VscSettingsGear size={18} />,
      label: "Settings",
      onClick: () => alert("Settings!"),
    },
  ];
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      <div className="flex flex-row gap-3 items-center">
        <div>
          <Avatar className="h-[220px] w-[220px]">
            <AvatarImage src="profile.jpeg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>Zeeshan Iqbal</p>
          <p>Nick names: Zeesh, Zee or Theta</p>
        </div>

        <SpotlightCard
          className="custom-spotlight-card w-[420px] h-[220px] rounded-xl shadow-lg border"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div className="flex flex-col gap-3 items-start content-start">
            <SplitText
              text="Hello World!"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <TextType
              text={[
                "Senior Backend Engineer",
                "Senior Software Engineer",
                "Full-stack developer",
                "Cool AI Coder",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
            />

            <p>For 8 years in industry</p>
            <p>- I have developed from ground-zero to Prototypes.</p>
            <p>- Architected Prototypes to complex functional Products.</p>
            <p>
              - Scaled and Stabilized those Products to server Millions of
              users.
            </p>
            <p>
              - Empowered and Enabled the teams of up-to Engineers to deliver
              Success.
            </p>
          </div>
        </SpotlightCard>

        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>
    </>
  );
}
export default App;
