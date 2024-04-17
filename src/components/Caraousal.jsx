import { useState } from "react";

function Caraousal() {
  const [isActive, setIsActive] = useState(0);
  const data = [
    {
      name: "photo-of-under-the-bridge",
      url: "https://images.pexels.com/photos/20881051/pexels-photo-20881051/free-photo-of-under-the-bridge.jpeg",
    },
    {
      name: "platform1",
      url: "https://images.pexels.com/photos/346257/pexels-photo-346257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "platform2",
      url: "https://images.pexels.com/photos/158918/pexels-photo-158918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "platform3",
      url: "https://images.pexels.com/photos/6457082/pexels-photo-6457082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const handleClick = (index) => {
    index = (index + data.length) % data.length;
    setIsActive(index);
  };
  return (
    <div id="carousel-example" className="relative w-full">
      <div className="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        {data.map((item, idx) => {
          return (
            <div
              id={idx}
              className={`duration-700 ease-in-out ${
                isActive == idx ? "block" : "hidden"
              }`}
            >
              <img
                src={item.url}
                className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt={item.name}
              />
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
        {data.map((item, idx) => {
          <button
            id={idx}
            type={`carousel-indicator- ${idx}`}
            className="h-3 w-3 rounded-full"
            aria-current={idx == isActive}
            aria-label={`Slide ${idx}`}
          ></button>;
        })}
      </div>
      <button
        id="data-carousel-prev"
        type="button"
        className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        onClick={() => {
          handleClick(isActive - 1);
        }}
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-4 w-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="hidden">Previous</span>
        </span>
      </button>
      <button
        id="data-carousel-next"
        type="button"
        className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        onClick={() => {
          handleClick(isActive + 1);
        }}
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-4 w-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="hidden">Next</span>
        </span>
      </button>
    </div>
  );
}

export default Caraousal;
