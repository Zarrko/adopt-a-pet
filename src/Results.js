import React from "react";
import pf from "petfinder-client";
import Pet from "./Pet";

// Class Components
// More flexibility and access to more powerful features.
// Every component is  its own world
// Every Com ponent should be on its own file
// Use Airbnb Eslint rules
// Props: Immutable. States: Mutable

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Results extends React.Component {
  // Render to DOM first then call componentDidMount
  constructor(props) {
    super(props);

    this.state = {
      pets: [],
      loading: false
    };
  }

  componentDidMount() {
    petfinder.pet
      .find({ output: "full", location: "Seattle, WA" })
      .then(data => {
        let pets;

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        this.setState({
          pets,
          loading: true
        });
      });
  }
  render() {
    if (this.state.loading === false) {
      return <h1>Loading All Pets...</h1>;
    }
    return (
      <div className="search">
        {this.state.pets.map(pet => {
          let breed;

          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(", ");
          } else {
            breed = pet.breeds.breed;
          }
          return (
            <Pet
              key={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
              id={pet.id}
            />
          );
        })}
      </div>
    );
  }
}

export default Results;

// return React.createElement("div", { onClick: this.handleTitleClick }, [
//   React.createElement("h1", {}, "Adopt Me!"),
//   React.createElement(Pet, {
//     name: "Luna",
//     animal: "Dog",
//     breed: "Poodle "
//   }),
//   React.createElement(Pet, {
//     name: "Pepper",
//     animal: "Bird",
//     breed: "Cockatiel "
//   }),
//   React.createElement(Pet, {
//     name: "Doink",
//     animal: "Cat",
//     breed: "Mixed "
//   })
// ]);

// {} for properties of the div
// Function Components -- Function that does extend components
// const App = () => {
//     return React.createElement("div", {}, [
//         React.createElement('h1', {}, 'Adopt Me!'),
//         React.createElement(Pet, {
//             name: "Luna",
//             animal: "Dog",
//             breed: "Poodle "
//         }),
//         React.createElement(Pet, {
//             name: "Pepper",
//             animal: "Bird",
//             breed: "Cockatiel "
//         }),
//         React.createElement(Pet, {
//             name: "Doink",
//             animal: "Cat",
//             breed: "Mixed "
//         })
//     ])
// }
