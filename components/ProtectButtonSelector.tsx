import { Builder, useSupportedBuilders } from "../hooks/useSupportedBuilders";
import Checkbox from "./Checkbox";
import FlashbotsProtectButton from "protect-button";
import React, { useEffect, useState } from "react";

const ProtectButtonSelector = () => {
  const supportedBuilders = useSupportedBuilders();
  const [selectedBuilders, setSelectedBuilders] = useState<string[]>([]);
  const [calldata, setCalldata] = useState(false);
  const [logs, setLogs] = useState(false);
  const [contractAddress, setContractAddress] = useState(false);
  const [functionSelector, setFunctionSelector] = useState(false);
  const [noHints, setNoHints] = useState(false);
  const [curatedBuilders, setCuratedBuilders] = useState<Builder[]>();
  const [allBuilders, setAllBuilders] = useState(false);

  const hints = {
    calldata,
    logs,
    contractAddress,
    functionSelector,
    hash: true,
  };

  const onSetNoHints = (val: boolean) => {
    setNoHints(val);
    if (val === true) {
      // We have to also clear all of the other hints if someone selects no hints.
      setCalldata(false);
      setLogs(false);
      setContractAddress(false);
      setFunctionSelector(false);
    }
  };

  // If the user selects any other hint, the "none" option should be deselected. TODO Is there
  // a more elegant way to handle this than wrapping each hint update in a callback.

  const onSetCalldata = (val: boolean) => {
    setNoHints(false);
    setCalldata(val);
  };

  const onSetLogs = (val: boolean) => {
    setNoHints(false);
    setLogs(val);
  };

  const onSetFunctionSelector = (val: boolean) => {
    setNoHints(false);
    setFunctionSelector(val);
  };

  const onSetContractAddress = (val: boolean) => {
    setNoHints(false);
    setContractAddress(val);
  };

  const toggleBuilder = (name: string) => {
    if (curatedBuilders) {
      if (selectedBuilders.includes(name)) {
        if (selectedBuilders.length === curatedBuilders.length) {
          setAllBuilders(false);
        }
        setSelectedBuilders([...selectedBuilders].filter((b) => b !== name));
      } else {
        if (selectedBuilders.length === curatedBuilders.length - 1) {
          setAllBuilders(true);
        }
        setSelectedBuilders(selectedBuilders.concat(name));
      }
    }
  };

  const toggleAllBuilders = (val: boolean) => {
    setAllBuilders(val);
    if (val === true && curatedBuilders) {
      const allCuratedBuilderNames = curatedBuilders.map((builder) =>
        builder.name.toLowerCase()
      );
      setSelectedBuilders(allCuratedBuilderNames);
    }
  };

  const BuilderCheckbox = ({ name }: { name: string }) => (
    <Checkbox
      label={name}
      id={`builder_${name}`}
      checked={selectedBuilders.includes(name.toLowerCase())}
      onChange={(_) => toggleBuilder(name.toLowerCase())}
    />
  );

  useEffect(() => {
    async function init() {
      if (!curatedBuilders) {
        setCuratedBuilders(await supportedBuilders);
      }
    }
    init();
  }, [curatedBuilders]);

  return (
    <div>
      <div className="md:flex">
        <div className="md:w-1/2 px-4 my-4">
          <p className="font-bold">What will you reveal?</p>
          <hr className="mb-4" />
          <div>
            <Checkbox
              label="Calldata"
              id="calldata"
              checked={calldata}
              onChange={onSetCalldata}
            />
            <Checkbox
              label="Contract Address"
              id="contractAddress"
              checked={contractAddress}
              onChange={onSetContractAddress}
            />
            <Checkbox
              label="Function Selector"
              id="functionSelector"
              checked={functionSelector}
              onChange={onSetFunctionSelector}
            />
            <Checkbox
              label="Logs"
              id="logs"
              checked={logs}
              onChange={onSetLogs}
            />
            <Checkbox
              label="None"
              id="none"
              checked={noHints}
              onChange={onSetNoHints}
            />
          </div>
        </div>
        <div className="md:w-1/2 px-4 my-4">
          <p className="font-bold">Which builders will you share with?</p>
          <hr className="mb-4" />
          {curatedBuilders &&
            curatedBuilders.map((builder, idx) => (
              <BuilderCheckbox name={builder.name} key={idx} />
            ))}
          {curatedBuilders && (
            <Checkbox
              label="all"
              id="all"
              checked={allBuilders === true}
              onChange={toggleAllBuilders}
            />
          )}
        </div>
      </div>
      <p className="text-center text-lg font-cmu">
        Now, click the button to use Flashbots Protect RPC with the additional
        parameters you have chosen.
      </p>
      <div className="flex justify-center">
        <div className="btn btn-primary px-14 rounded-full space-x-3 mb-24">
          <FlashbotsProtectButton hints={hints} builders={selectedBuilders}>
            Special Protection
          </FlashbotsProtectButton>
        </div>
      </div>
    </div>
  );
};

export default ProtectButtonSelector;
