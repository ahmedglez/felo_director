import React, { Suspense } from "react";

const VideoclipItem = React.lazy(() => import("../components/VideoclipItem"));

const VideoClipLoader = ({ videoclip }) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <VideoclipItem videoclip={videoclip} />
        </section>
      </Suspense>
    </div>
  );
};

export default VideoClipLoader;
