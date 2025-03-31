import ItemListContainer from "./components/Itemlistcontainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer
        greeting={
          <>
            <p>
              Welcome to our website, where reverence meets inspiration, and the
              past echoes through the hallowed grounds of those who shaped the
              course of history.
            </p>
            <p>
              Explore our exclusive gallery of high-quality photographs
              capturing the resting places of great thinkers, scientists, and
              artists. 
            </p>
            <p>Browse our catalog and find the perfect piece to add to your collection!</p>
          </>
        }
      />
    </>
  );
}

export default App;
