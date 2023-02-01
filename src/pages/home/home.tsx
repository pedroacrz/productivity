import { useEffect, useState } from "react";
import {
  Button,
  CenterDiv,
  Counter,
  Grid,
  GridItem,
  HomeContainer,
  SelectTime,
  Title,
} from "./home.styles";

const Home = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [labelButton, setLabelButton] = useState("Start");
  const [canContinue, setCanContinue] = useState(false);

  const listTimes: Array<Record<string, number>> = [
    { minutes: 10, seconds: 0 },
    { minutes: 15, seconds: 0 },
    { minutes: 20, seconds: 0 },
    { minutes: 25, seconds: 0 },
  ];

  const setTime = (time: any) => {
    if (labelButton === "Stop") {
      setLabelButton("Start");
    }
    setMinutes(time.minutes);
    setSeconds(time.seconds);
    clearInterval(interval);
    setCanContinue(false);
  };

  let interval: any;

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  useEffect(() => {
    if (labelButton === "Stop") {
      interval = setInterval(() => {
        clearInterval(Number(interval));

        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          }
          if (minutes === 5) {
            playSound("end");
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
  }, [seconds]);

  const playSound = (type: "end" | "start") => {
    const types = {
      end: "/bell.wav",
      start: "/bell_start.wav",
    };
    const sound = new Audio(types[type]);
    sound.volume = 0.2;
    sound.play();
  };

  const toogle = () => {
    if (labelButton === "Start") {
      setLabelButton("Stop");

      playSound("start");
      setCanContinue(false);
      clearInterval(interval);
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
        }
      } else {
        setSeconds(seconds - 1);
      }
      return;
    }
    setLabelButton("Start");

    setCanContinue(true);
    clearInterval(interval);
  };

  return (
    <HomeContainer>
      <CenterDiv>
        <Title>Pomodoro</Title>
        <Counter>
          {timerMinutes}:{timerSeconds}
        </Counter>
        <Button
          onClick={() => {
            toogle();
          }}
        >
          {canContinue ? "Continue" : labelButton}
        </Button>
        <SelectTime>selecione o tempo desejado</SelectTime>

        <Grid>
          {listTimes.map((time) => {
            return (
              <GridItem key={time.minutes} onClick={() => setTime(time)}>
                {Number(time.minutes)}
              </GridItem>
            );
          })}
        </Grid>
      </CenterDiv>
    </HomeContainer>
  );
};

export default Home;
