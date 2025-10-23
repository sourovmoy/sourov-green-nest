const getPlants = () => {
  const getPlantsString = localStorage.getItem("plants");
  if (getPlantsString) {
    const parseGetPlant = JSON.parse(getPlantsString);
    return parseGetPlant;
  }
  return [];
};

const setItemString = (plants) => {
  const plantsString = JSON.stringify(plants);
  localStorage.setItem("plants", plantsString);
};

const addPlants = (plant) => {
  const plants = getPlants();
  const allPlants = [...plants, plant];
  setItemString(allPlants);
};

const removePlants = (id) => {
  const plants = getPlants();
  const filterPlants = plants.filter((plant) => plant.plantId !== id);
  setItemString(filterPlants);
};
export { getPlants, addPlants, removePlants };
