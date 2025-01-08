import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="title">My Website</div>
        <nav>
          <ul>
            <li>
              <a href="/">Link 1</a>
            </li>
            <li>
              <a href="/">Link 2</a>
            </li>
            <li>
              <a href="/cd ">Link 3</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <article>
          <h1>This is the main heading</h1>
          <p>
            Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
            welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
            garlic.
          </p>

          <p>
            Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot
            courgette tatsoi pea sprouts fava bean collard greens dandelion okra
            wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
          </p>

          <ul className="cards">
            <li>
              <h2>Card One</h2>
              <div className="inner">
                <p>
                  Turnip greens yarrow ricebean rutabaga endive cauliflower sea
                  lettuce kohlrabi amaranth water spinach avocado.
                </p>
              </div>
            </li>
            <li>
              <h2>Card Two</h2>
              <div className="inner">
                <p>
                  Daikon napa cabbage asparagus winter purslane kale. Celery
                  potato scallion desert raisin horseradish spinach carrot soko.
                </p>
              </div>
            </li>
            <li>
              <h2>Card Three</h2>
              <div className="inner">
                <p>
                  Lotus root water spinach fennel kombu maize bamboo shoot green
                  bean swiss chard seakale pumpkin onion chickpea gram corn pea.
                </p>
              </div>
            </li>
            <li>
              <h2>Card Four</h2>
              <div className="inner">
                <p>
                  Lotus root water spinach fennel kombu maize bamboo shoot green
                  bean swiss chard seakale pumpkin onion chickpea gram corn pea.
                </p>
              </div>
            </li>
            <li>
              <h2>Card Five</h2>
              <div className="inner">
                <p>
                  Nori grape silver beet broccoli kombu beet greens fava bean
                  potato quandong celery. Bunya nuts black-eyed pea prairie
                  turnip leek lentil turnip greens parsnip.
                </p>
              </div>
            </li>
          </ul>
        </article>
        <aside className="sidebar">
          <p>
            Have you discovered all of the other excellent content on this
            website?
          </p>
        </aside>
      </main>
    </div>
  );
}

export default App;