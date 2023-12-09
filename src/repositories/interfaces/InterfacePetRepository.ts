import PetEntity from "../../entities/PetEntity";
import EnumSize from "../../enum/EnumSize";

export default interface InterfacePetRepository {
  createPet(pet: PetEntity): void | Promise<void>;
  listPet(): Array<PetEntity> | Promise<PetEntity[]>;
  updatePet(
    id: number,
    pet: PetEntity
  ): Promise<{ success: boolean; message?: string }> | void;

  deletPet(id: number): Promise<{ success: boolean; message?: string }> | void;
  adoptPet(
    idPet: number,
    idAdopter: number
  ): Promise<{ success: boolean; message?: string }> | void;

  searchPetByGenericFIeld<Type extends keyof PetEntity>(
    field: Type,
    value: PetEntity[Type]
  ): Promise<PetEntity[]> | PetEntity[];
}
