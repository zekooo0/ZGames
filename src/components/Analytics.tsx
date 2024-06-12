"use client";

import Hotjar from "@hotjar/browser";
import { useEffect } from "react";

const Analytics = () => {
  const siteId = Number(process.env.HOTJAR_SITE_ID!);
  const hotjarVersion = 6;
  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion);
  }, [siteId]);
  return <></>;
};

export default Analytics;
