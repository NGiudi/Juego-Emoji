import { useContext } from "react";

import { AppContext } from "../../AppContext";

export const TeamCard = () => {
  const ctx = useContext(AppContext);

  return (
    <div className="card-team">
      <div className="card-team-avatar bg-red"/>

      <span className="card-team-points">
        {ctx.points}
      </span>
    </div>
  )
}
