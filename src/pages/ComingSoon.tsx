const ComingSoon = () => {
  return (
    <div className="h-screen w-full relative">
      <img
        src={'https://picsum.photos/1920/1080'}
        alt="COMING SOON"
        className="w-full h-screen absolute top-0 right-0 left-0"
      />
      <div className="overlay"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
        <h1 className="text-4xl font-bold text-white">COMING SOON</h1>
      </div>
    </div>
  );
};

export default ComingSoon;
