import React from "react";
import Tabsplani from "../../Components/TabsPlani/Tabsplani";

import { LandingTitle, LandingWrapper } from "./UserLandingStyle";

const UserLanding = () => {
  return (
    <LandingWrapper>
      <LandingTitle>
        ¡Bienvenido! Esta es la planificacion de la semana:
      </LandingTitle>
      <Tabsplani />
    </LandingWrapper>
  );
};

export default UserLanding;
