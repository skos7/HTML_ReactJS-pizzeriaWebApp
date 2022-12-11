import aboutImage from "../assets/images/about-image.png";

export const About = () => {
  return (
    <div className="bg-white">
      <div className="p-24 grid grid-cols-2">
        <div className="transition ease-in-out hover:-translate-y-10 hover:scale-110 duration-300">
          <h2 className="text-4xl font-medium text-left font-bold text-shadow">About Us</h2>
          <p className="text-lg text-2xl text-justify">
            <p className="text-2xl font-weight: 500 font-bold">
              Our goal is to conquer your palate, but also the hearts of our
              guests. Our guests can enjoy various types of pizza, pasta, salad
              and grill.
            </p>
            <p className="text-2xl font-weight: 500  opacity-50 italic">
              The history of pizza goes all the way back to Roman times when it
              served as an edible base, and modern pizza as we know it today has its
              beginnings in the 17th century, in Naples. One of the most popular pizzas,
              the Margherita, made in honor of the Queen of Savoy by the Neapolitan chef
              Raffaele Esposito, was created in the 18th century. The oldest closed pizzeria
              is considered to be Port'Alba, which started baking way back in 1783, and is
              still working today, and in that pizzeria pizza is made according to the original
              recipe: the dough is kneaded and rolled by hand, without any mechanical aids,
              and baked at 485°C for 60 to 90 seconds. Pizzara follows this Neapolitan tradition
              and strives to offer you pizzas made according to the above original recipe so that
              you can enjoy the best taste of real pizza.
            </p>
          </p>
        </div>
        <div className="flex items-center justify-center transition ease-in-out hover:-translate-y-10 hover:scale-110 duration-300">
          <img
            src={aboutImage}
            alt=""
            className="w-[600px] h-[500px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
