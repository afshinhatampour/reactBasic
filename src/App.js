import Navbar from "./Navbar";
import List from './List';
import Counter from "./CounterClass";

function App() {
    const guitars = ["Strat", "Les Paul", "Explore"];
    let stuff = List({title: "Guitars", items: guitars});

    return (
        <>
            <Navbar title="lots of components"/>
            <div className="container">
                <Counter/>
                <List
                    title="Guitars"
                    items={guitars}
                    background='danger'
                />
            </div>
        </>
    );
}

export default App;