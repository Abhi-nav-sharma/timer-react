import { useEffect, useState } from "react";

const Timer = ({ start, end }) => {
  const [time, setTime] = useState(Number(start));
  useEffect(function () {
    let id = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  if (time > Number(end)) {
    return <h1 style={{ fontSize: "100px" }}>Timer is up</h1>;
  }
  return (
    <>
      <h1 style={{ fontSize: "100px" }}>{time}</h1>
    </>
  );
};
export default Timer;
