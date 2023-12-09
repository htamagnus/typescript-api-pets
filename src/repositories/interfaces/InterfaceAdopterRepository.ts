import AdopterEntity from "../../entities/AdopterEntity";
import AddressEntity from "../../entities/AddressEntity";

export default interface InterfaceAdopterRepository {
  createAdopter(adopter: AdopterEntity): void | Promise<void>;

  listAdopters(): AdopterEntity[] | Promise<AdopterEntity[]>;

  updateAdopter(
    id: number,
    adopter: AdopterEntity
  ): Promise<{ success: boolean; message?: string }> | void;

  deleteAdopter(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void;

  updateAdopterAddress(
    idAdopter: number,
    address: AddressEntity
  ): Promise<{ success: boolean; message?: string }> | void;
}
