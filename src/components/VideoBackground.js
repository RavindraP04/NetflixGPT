import { useSelector } from "react-redux";
import useTrailerVideo from "../Hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  useTrailerVideo(movieId);

  const videoTrailer = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div>
      <iframe
        className="w-full border-none aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          videoTrailer?.key +
          "?rel=0?version=3&autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist="+ videoTrailer?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
