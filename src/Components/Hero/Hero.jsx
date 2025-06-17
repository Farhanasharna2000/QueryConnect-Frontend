
const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1920&q=80')", 
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Ask Questions, Get Answers, Share Knowledge
        </h1>

        <form className="flex items-center gap-2 bg-white/90 rounded-full px-4 py-2 shadow-md">
          <input
            type="text"
            placeholder="Search questions..."
            className="flex-1 px-4 py-2 rounded-full outline-none text-black bg-transparent"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
