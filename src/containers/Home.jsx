import React from "react";
import ItemMovie from "../components/Home/ItemMovie";


const Home = ({moviesHome}) => {
  return (
  <>
    <div className="w-4/5">
    <section className="container mt-4 bg-slate-50 p-y-4 shadow-lg">
      <div className="flex justify-between border-b-4  font-semibold text-white ">
        <div className="w-fit px-8 py-2 capitalize rounded-t-lg bg-sky-600">
          <p>Popular</p>
        </div>
      </div>
      <div className="container p-4 grid md:grid-cols-5 sm:grid-cols-2 gap-4 ">
        {moviesHome.map((movie) => {
          return <ItemMovie key={movie.id} movie={movie} />;
        })
          .slice(0, 5)
          // .filter((movie) => {
          //   // return movie.title.toLowerCase().includes(search);
          // })
        }
      </div>
      {/* <button
        className="bg-sky-600 text-white w-full text-end py-1 px-2 rounded-lg flex gap-2 content-center capitalize"
        onClick={() => navigate("/popular")}
      >
        Show more {categoryName} movies &raquo;
      </button> */}
    </section>
      {/* <ListMovie
        categoryName="popular"
        movieList={moviesHome}
      /> */}
    </div>
  </>
  );
};

export default Home;
