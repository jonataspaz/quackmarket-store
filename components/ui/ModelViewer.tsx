"use client";

import { Box } from "lucide-react";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";
import { Button } from "./button";

type ModelViewerProps = {
  modelUrl: string;
  modelIframe: string;
};
const ModelViewer = ({ modelUrl, modelIframe }: ModelViewerProps) => {
  const [iframeOn, setIframeOn] = useState("");
  const sketchfabUrl = `https://sketchfab.com/models/${modelUrl}/embed`;
  const lumaUrl = `${modelIframe}`;

  useEffect(() => {
    if (modelUrl.length > 0) {
      setIframeOn(sketchfabUrl);
    } else {
      setIframeOn(lumaUrl);
    }
  }, [modelUrl, modelIframe, sketchfabUrl, lumaUrl]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="default">
          <div className="flex justify-center align-baseline items-center border rounded-full">
            <p className="p-2">3D View</p>
            <Box />
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <div>
          <iframe
            title="model viewer"
            src={iframeOn}
            width="640"
            height="480"
            allowFullScreen={true}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModelViewer;
