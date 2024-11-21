import React from "react";
import Accordion from "./components/Accordion";
import RandomColorGenerator from "./components/RandomColor";
import StarRating from "./components/StarRating";
import ImageSlider from "./components/ImageSlider";
import "./App.css";
import LoadMoreData from "./components/loadMoreData";
import QrCodeGenerator from "./components/QrCodeGenerator";
import TreeView from "./components/TreeView";
import TreeViewdata from "./components/TreeView/data";
import LightAndDarkMode from "./components/Light&DarkMode";
import ScrollIndicator from "./components/Scroll-Indicator";
import TestTabs from "./components/CustomTabs/testTabs";
import TestModal from "./components/CustomPopUpModal/TestModal";
import ProfileFinder from "./components/GitHubProfileFinder/ProfileFinder";
import SearchAutoComplete from "./components/SearchAutoComplete";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import FeatureFlagGloblalState from "./components/FeaturesFlag/context";
import FeatureFlag from "./components/FeaturesFlag";

const App = () => {
  return (
    <div>
      {/* <Accordion /> */}

      {/* <RandomColorGenerator /> */}

      {/* <StarRating noOfStars={10} /> */}

      {/* <ImageSlider url={"https://picsum.photos/v2/list?"} page={"1"} limit={"10"} /> */}

      {/* <LoadMoreData /> */}

      {/* <QrCodeGenerator /> */}

      {/* <TreeView menus={TreeViewdata} /> */}

      {/* <LightAndDarkMode /> */}

      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* <TestTabs /> */}

      {/* <TestModal /> */}

      {/* <ProfileFinder /> */}
      
      {/* <SearchAutoComplete /> */}

      {/* <TicTacToe /> */}

      <FeatureFlagGloblalState >
        <FeatureFlag />
      </FeatureFlagGloblalState>

    </div>
  );
};

export default App;
