import { Request, Response } from "express";
import AdopterEntity from "../entities/AdopterEntity";
import AdopterRepository from "../repositories/AdopterRepository";
import AddressEntity from "../entities/AddressEntity";

export default class AdotanteController {
  constructor(private repository: AdopterRepository) {}
  async createAdopter(req: Request, res: Response) {
    const { name, phone, address, photo, password } = <AdopterEntity>req.body;

    const novoAdotante = new AdopterEntity(
      name,
      password,
      phone,
      photo,
      address
    );

    await this.repository.createAdopter(novoAdotante);
    return res.status(201).json(novoAdotante);
  }
  async updateAdopter(req: Request, res: Response) {
    const { id } = req.params;
    const { success, message } = await this.repository.updateAdopter(
      Number(id),
      req.body as AdopterEntity
    );

    if (!success) {
      return res.status(404).json({ message });
    }

    return res.sendStatus(204);
  }

  async listAdopters(req: Request, res: Response) {
    const listaDeAdotantes = await this.repository.listAdopters();
    return res.json(listaDeAdotantes);
  }

  async deleteAdopter(req: Request, res: Response) {
    const { id } = req.params;

    const { success, message } = await this.repository.deleteAdopter(
      Number(id)
    );

    if (!success) {
      return res.status(404).json({ message });
    }
    return res.sendStatus(204);
  }

  async updateAdopterAddress(req: Request, res: Response) {
    const { id } = req.params;

    const { success, message } = await this.repository.updateAdopterAddress(
      Number(id),
      req.body as AddressEntity
    );

    if (!success) {
      return res.status(404).json({ message });
    }
    return res.sendStatus(204);
  }
}
