import { useEffect, useState } from "react";
import api from "@/lib/axiosCall";
import Echo from "laravel-echo";

import Pusher from "pusher-js";
(window as any).Pusher = Pusher;

const useEcho = () => {
  const [echoInstance, setEchoInstance] = useState(null);

  useEffect(() => {
    const echo: any = new Echo({
      broadcaster: "reverb",
      key: process.env.NEXT_PUBLIC_REVERB_APP_KEY,
      //   authorizer: (channel: any) => {
      //     return {
      //       authorize: (socketId: any, callback: any) => {
      //         api
      //           .post("/api/broadcasting/auth", {
      //             socket_id: socketId,
      //             channel_name: channel.name,
      //           })
      //           .then((response) => {
      //             callback(false, response.data);
      //           })
      //           .catch((error) => {
      //             callback(true, error);
      //           });
      //       },
      //     };
      //   },
      wsHost: process.env.NEXT_PUBLIC_REVERB_HOST,
      wsPort: process.env.NEXT_PUBLIC_REVERB_PORT,
      wssPort: process.env.NEXT_PUBLIC_REVERB_PORT,
      forceTLS: (process.env.NEXT_PUBLIC_REVERB_SCHEME ?? "https") === "https",
      enabledTransports: ["ws", "wss"],
    });
    setEchoInstance(echo);
  }, []);

  return echoInstance;
};

export default useEcho;
