import VideosBack from '../assets/images/videoBack.mp4';

export const VideoBack = () =>
{
  return (
    <video
      src={VideosBack}
      className='m-[0px] fixed opacity-60 '
      id='background-video'
      muted
      autoPlay
      loop
      playsInline
    ></video>
  );
};
