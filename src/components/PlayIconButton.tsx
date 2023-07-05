interface PlayIconButtonProps {
  loading: boolean;
  playing: boolean;
  onClick: () => void;
}

const PlayIconButton = ({ playing, onClick, loading }: PlayIconButtonProps) => {
  return (
    <button
      className="group flex h-[48px] w-[48px] items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-opacity-75 md:h-[75px] md:w-[75px]"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75">
        <g>
          <circle
            cx="37.5"
            cy="37.5"
            r="37.5"
            className={
              loading
                ? "fill-neutral-400 dark:fill-neutral-700"
                : playing
                ? "fill-purple"
                : "fill-purple/25 group-hover:fill-purple"
            }
          />
          <path
            d="M29 27v21l21-10.5z"
            className={
              loading
                ? "fill-white dark:fill-white/25"
                : playing
                ? "fill-white"
                : "fill-purple group-hover:fill-white"
            }
          />
        </g>
      </svg>
    </button>
  );
};

export default PlayIconButton;
