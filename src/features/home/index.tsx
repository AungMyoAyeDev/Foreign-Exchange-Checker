import Button from "@/components/ui/Button";
import chevron from "@/assets/images/icon-chevron-down.svg";
import exchangeIcon from "@/assets/images/icon-exchange.svg";
import starIcon from "@/assets/images/icon-star-filled.svg";
const Home = () => {
  return (
    <section>
      <h1 className="text-preset-2 uppercase text-text-primary">
        check the rate
      </h1>
      <div className="mt-4 px-5 bg-surface rounded-20 ">
        {/* send */}
        <div className="flex items-center gap-6 py-5">
          <div className="p-5 rounded-16 bg-card flex-1">
            <h2 className="text-text-muted text-preset-4 mb-5 uppercase">
              send
            </h2>
            <div className="flex items-center justify-between gap-4 ">
              <h3 className="text-preset-1 text-text-primary">1000</h3>
              <Button className="p-3 rounded-8 gap-2">
                <img
                  src="src/assets/images/flags/us.webp"
                  alt="Select box drop down icon"
                  className="w-5 h-5 rounded-full"
                />
                <p className="text-preset-4 text-text-primary">USD</p>
                <img
                  src={chevron}
                  alt="Select box drop down icon"
                  className="w-4 h-4"
                />
              </Button>
            </div>
          </div>

          {/* swap button  */}
          <Button className="w-12 h-12">
            <img src={exchangeIcon} alt="currency exchange button icon" />
          </Button>
          {/* receive  */}
          <div className="p-5 rounded-16 bg-card flex-1">
            <h2 className="text-text-muted text-preset-4 mb-5 uppercase">
              receive
            </h2>
            <div className="flex items-center justify-between gap-4 ">
              <h3 className="text-preset-1 text-text-primary">1000</h3>
              <Button className="p-3 rounded-8 gap-2">
                <img
                  src="src/assets/images/flags/us.webp"
                  alt="Select box drop down icon"
                  className="w-5 h-5 rounded-full"
                />
                <p className="text-preset-4 text-text-primary">USD</p>
                <img
                  src={chevron}
                  alt="Select box drop down icon"
                  className="w-4 h-4"
                />
              </Button>
            </div>
          </div>
        </div>

        {/* cta buttons */}
        <div className="flex items-center gap-4 justify-between py-4">
          <p className="text-preset-5 text-text-secondary">
            1 USD = 0.8530 EUR
          </p>
          <div className="flex uppercase gap-3">
            <Button variants="primary">
              <img src={starIcon} alt="add favorite star " />
              favorited
            </Button>
            <Button variants="secondary">log conversion</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
