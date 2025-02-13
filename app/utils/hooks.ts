import { useMemo } from "react";
import { useAppConfig } from "../store";
import { collectModelsWithDefaultModel } from "./model";

export function useAllModels() {
  const configStore = useAppConfig();
  const models = useMemo(() => {
    return collectModelsWithDefaultModel(
      configStore.models,
      '',
      '',
    );
  }, []);

  console.log('models: ', models);
  return models;
}
