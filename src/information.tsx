import {
  useActiveViewId,
  useMeta,
  usePrimaryField,
  useViewMeta,
} from "@apitable/widget-sdk";
import React from "react";

export const Information: React.FC = () => {
  const meta = useMeta();
  const activeViewId = useActiveViewId();
  const view = useViewMeta(activeViewId);
  const primaryField = usePrimaryField();
  return (
    <div>
      <h3>Basic information of Widget</h3>
      <p>widgetPackageName: {meta?.widgetPackageName}</p>
      <p>datasheetName: {meta?.datasheetName}</p>
      <p>widget (widgetId): {meta?.id}</p>
      <p>datasheet (datasheetId): {meta?.datasheetId}</p>
      <p>view: {view?.name}</p>
      <p>primaryField: {primaryField?.name}</p>
    </div>
  );
};
