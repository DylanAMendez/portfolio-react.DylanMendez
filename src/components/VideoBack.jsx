import VideosBack from '../assets/images/galaxy-01.jpg';

export const VideoBack = () =>
{
  return (
    <img
      src={VideosBack}
      className='m-[0px] fixed opacity-100 '
      id='background-video'
    ></img>
  );
};
