import { Request, Response } from "express";
import type TypePet from "../types/TypePet";
import EnumSpecies from "../enum/EnumSpecies";
import EnumSize from "../enum/EnumSize";
import PetRepository from "../repositories/PetRepository";
import PetEntity from "../entities/PetEntity";
let listOfPets: Array<TypePet> = [];

let id = 0;
function generateId() {
  id = id + 1;
  return id;
}

export default class PetController {
  constructor(private repository: PetRepository) {}
  async createPet(req: Request, res: Response) {
    const { adopted, species, dateBirth, name, size } = <PetEntity>(
      req.body
    );

    if (!Object.values(EnumSpecies).includes(species)) {
      return res.status(400).json({ error: "Especie inválida" });
    }

    if (size && !(size in EnumSize)) {
      return res.status(400).json({ error: "Porte inválido" });
    }
    const novoPet = new PetEntity(
      name,
      species,
      dateBirth,
      adopted,
      size
    );

    await this.repository.createPet(novoPet);
    return res.status(201).json(novoPet);
  }

  async listPet(req: Request, res: Response) {
    const listOfPets = await this.repository.listPet();

    return res.status(200).json(listOfPets);
  }

  async updatePet(req: Request, res: Response) {
    const { id } = req.params;
    const { success, message } = await this.repository.updatePet(
      Number(id),
      req.body as PetEntity
    );

    if (!success) {
      return res.status(404).json({ message });
    }
    return res.sendStatus(204);
  }

  async deletPet(req: Request, res: Response) {
    const { id } = req.params;

    const { success, message } = await this.repository.deletPet(Number(id));

    if (!success) {
      return res.status(404).json({ message });
    }
    return res.sendStatus(204);
  }

  async adoptPet(req: Request, res: Response) {
    const { pet_id, adotante_id } = req.params;

    const { success, message } = await this.repository.adoptPet(
      Number(pet_id),
      Number(adotante_id)
    );

    if (!success) {
      return res.status(404).json({ message });
    }
    return res.sendStatus(204);
  }

  async searchPetByGenericFIeld(req: Request, res: Response) {
    const { field, value } = req.query;
    const listOfPets = await this.repository.searchPetByGenericFIeld(
      field as keyof PetEntity,
      value as string
    );
    return res.status(200).json(listOfPets);
  }
}
