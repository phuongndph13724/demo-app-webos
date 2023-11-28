import React from 'react'

const DemoCode = () => {
  return (
    <div>
        1
        {/* <VideoPlayer
            style={{ maxWidth: "70%" }}
            {...props}
            autoCloseTimeout={7000}
            backButtonAriaLabel="go to previous"
            feedbackHideDelay={3000}
            initialJumpDelay={400}
            jumpDelay={200}
            loop
            miniFeedbackHideDelay={2000}
            muted
            onSeekOutsideSelection={handleSeekOutsideSelection}
            onTimeUpdate={handleTimeUpdate}
            selection={selection}
            ref={setVideo}
            onAbort={function noRefCheck() {}}
            onBack={function noRefCheck() {}}
            onCanPlay={function noRefCheck() {}}
            onCanPlayThrough={function noRefCheck() {}}
            onControlsAvailable={function noRefCheck() {}}
            onDurationChange={function noRefCheck() {}}
            onEmptied={function noRefCheck() {}}
            onEncrypted={function noRefCheck() {}}
            onEnded={function noRefCheck() {}}
            onError={function noRefCheck() {}}
            onFastForward={function noRefCheck() {}}
            onJumpBackward={function noRefCheck() {}}
            onJumpForward={function noRefCheck() {}}
            onLoadStart={function noRefCheck() {}}
            onLoadedData={function noRefCheck() {}}
            onLoadedMetadata={function noRefCheck() {}}
            onPause={function noRefCheck() {}}
            onPlay={function noRefCheck() {}}
            onPlaying={function noRefCheck() {}}
            onProgress={function noRefCheck() {}}
            onRateChange={function noRefCheck() {}}
            onRewind={function noRefCheck() {}}
            onSeekFailed={function noRefCheck() {}}
            onSeeked={function noRefCheck() {}}
            onSeeking={function noRefCheck() {}}
            onStalled={function noRefCheck() {}}
            onSuspend={function noRefCheck() {}}
            onToggleMore={function noRefCheck() {}}
            onVolumeChange={function noRefCheck() {}}
            onWaiting={function noRefCheck() {}}
            onWillFastForward={function noRefCheck() {}}
            onWillJumpBackward={function noRefCheck() {}}
            onWillJumpForward={function noRefCheck() {}}
            onWillPause={function noRefCheck() {}}
            onWillPlay={function noRefCheck() {}}
            onWillRewind={function noRefCheck() {}}
          >
            <MediaControls
              jumpBackwardIcon="jumpbackward"
              jumpForwardIcon="jumpforward"
              pauseIcon="pause"
              playIcon="play"
            >
              <Button icon="list" size="small" />
              <Button icon="playspeed" size="small" />
              <Button icon="speakercenter" size="small" />
              <Button icon="miniplayer" size="small" />
              <Button icon="subtitle" size="small" />
              <Button onClick={handleToggleSelection} selected={selecting}>
                {selecting ? "Play Loop" : "Set End Time"}
              </Button>
              <br />
              <VirtualGridList
                dataSize={20}
                direction="horizontal"
                horizontalScrollbar="hidden"
                hoverToScroll
                itemRenderer={renderItem}
                itemSize={{
                  minHeight: 90,
                  minWidth: 106.66666666666666,
                }}
                spacing={4}
                style={{
                  height: 80,
                  marginTop: 20,
                }}
              />
            </MediaControls>
            <source
              src="http://media.w3.org/2010/05/sintel/trailer.mp4"
              // src={URL}
              type="video/mp4"
            />
          </VideoPlayer> */}
          
              {/* <MediaControls
                jumpBackwardIcon="jumpbackward"
                jumpForwardIcon="jumpforward"
                pauseIcon="pause"
                playIcon="play"
              >
                <Button icon="list" size="small" />
                <Button icon="playspeed" size="small" />
                <Button icon="speakercenter" size="small" />
                <Button icon="miniplayer" size="small" />
                <Button icon="subtitle" size="small" />
                <Button onClick={handleToggleSelection} selected={selecting}>
                  {selecting ? "Play Loop" : "Set End Time"}
                </Button>
              </MediaControls> */}
    </div>
  )
}

export default DemoCode