let users = [
  {
    id: 0,
    name: "Jimmy",
    cars: [0, 1],
  },
  {
    id: 1,
    name: "Ferguson",
    cars: [],
  },
  {
    id: 2,
    name: "Finnigan",
    cars: [2],
  },
];

let cars = [
  {
    id: 0,
    make: "Subaru",
    model: "Outback",
    color: "silver",
    ownedBy: 0,
  },
  {
    id: 1,
    make: "Subaru",
    model: "Forester",
    color: "blue",
    ownedBy: 1,
  },
  {
    id: 2,
    make: "Subaru",
    model: "CRZ",
    color: "red",
    ownedBy: 2,
  },
];

module.exports = {
  users,
  cars,
};
