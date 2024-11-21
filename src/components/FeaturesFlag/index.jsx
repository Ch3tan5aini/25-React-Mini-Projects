import React, { useContext } from "react";
import FeatureFlagGloblalState, { FeatureFlagContext } from "./context";
import Accordion from "../Accordion";
import LoadMoreData from "../loadMoreData";
import QrCodeGenerator from "../QrCodeGenerator";
import ImageSlider from "../ImageSlider";
import TicTacToe from "../TicTacToe/TicTacToe";
import ProfileFinder from "../GitHubProfileFinder/ProfileFinder";

const FeatureFlag = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagContext);
  const componentsToRender = [
    {
      key: "GitHubProfileFinder",
      component: <ProfileFinder />,
    },
    {
      key: "Accordion",
      component: <Accordion />,
    },
    {
      key: "LoadMoreData",
      component: <LoadMoreData />,
    },
    {
      key: "QrCodeGenerator",
      component: <QrCodeGenerator />,
    },
    {
      key: "ImageSlider",
      component: <ImageSlider url={"https://picsum.photos/v2/list?"} page={"1"} limit={"10"} />,
    },
    {
      key: "TicTacToe",
      component: <TicTacToe />,
    },
  ];
  console.log(enabledFlags);

  return (
    <div>
      {loading ? (
        <div className="bg-white absolute w-full h-full flex justify-center items-center">
          <span className="animate-spin border-4 border-sky-400 border-dashed rounded-full left-2/4 absolute m-auto z-10 h-12 w-12"></span>
        </div>
      ) : (
        <div className="p-8">
          <h1 className="text-black text-3xl font-bold justify-center flex ">Feature Flags</h1>

          {componentsToRender.map((componentItem) =>
            enabledFlags[componentItem.key] ? componentItem.component : null
          )}
        </div>
      )}
    </div>
  );
};

export default FeatureFlag;
