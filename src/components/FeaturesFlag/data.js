import React from "react";

const dummyApiData = {
  GitHubProfileFinder: true,
  Accordion: true,
  LoadMoreData: false,
  QrCodeGenerator: false,
  ImageSlider: true,
  TicTacToe: true,
};

const FeatureFlagDataServiceCall = () => {
  return new Promise((resolve, reject) => {
    if (dummyApiData) {
      setTimeout(() => {
        resolve(dummyApiData);
      }, 500);
    } else reject("Error!")
  });
};

export default FeatureFlagDataServiceCall;
