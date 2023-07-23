import axios from "axios";
import { useMemo } from "react";

export type Builder = {
  name: string;
  rpc: string;
  "supported-apis": Array<string>;
};

const fetchSupportedBuilders = async (): Promise<Array<Builder>> => {
  const res = await axios.get(
    "https://raw.githubusercontent.com/flashbots/dowg/main/builder-registrations.json"
  );
  return res.data;
};

export const useSupportedBuilders = async (): Promise<Array<Builder>> => {
  return useMemo(() => fetchSupportedBuilders(), []);
};
