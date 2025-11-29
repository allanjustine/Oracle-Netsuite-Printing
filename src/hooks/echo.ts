import api from "@/lib/axiosCall";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

const pusherClient = new Pusher(process.env.NEXT_PUBLIC_REVERB_APP_KEY!, {
  cluster: process.env.NEXT_PUBLIC_REVERB_CLUSTER ?? "mt1",
  wsHost: process.env.NEXT_PUBLIC_REVERB_HOST,
  wsPort: Number(process.env.NEXT_PUBLIC_REVERB_PORT),
  wssPort: Number(process.env.NEXT_PUBLIC_REVERB_PORT),
  forceTLS: (process.env.NEXT_PUBLIC_REVERB_SCHEME ?? "https") === "https",
  enabledTransports: ["ws", "wss"],
  authEndpoint:
    String(process.env.NEXT_PUBLIC_API_BASE_URL)?.replace("/v1", "") +
    "/broadcasting/auth",
});

const echo: any = new Echo({
  broadcaster: "reverb",
  client: pusherClient,
  authorizer: (channel: any) => {
    return {
      authorize: async (socketId: any, callback: any) => {
        await api
          .post("/broadcasting/auth", {
            socket_id: socketId,
            channel_name: channel.name,
          })
          .then((response) => {
            callback(false, response.data);
          })
          .catch((error) => {
            callback(true, error);
          });
      },
    };
  },
});

export default echo;
