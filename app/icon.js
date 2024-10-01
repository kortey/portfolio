import { ImageResponse } from "next/server";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <img
        src={new URL("./favicon.png", import.meta.url).toString()}
        width={32}
        height={32}
        alt="Favicon"
      />
    ),
    { ...size }
  );
}
