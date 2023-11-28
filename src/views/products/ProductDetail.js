import MediaOverlay from "@enact/sandstone/MediaOverlay";
import Icon from "@enact/sandstone/Icon";
import Scroller from "@enact/sandstone/Scroller";
import { Panel } from "@enact/sandstone/Panels";
import ri from "@enact/ui/resolution";
import ProgressBar from '@enact/sandstone/ProgressBar';
import { useCallback, useEffect, useRef, useState } from "react";
import Spottable from "@enact/spotlight/Spottable";
import css from "./Product.module.less";
import Slider from "@enact/sandstone/Slider";
import VideoPlayer from '@enact/sandstone/VideoPlayer';
import { AvatarUser, LikeIc } from "../../assets/icons/video-icons";
import { mediaJSON } from "../../services/datas/dataVideo";

const ProductDetail = () => {
  return (
    <div>
      <SelectableVideoPlayer />
    </div>
  );
};

const maxDataSize = 10;
const items = [];
for (let i = 0; i < maxDataSize; i++) {
  const count = ("00" + i).slice(-3);
  items.push({
    text: "Item " + count,
  });
}

const SelectableVideoPlayer = (props) => {
  const SpottableButton = Spottable("button");
  const videoRef = useRef(null);
  const videoHtmlRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [currentDataVideo, setCurrentDataVideo] = useState({
    id: 1,
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    ],
    subtitle: "By Blender Foundation",
    thumb: "images/BigBuckBunny.jpg",
    title: "Big Buck Bunny",
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [focusableScrollbar, setFocusableScrollbar] = useState(false);
  const [volume, setVolume] = useState(1);
  const [height, setHeight] = useState(2000);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [like, setLike] = useState(99);
  const [disLike, setDisLike] = useState(0);

  const [selection, setSelection] = useState([]);

  const handleToggleSelection = useCallback(() => {
    const { currentTime } = videoRef.current.getMediaState();
    if (selection.length !== 1) {
      setSelection([currentTime]);
    } else {
      setSelection([selection[0], currentTime].sort((a, b) => a - b));
    }
  }, [selection]);

  const handlePlayPause = () => {
    // Play or pause video
    if (isPlaying) {
      videoHtmlRef.current.pause();
      setIsPlaying(false);
    } else {
      videoHtmlRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleJumpBack = () => {
    if (videoHtmlRef.current) {
      // Go back 10 seconds (you can adjust this value as needed)
      videoHtmlRef.current.currentTime = Math.max(
        videoHtmlRef.current.currentTime - 5,
        0
      );
    }
  };
  const handleJumpFor = () => {
    if (videoHtmlRef.current) {
      // Go back 10 seconds (you can adjust this value as needed)
      videoHtmlRef.current.currentTime = Math.max(
        videoHtmlRef.current.currentTime + 5,
        0
      );
    }
  };

  const handleVolumeChange = (event) => {
    // Set volume to the new percentage of max volume
    setVolume(event.value);
    videoHtmlRef.current.volume = event.value;
  };

  const handleTimeVideoChange = (event) => {
    const newTime = event.value;
    videoHtmlRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleFullScreen = () => {
    //Change full or exit fullScreen
    if (!isFullScreen) {
      videoContainerRef.current.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  const handleOnClickLike = () => {
    setLike(like + 1);
  };

  const handleOnClickDisLike = () => {
    setDisLike(disLike + 1);
  };

  const handleLoadedMetadata = () => {
    setDuration(parseInt(videoHtmlRef.current.duration));
  };

  const handleTimeUpdate = () => {
    if (isPlaying) {
      setCurrentTime(videoHtmlRef.current.currentTime);
    }
  };

  useEffect(() => {
      const videoEl = videoHtmlRef.current;
      videoEl.addEventListener("loadedmetadata", handleLoadedMetadata);
      videoEl.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        videoEl.removeEventListener("loadedmetadata", handleLoadedMetadata);
        videoEl.removeEventListener("timeupdate", handleTimeUpdate);
      };
  }, [isPlaying]);

  const getScaledSize = (size) => ri.scale(parseInt(size) || 0);
  // const URL = "https://img.pikbest.com/09/09/09/85YpIkbEsTTFc.mp4";
  const URL = "https://pic.pikbest.com/19/82/49/585888piCiKk.mp4";
  return (
    // <Panel>
    <Scroller
      focusableScrollbar={focusableScrollbar}
      scrollMode="translate"
      // key={nativeScroll ? "native" : "translate"}
      // scrollMode={nativeScroll ? "native" : "translate"}
    >
      <div
        className=""
        style={{
          height: `${getScaledSize(height)}px`,
        }}
      >
        <div className="flex h-full w-full justify-between">
          <div className="w-[70%] max-w-[70%] h-full flex flex-col justify-start">
            <div ref={videoContainerRef} className="w-full flex relative">
              <div className="absolute bottom-2 left-2 w-full right-2">
                <div className="w-full pr-4">
                  <ProgressBar
                    highlighted={true}
                    backgroundProgress={0.1}
                    className={null}
                    orientation="horizontal"
                    progress={videoHtmlRef?.current?.currentTime ? videoHtmlRef.current.currentTime / videoHtmlRef.current.duration : 0}
                    // showAnchor={true}
                    tooltip={
                      <span>{`${Math.floor((videoHtmlRef?.current?.currentTime / videoHtmlRef?.current?.duration) * 100).toFixed()}%`}</span>
                    }
                    progressAnchor={0}
                  />
                  {/* <Slider
                    backgroundProgress={0.1}
                    keyFrequency={[1]}
                    max={duration}
                    min={0}
                    value={currentTime}
                    // defaultValue={0}
                    onActivate={function noRefCheck() {}}
                    onChange={handleTimeVideoChange}
                    onWheel={function noRefCheck() {}}
                    orientation="horizontal"
                    progressAnchor={0}
                    step={1}
                    wheelInterval={0}
                  /> */}
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="flex z-10">
                    <SpottableButton
                      className="focus:ring-2 focus:bg-black focus:ring-white"
                      onClick={() => handleJumpBack()}
                    >
                      <Icon>jumpbackward</Icon>
                    </SpottableButton>
                    <SpottableButton
                      className="focus:ring-2 focus:bg-black focus:ring-white"
                      onClick={() => handlePlayPause()}
                    >
                      {isPlaying ? <Icon>pause</Icon> : <Icon>play</Icon>}
                    </SpottableButton>
                    <SpottableButton
                      className="focus:ring-2 focus:bg-black focus:ring-white"
                      onClick={() => handleJumpFor()}
                    >
                      <Icon>jumpforward</Icon>
                    </SpottableButton>

                    <div className="controls w-32 m-auto">
                      <Slider
                        keyFrequency={[1]}
                        max={1}
                        min={0}
                        value={volume}
                        // defaultValue={1}
                        onActivate={function noRefCheck() {}}
                        onChange={handleVolumeChange}
                        onWheel={function noRefCheck() {}}
                        orientation="horizontal"
                        width={100}
                        progressAnchor={0}
                        step={0.1}
                        wheelInterval={0}
                      />

                      {/* <SpottableInput className="focus:ring-2 focus:ring-white" type="range" min="0" max="1" step="0.1" value={volume} onChange={handleVolumeChange} /> */}
                    </div>
                  </div>
                  <div className="flex z-10  mr-3">
                    <SpottableButton
                      className="focus:ring-2 focus:bg-black focus:ring-white"
                      onClick={() => handleFullScreen()}
                    >
                      {isFullScreen ? (
                        <Icon>exitfullscreen</Icon>
                      ) : (
                        <Icon>fullscreen</Icon>
                      )}
                    </SpottableButton>
                  </div>
                </div>
              </div>
              <video
                ref={videoHtmlRef}
                className="w-full h-auto object-cover"
                id="leftVideo"
                // autoPlay
                // controls
                preload="auto"
                loop
                poster={currentDataVideo?.thumb}
                thumb={currentDataVideo?.thumb}
                // muted
              >
                {currentDataVideo?.sources?.map((sources, key) => {
                  return <source key={key} src={sources} type="video/mp4" />;
                })}
                <p>This browser does not support the video element.</p>
              </video>
            </div>
            <div className="my-1">
              <h3 className="max-w-full my-1">{currentDataVideo?.title}</h3>
              <div className="flex justify-between my-1">
                <div className="flex justify-start items-center">
                  <AvatarUser className="mx-1 rounded-full" />
                  <div className="flex flex-col">
                    <h4>{currentDataVideo?.subtitle}</h4>
                    <span>313 N sub</span>
                  </div>
                </div>
                <div className="flex justify-end items-center">
                  <div
                    style={{ maxHeight: 60, height: 60 }}
                    className="flex justify-center items-center mx-2 px-1 bg-gray-950 rounded-md"
                  >
                    <SpottableButton
                      onClick={() => handleOnClickLike()}
                      className="p-1 rounded-full focus:bg-gray-800 focus:text-white"
                    >
                      <LikeIc className="mr-1" />
                    </SpottableButton>{" "}
                    {like} |
                    <SpottableButton
                      onClick={() => handleOnClickDisLike()}
                      className="p-1 rounded-full focus:bg-gray-800 focus:text-white"
                    >
                      <LikeIc className="rotate-180 mr-1" />
                    </SpottableButton>{" "}
                    {disLike}
                  </div>
                  <SpottableButton
                    style={{ maxHeight: 60, height: 60 }}
                    className="flex items-center mx-2 px-1 bg-gray-950 rounded-md focus:bg-gray-800 focus:text-white"
                  >
                    <Icon>share</Icon> Share
                  </SpottableButton>
                  <SpottableButton
                    style={{ maxHeight: 60, height: 60 }}
                    className="flex items-center mx-2 px-1 bg-gray-950 rounded-md focus:bg-gray-800 focus:text-white"
                  >
                    <Icon>download</Icon> Download
                  </SpottableButton>
                  <SpottableButton
                    style={{ maxHeight: 60, height: 60 }}
                    className="flex items-center mx-2 rounded-full bg-gray-950 focus:bg-gray-800 focus:text-white"
                  >
                    <Icon className="scale-50">ellipsis</Icon>
                  </SpottableButton>
                </div>
              </div>
              <p className="w-full max-w-full h-auto rounded-lg bg-gray-700 whitespace-normal overflow-wrap break-words p-2 my-1 text-sm">
                {currentDataVideo?.description}
              </p>
            </div>
          </div>
          <div className="w-[25%] max-w-[25%]">
            {mediaJSON?.map((video, index) => {
              return (
                <MediaOverlay
                  className={`${
                    video?.id === currentDataVideo?.id
                      ? "bg-gray-50 rounded text-black my-2"
                      : ""
                  }`}
                  onClick={() => {
                    setIsPlaying(false);
                    videoHtmlRef.current.currentTime = 0;
                    videoHtmlRef.current.load();
                    videoHtmlRef.current.play();
                    setIsPlaying(true);
                    setCurrentDataVideo(video);
                  }}
                  key={index}
                  caption={video?.subtitle}
                  marqueeOn="hover"
                  muted
                  progress={0.5}
                  subtitle="07:00 AM - 08:00 AM"
                  textAlign="end"
                  imageOverlay="https://pic.pikbest.com/02/18/80/65f888piCEB8.jpg!bw700"
                  title={video?.title}
                >
                  {video?.sources?.map((sources, key) => {
                    return <source key={key} src={sources} />;
                  })}
                </MediaOverlay>
              );
            })}
            <div className="h-24"></div>
          </div>
        </div>
      </div>
    </Scroller>
    // </Panel>
  );
};

export default ProductDetail;
