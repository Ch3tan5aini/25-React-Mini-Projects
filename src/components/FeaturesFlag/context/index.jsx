import { createContext, useEffect, useState } from "react";
import FeatureFlagDataServiceCall from "../data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGloblalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      const response = await FeatureFlagDataServiceCall();
      setEnabledFlags(response);
      setLoading(false)
    } catch (error) {
      setLoading(false);
      console.log(error);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
