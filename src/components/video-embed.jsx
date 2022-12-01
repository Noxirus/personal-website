import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Iframe from 'react-iframe'

const VideoEmbed = ({ videoUrl }) => (
  <ResponsiveDiv className="video-responsive">
    <ResponsiveIFrame
      width="853"
      height="480"
      src={videoUrl}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </ResponsiveDiv>
);

VideoEmbed.propTypes = {
  videoUrl: PropTypes.string.isRequired
};

export default VideoEmbed;

const ResponsiveDiv = styled.div`
overflow: hidden;
padding-bottom: 56.25%;
position: relative;
height: 0;
`
const ResponsiveIFrame = styled(Iframe)`
left: 0;
top: 0;
height: 100%;
width: 100%;
position: absolute;
`