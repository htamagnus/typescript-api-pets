import { Repository } from "typeorm";
import PetEntity from "../entities/PetEntity";
import InterfacePetRepository from "./interfaces/InterfacePetRepository";
import AdopterEntity from "../entities/AdopterEntity";
import EnumSize from "../enum/EnumSize";

export default class PetRepository implements InterfacePetRepository {
  private petRepository: Repository<PetEntity>;
  private adopterRepository: Repository<AdopterEntity>;

  constructor(
    petRepository: Repository<PetEntity>,
    adopterRepository: Repository<AdopterEntity>
  ) {
    this.petRepository = petRepository;
    this.adopterRepository = adopterRepository;
  }

  async createPet(pet: PetEntity): Promise<void> {
    await this.petRepository.save(pet);
  }
  async listPet(): Promise<PetEntity[]> {
    return await this.petRepository.find();
  }
  async updatePet(
    id: number,
    newData: PetEntity
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const petToUpdate = await this.petRepository.findOne({ where: { id } });

      if (!petToUpdate) {
        return { success: false, message: "Pet não encontrado" };
      }

      Object.assign(petToUpdate, newData);

      await this.petRepository.save(petToUpdate);

      return { success: true };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Ocorreu um erro ao tentar atualizar o pet.",
      };
    }
  }

  async deletPet(id: number): Promise<{ success: boolean; message?: string }> {
    try {
      const petToRemove = await this.petRepository.findOne({ where: { id } });

      if (!petToRemove) {
        return { success: false, message: "Pet não encontrado" };
      }

      await this.petRepository.remove(petToRemove);

      return { success: true };
    } catch (error) {
      // Se ocorrer um erro inesperado, você pode retornar uma mensagem genérica ou personalizada.
      return {
        success: false,
        message: "Ocorreu um erro ao tentar excluir o pet.",
      };
    }
  }

  async adoptPet(
    idPet: number,
    idAdopter: number
  ): Promise<{ success: boolean; message?: string }> {
    const pet = await this.petRepository.findOne({ where: { id: idPet } });
    if (!pet) {
      return { success: false, message: "Pet não encontrado" };
    }

    const adopter = await this.adopterRepository.findOne({
      where: { id: idAdopter },
    });
    if (!adopter) {
      return { success: false, message: "Adotante não encontrado" };
    }

    pet.adopter = adopter;
    pet.adopted = true;
    await this.petRepository.save(pet);
    return { success: true };
  }

  async searchPetByGenericFIeld<Type extends keyof PetEntity>(
    field: Type,
    value: PetEntity[Type]
  ): Promise<PetEntity[]> {
    const pets = await this.petRepository.find({ where: { [field]: value } });
    return pets;
  }
}
