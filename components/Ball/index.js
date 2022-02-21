import dynamic from "next/dynamic";

const BallCanvas = dynamic(import("components/Ball/BallCanvas"),{ ssr: false });
export default BallCanvas
