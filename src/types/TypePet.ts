import EnumSpecies from "../enum/EnumSpecies";

type TypePet = {
  id: number;
  name: string;
  species: EnumSpecies;
  adopted: boolean;
  dateBirth: Date;
};

export default TypePet;
