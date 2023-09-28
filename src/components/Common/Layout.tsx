import { Input } from "../Common/Input";

import { TeamCard } from "../TeamCard";

export const Layout = () => {
  return (
    <>
      <div id="top-bar">
        <TeamCard />
      </div>
      
      <div id="content-box">
        Content
      </div>

      <div id="bottom-bar">
        <Input />
      </div>
    </>
  );
};
