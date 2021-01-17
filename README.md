# cointrade
A Hack the North 2020++ Project.

## Inspiration
If somebody tells you that cryptocurrency does not provide any value, they are wrong. For example, Stem Cell Coin combines AI and blockchain to address the healthcare sector. This means that cryptocurrency acts as an alternate form of a corporate stock: just like a company, a cryptocurrency provides some positive value to the world. Unfortunately, the amount of cryptocurrency funds in the financial industry is small, and most funds focus on investing in large market cap cryptos. Furthermore, these funds must be invested in by purchasing ETFs on a stock market through an expensive brokerage.

## What it does
cointrade allows you to invest in cryptocurrency funds. All you need to do is link your account to a major cryptocurrency exchange and you are able to invest in funds of your choosing. Do you believe that healthcare cryptocurrency is on the rise? Invest in a healthcare-focused crypto fund! Do you see the future value that various supply-chain cryptocurrencies will bring to big and small-box retailers? Invest in a supply-chain crypto fund! Each one of these funds chooses a handful of cryptocurrencies to invest your money into. Instead of buying one cryptocurrency, which may fade into obscurity, you can invest in a fund to diversify your portfolio.

cointrade also allows you to create your own fund using the cointrade REST API. If you have a trading strategy/algorithm, you may establish a fund of your own and post it on our platform for other users to invest in. You can use our REST API to place buy/sell signals for a cryptocurrency or obtain price and volume data, whether it be current or historical. The How To section of our website highlights how to use our API. Please note that the algorithm behind your fund must be open-source for disclosure reasons. If you ever wanted to be your own Standard&Poor or Vanguard, you can now do so by creating your own crypto fund!

Our platform contains some pre-made funds. For example, it contains FBIT, which invests in top market-cap cryptocurrencies every day. However, if the 14-day RSI of a crypto in the FBIT fund is really high (above 80), it sells and waits until the RSI cools down to buy at a lower price. Past performance of these funds was simulated over 1 year of historical data.

## How we built it
We built the front end of cointrade in React using NodeJS. The front end was designed using Figma, a UI design tool that is gaining prominence quickly. We also tested out Overlay, a very new plugin for Figma which aids in converting Figma designs to React. 

We built the back end of cointrade using NodeJS. This backend powers our trading system as well as our API endpoints. We had to use the Binance REST API to perform cryptocurrency trades because we currently support the Binance cryptocurrency exchange.

The funds which we added to our platform are written in Python and run on a local machine. They interface with our custom REST API.

## Challenges we ran into
Neither of us are front end developers. However, we required a front end. Without much knowledge of React (and with no knowledge on UI design), we set out to design the best UI we could in Figma. We tried using Overlay to make the transition between Figma design and React code easier. However, Overlay was not positioning or sizing our elements properly, so we had to look up a lot of tutorials in order to figure out how to fix positioning and sizing.

## Accomplishments that I'm proud of
We created a UI without any experience in UI development.
We learned about algorithmic trading and the use of financial indicators, such as 14-day RSI, MACD, Fibonacci, Moneyflow, etc...

## Why is this project important???
We see lots of provided value by lesser known cryptos. We believe that it is important for the public to be able to invest in these cryptos so that they can flourish and not flop. However, we recognize that putting your eggs into one potentially risky basket is a bad idea, which is why we wanted to create an easy way for users to diversify over cryptos of their choice. A crypto fund on our platform facilitates this.

## What's next for cointrade
We want to support more cryptocurrency exchanges. Currently, we support the world's largest (Binance).
We want to add more of our own funds to our platform.
We had an idea where we could expand our fund exchange by creating a volatility index (similar to VIX but for crypto). We then planned on creating crypto ETNs (exchange-traded notes) as well as futures which are both based off of our volatility index. This could allow for more speculative trading.
