import { useEffect, useState } from "react";
import { Text, View } from "react-native";

function Clock() {
  const [counter, setCounter] = useState<string>(getTime());

  function getTime(): string {

    return new Date().toTimeString().substring(0, 5);
  }


  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(getTime());
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ color: "white", fontSize: 128 }}>{counter}</Text>
    </View>
  );
}

export default Clock;

