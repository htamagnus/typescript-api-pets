import { Repository } from "typeorm";
import AdopterEntity from "../entities/AdopterEntity";
import InterfaceAdopterRepository from "./interfaces/InterfaceAdopterRepository";
import AddressEntity from "../entities/AddressEntity";

export default class AdopterRepository implements InterfaceAdopterRepository {
  constructor(private repository: Repository<AdopterEntity>) {}

  createAdopter(adopter: AdopterEntity): void | Promise<void> {
    this.repository.save(adopter);
  }
  async listAdopters(): Promise<AdopterEntity[]> {
    return await this.repository.find();
  }
  async updateAdopter(
    id: number,
    newData: AdopterEntity
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const adotanteToUpdate = await this.repository.findOne({ where: { id } });

      if (!adotanteToUpdate) {
        return { success: false, message: "Adotante não encontrado" };
      }

      Object.assign(adotanteToUpdate, newData);

      await this.repository.save(adotanteToUpdate);

      return { success: true };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Ocorreu um erro ao tentar atualizar o adopter.",
      };
    }
  }

  async deleteAdopter(
    id: number
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const adotanteToRemove = await this.repository.findOne({ where: { id } });

      if (!adotanteToRemove) {
        return { success: false, message: "Adotante não encontrado" };
      }

      await this.repository.remove(adotanteToRemove);

      return { success: true };
    } catch (error) {
      // Se ocorrer um erro inesperado, você pode retornar uma mensagem genérica ou personalizada.
      return {
        success: false,
        message: "Ocorreu um erro ao tentar excluir o adopter.",
      };
    }
  }

  async updateAdopterAddress(
    idAdopter: number,
    address: AddressEntity
  ): Promise<{ success: boolean; message?: string }> {
    const adopter = await this.repository.findOne({
      where: { id: idAdopter },
    });

    if (!adopter) {
      return { success: false, message: "Adotante não encontrado" };
    }

    const newAddress = new AddressEntity(address.city, address.state);
    adopter.address = newAddress;
    await this.repository.save(adopter);
    return { success: true };
  }
}
