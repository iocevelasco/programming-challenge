import React, { useState } from "react";
import {
  EjContainer,
  EjDescript,
  EjTipe,
  EjTitle,
  EjTitleContainer,
  PlaniContainer,
  Wrapper,
} from "./TabsplaniStyle";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const Tabsplani = () => {
  const plani = useSelector((state) => state.plani.planis);
  console.log(plani);
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  let { modulo1, modulo2, modulo3, modulo4, modulo5, modulo6 } = plani;
  console.log(modulo1);
  return (
    <Wrapper>
      <div style={{ width: "100%" }}>
        <Paper square>
          <Tabs
            variant="fullWidth"
            textColor="secondary"
            indicatorColor="primary"
            value={tabIndex}
            onChange={handleTabChange}
          >
            <Tab label="DIA 1" />
            <Tab label="DIA 2" />
            <Tab label="DIA 3" />
            <Tab label="DIA 4" />
            <Tab label="DIA 5" />
          </Tabs>
          <Box sx={{ padding: 2 }}>
            {tabIndex === 0 && (
              <Box>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>Core</EjTitle>
                  </EjTitleContainer>
                  <EjTipe> {modulo1.rounds} </EjTipe>
                  <EjContainer>
                    <EjDescript>{modulo1.ejercicio1}</EjDescript>
                    <EjDescript>{modulo1.ejercicio2}</EjDescript>
                    <EjDescript>{modulo1.ejercicio3}</EjDescript>
                    <EjDescript>{modulo1.ejercicio4}</EjDescript>
                    <EjDescript>{modulo1.ejercicio5}</EjDescript>
                    <EjDescript>{modulo1.ejercicio6}</EjDescript>
                    <EjDescript>{modulo1.ejercicio7}</EjDescript>
                    <EjDescript>{modulo1.ejercicio8}</EjDescript>
                    <EjDescript>{modulo1.ejercicio9}</EjDescript>
                    <EjDescript>{modulo1.ejercicio10}</EjDescript>
                    <EjDescript>{modulo1.ejercicio11}</EjDescript>
                    <EjDescript>{modulo1.ejercicio12}</EjDescript>
                  </EjContainer>
                </PlaniContainer>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>WeightLifting</EjTitle>
                  </EjTitleContainer>
                  <EjTipe> {modulo2.ejercicio} </EjTipe>
                  <EjDescript>{modulo2.set1}</EjDescript>
                  <EjDescript>{modulo2.set2}</EjDescript>
                  <EjDescript>{modulo2.set3}</EjDescript>
                  <EjDescript>{modulo2.set4}</EjDescript>
                  <EjDescript>{modulo2.set5}</EjDescript>
                  <EjDescript>{modulo2.set6}</EjDescript>
                  <EjDescript>{modulo2.set7}</EjDescript>
                  <EjDescript>{modulo2.set8}</EjDescript>
                  <EjDescript>{modulo2.set9}</EjDescript>
                  <EjDescript>{modulo2.set10}</EjDescript>
                  <EjDescript>{modulo2.set11}</EjDescript>
                  <EjDescript>{modulo2.set12}</EjDescript>
                  <EjDescript>{modulo2.set13}</EjDescript>
                  <EjDescript>{modulo2.set14}</EjDescript>
                </PlaniContainer>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle> {modulo3.ejercicio} </EjTitle>
                  </EjTitleContainer>
                  <EjTipe>OTM 12' Escalando</EjTipe>
                  <EjDescript>
                    1 HANG SQUAT CLEAN + 1 FRONT SQUAT, SUMANDO 1 FRONT SQUAT
                    MÁS POR MINUTO
                  </EjDescript>
                </PlaniContainer>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>WOD</EjTitle>
                  </EjTitleContainer>
                  <EjTipe>OPEN 23.1</EjTipe>
                  <EjDescript>
                    On a 20-minute clock: "23.2 A": AMRAP 15 minutes: 5 Burpee
                    Pull-Ups* 10 Shuttle Runs (25 ft out, 25 ft back) *Add 5
                    Burpee Pull-Ups after each round // Directly into: "23.2 B"
                    5 minutes to Establish: 1 rep max Thruster
                  </EjDescript>
                </PlaniContainer>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>ACCESORIOS</EjTitle>
                  </EjTitleContainer>
                  <EjTipe>4 SERIES GIGANTES</EjTipe>
                  <EjDescript>
                    12 REPS PRESS ESTRICTO CON BARRA VACIA O 2.5K X LADO MAXIMO
                    10 VUELOS LATERALES CON DISCOS 10 VUELOS FRONTALES CON BARRA
                    15KG 10 POSTERIORES CON DISCOS 15 - 20 REPS SHRUGS TRAPECIO
                    CON MANCUERNAS 25KG
                  </EjDescript>
                </PlaniContainer>
              </Box>
            )}
            {tabIndex === 1 && (
              <Box>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>Core</EjTitle>
                  </EjTitleContainer>
                  <EjTipe>5 ROUNDS</EjTipe>
                  <EjDescript>
                    10 GOOD MORNINGS -- 10 BARBELL ROLL OUT -- 20 ESPINALES EN
                    MAQUINA
                  </EjDescript>
                </PlaniContainer>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>WeightLifting</EjTitle>
                  </EjTitleContainer>
                  <EjTipe>DEADLIFT +2,5K DE CADA LADO EN TODOS LOS SETS</EjTipe>
                  <EjDescript>
                    1 SET X 5 REPS AL 75% -- 1 SET X 3 REPS AL 85% -- 1 SET X 1
                    REPS O MÁS AL 95%
                  </EjDescript>
                </PlaniContainer>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>Snatch Session</EjTitle>
                  </EjTitleContainer>
                  <EjTipe>OTM 12' Escalando</EjTipe>
                  <EjDescript>
                    1 HANG SQUAT SNATCH + 1 OVERHEAD, SUMANDO 1 OVERHEAD MÁS POR
                    MINUTO
                  </EjDescript>
                </PlaniContainer>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>WOD</EjTitle>
                  </EjTitleContainer>
                  <EjTipe>2 ROUNDS POR TIEMPO</EjTipe>
                  <EjDescript>
                    40 BURPEES -- 30" REST -- 30 HANG POWER CLEAN -- 30" REST --
                    20 BOX JUMP OVER -- 30" REST -- 10 PULL UPS
                  </EjDescript>
                </PlaniContainer>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>ACCESORIOS</EjTitle>
                  </EjTitleContainer>
                  <EjTipe>SUPERSET BICEPS</EjTipe>
                  <EjDescript>
                    3 SETS (1'30 rest) -- 21 CURL CON BARRA PARADO + MARTILLO
                    CON MANCUERNAS AL FALLO 12 kg
                  </EjDescript>
                  <EjTipe>SUPERSET TRICEPS</EjTipe>
                  <EjDescript>
                    3 SETS (1'30 rest) -- 21 CURL CON BARRA PARADO + MARTILLO
                    CON MANCUERNAS AL FALLO 12 kg
                  </EjDescript>
                </PlaniContainer>
              </Box>
            )}
            {tabIndex === 2 && (
              <Box>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>Core</EjTitle>
                  </EjTitleContainer>
                  <EjTipe>5 ROUNDS</EjTipe>
                  <EjDescript>
                    15/15 TOE TAPS -- 15/15 FLUTTER KICKS -- 15 HOLLOW ROCKS
                  </EjDescript>
                </PlaniContainer>

                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>Over Head Session</EjTitle>
                  </EjTitleContainer>
                  <EjTipe>OTM 12' Escalando</EjTipe>
                  <EjDescript>
                    1 PUSH PRESS + 1 JERK, sumando 1 JERK MÁS POR MINUTO
                  </EjDescript>
                </PlaniContainer>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>WOD</EjTitle>
                  </EjTitleContainer>
                  <EjTipe>CADA 2 MINUTOS X 8 SETS</EjTipe>
                  <EjDescript>
                    10 DEADLIFT 80K + 6 BOTB -- 10 DEADLIFT 80K + 8 BOTB -- 10
                    DEADLIFT 80K + 10 BOTB -- 10 DEADLIFT 80K + 12 BOTB -- 10
                    DEADLIFT 80K + 14 BOTB -- 10 DEADLIFT 80K + 16 BOTB -- 10
                    DEADLIFT 80K + MAX BURPEES -- 10 DEADLIFT 80K + MAX BURPEES
                  </EjDescript>
                </PlaniContainer>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>ACCESORIOS</EjTitle>
                  </EjTitleContainer>
                  <EjTipe>TREN SUPERIOR - DORSALES</EjTipe>
                  <EjDescript>
                    6 SETS // (45-1' rest) BARBELL BENT OVER ROW( PIRAMIDAL
                    DESCENDENTE EN PESO) 2 A 4 - 6 A 8 - 8 A 10 - 10 A 12 - 12 A
                    15 REPS - 15 A 20 REPS
                  </EjDescript>
                  <EjTipe>SUPERSET TRICEPS</EjTipe>
                  <EjDescript>
                    3 SETS (1'30 rest) -- 21 CURL CON BARRA PARADO + MARTILLO
                    CON MANCUERNAS AL FALLO 12 kg
                  </EjDescript>
                </PlaniContainer>
              </Box>
            )}
            {tabIndex === 3 && (
              <Box>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>Core</EjTitle>
                  </EjTitleContainer>
                  <EjTipe>4 sets</EjTipe>
                  <EjDescript>
                    30" PLANK BAJA - 30" PLANK ALTA - 30" PLANK IZQ - 30" PLANK
                    DER - 30" REST
                  </EjDescript>
                </PlaniContainer>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>WeightLifting</EjTitle>
                  </EjTitleContainer>
                  <EjTipe>Back Squat</EjTipe>
                  <EjDescript>
                    1 SET X 5 REPS AL 75% - 1 SET X 3 REPS AL 85% - 1 SET X 1
                    REPS O MÁS AL 95%
                  </EjDescript>
                </PlaniContainer>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>Clean Session</EjTitle>
                  </EjTitleContainer>
                  <EjTipe>OTM 12' Escalando</EjTipe>
                  <EjDescript>
                    1 HANG SQUAT CLEAN + 1 FRONT SQUAT, SUMANDO 1 FRONT SQUAT
                    MÁS POR MINUTO
                  </EjDescript>
                </PlaniContainer>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>WOD</EjTitle>
                  </EjTitleContainer>
                  <EjTipe>2 ROUNDS POR TIEMPO</EjTipe>
                  <EjDescript>
                    40 BURPEES -- 30" REST -- 30 HANG POWER CLEAN -- 30" REST --
                    20 BOX JUMP OVER -- 30" REST -- 10 PULL UPS
                  </EjDescript>
                </PlaniContainer>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>ACCESORIOS</EjTitle>
                  </EjTitleContainer>
                  <EjTipe>SUPERSET BICEPS</EjTipe>
                  <EjDescript>
                    3 SETS (1'30 rest) -- 21 CURL CON BARRA PARADO + MARTILLO
                    CON MANCUERNAS AL FALLO 12 kg
                  </EjDescript>
                  <EjTipe>SUPERSET TRICEPS</EjTipe>
                  <EjDescript>
                    3 SETS (1'30 rest) -- 21 CURL CON BARRA PARADO + MARTILLO
                    CON MANCUERNAS AL FALLO 12 kg
                  </EjDescript>
                </PlaniContainer>
              </Box>
            )}
            {tabIndex === 4 && (
              <Box>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>Core</EjTitle>
                  </EjTitleContainer>
                  <EjTipe>4 sets</EjTipe>
                  <EjDescript>
                    30" PLANK BAJA - 30" PLANK ALTA - 30" PLANK IZQ - 30" PLANK
                    DER - 30" REST
                  </EjDescript>
                </PlaniContainer>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>WeightLifting</EjTitle>
                  </EjTitleContainer>
                  <EjTipe>Back Squat</EjTipe>
                  <EjDescript>
                    1 SET X 5 REPS AL 75% - 1 SET X 3 REPS AL 85% - 1 SET X 1
                    REPS O MÁS AL 95%
                  </EjDescript>
                </PlaniContainer>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>Clean Session</EjTitle>
                  </EjTitleContainer>
                  <EjTipe>OTM 12' Escalando</EjTipe>
                  <EjDescript>
                    1 HANG SQUAT CLEAN + 1 FRONT SQUAT, SUMANDO 1 FRONT SQUAT
                    MÁS POR MINUTO
                  </EjDescript>
                </PlaniContainer>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>WOD</EjTitle>
                  </EjTitleContainer>
                  <EjTipe>2 ROUNDS POR TIEMPO</EjTipe>
                  <EjDescript>
                    40 BURPEES -- 30" REST -- 30 HANG POWER CLEAN -- 30" REST --
                    20 BOX JUMP OVER -- 30" REST -- 10 PULL UPS
                  </EjDescript>
                </PlaniContainer>
                <PlaniContainer>
                  <EjTitleContainer>
                    <EjTitle>ACCESORIOS</EjTitle>
                  </EjTitleContainer>
                  <EjTipe>SUPERSET BICEPS</EjTipe>
                  <EjDescript>
                    3 SETS (1'30 rest) -- 21 CURL CON BARRA PARADO + MARTILLO
                    CON MANCUERNAS AL FALLO 12 kg
                  </EjDescript>
                  <EjTipe>SUPERSET TRICEPS</EjTipe>
                  <EjDescript>
                    3 SETS (1'30 rest) -- 21 CURL CON BARRA PARADO + MARTILLO
                    CON MANCUERNAS AL FALLO 12 kg
                  </EjDescript>
                </PlaniContainer>
              </Box>
            )}
          </Box>
        </Paper>
      </div>
    </Wrapper>
  );
};

export default Tabsplani;
