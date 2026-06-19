import Button from "@/components/ui/Button";
import exchangeIcon from "@/assets/images/icon-exchange.svg";
import starIcon from "@/assets/images/icon-star-filled.svg";
import ExchangeCard from "./components/exchange-card";
const Home = () => {
  return (
    <section>
      <h1 className="text-preset-2 uppercase text-text-primary">
        check the rate
      </h1>
      <div className="mt-4 px-5 bg-surface rounded-20 ">
        {/* send */}
        <div className="flex flex-col md:flex-row items-center gap-6 py-5">
          <ExchangeCard type="send" value={1000} currency="USD" />

          {/* swap button  */}
          <Button className="w-12 h-12">
            <img src={exchangeIcon} alt="currency exchange button icon" />
          </Button>
          {/* receive  */}
          <ExchangeCard type="receive" value={1149.1} currency="Eur" />
        </div>

        {/* cta buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between py-4">
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
