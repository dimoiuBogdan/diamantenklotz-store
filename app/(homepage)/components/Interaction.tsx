const Interaction = () => {
  return (
    <div className="flex flex-col justify-center bg-[var(--main-dark)] text-white py-10">
      <section className="flex items-center justify-between">
        <div className="w-1/2">
          <p className="uppercase font-bold text-sm text-[var(--main-light)] tracking-widest">
            Try it now
          </p>
          <h3 className="text-4xl font-semibold mt-2 mb-6 tracking-wider">
            Experience the Difference
          </h3>
          <p className="text-[var(--main-lighter)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nihil
            possimus animi cumque, ex itaque quia! Nulla voluptas aliquid ullam?
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-center gap-x-6">
          <button className="cursor-pointer bg-[var(--main-normal)] border-2 border-[var(--main-normal)] text-white hover:text-[var(--main-dark)] text-lg transition-all duration-300 font-medium px-8 py-3 rounded-md">
            Try it now
          </button>
          <button className="cursor-pointer border-2 border-[var(--main-normal)] text-white hover:bg-[var(--main-light)] hover:text-[var(--main-dark)] text-lg transition-all duration-300 font-medium px-8 py-3 rounded-md">
            Learn more
          </button>
        </div>
      </section>
    </div>
  );
};

export default Interaction;
