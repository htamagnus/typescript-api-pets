import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import EnumSpecies from "../enum/EnumSpecies";
import AdopterEntity from "./AdopterEntity";
import EnumSize from "../enum/EnumSize";

@Entity()
export default class PetEntity {
  @PrimaryGeneratedColumn()
  id!: number; 
  //o sinal de exclamação serve para dizer que esse campo não vai ser inicializado agora

  @Column()
  name: string;

  @Column()
  species: EnumSpecies;

  @Column({ nullable: true })
  size?: EnumSize;

  @Column()
  dateBirth: Date;

  @Column()
  adopted: boolean;

  @ManyToOne(() => AdopterEntity, (adopter) => adopter.pets)
  adopter!: AdopterEntity;

  constructor(
    name: string,
    species: EnumSpecies,
    dateBirth: Date,
    adopted: boolean,
    size?: EnumSize
  ) {
    this.name = name;
    this.species = species;
    this.size = size;
    this.dateBirth = dateBirth;
    this.adopted = adopted;
  }
}
