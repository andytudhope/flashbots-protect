import { useSupportedBuilders, Builder } from "../hooks/useSupportedBuilders";
import React, { useEffect, useState } from "react";

const SupportedBuildersTable = () => {
  const supportedBuilders = useSupportedBuilders();
  const [builders, setBuilders] = useState<Array<Builder>>([]);

  useEffect(() => {
    async function init() {
      setBuilders(await supportedBuilders);
    }
    if (builders.length === 0) {
      init();
    }
  }, [builders, supportedBuilders]);

  return (
    <table>
      <thead>
        <th>Name</th>
        <th>RPC</th>
      </thead>
      {builders.map((builder) => (
        <tr key={builder.name}>
          <td>{builder.name}</td>
          <td>{builder.rpc}</td>
        </tr>
      ))}
    </table>
  );
};

export default SupportedBuildersTable;