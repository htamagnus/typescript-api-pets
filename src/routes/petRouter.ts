import express from "express";
import PetController from "../controller/PetController";
import PetRepository from "../repositories/PetRepository";
import { AppDataSource } from "../config/dataSource";
const router = express.Router();
const petRepository = new PetRepository(
  AppDataSource.getRepository("PetEntity"),
  AppDataSource.getRepository("AdopterEntity")
);
const petController = new PetController(petRepository);

router.post("/", (req, res) => petController.createPet(req, res));
router.get("/", (req, res) => petController.listPet(req, res));
router.put("/:id", (req, res) => petController.updatePet(req, res));
router.delete("/:id", (req, res) => petController.deletPet(req, res));
router.put("/:pet_id/:adotante_id", (req, res) =>
  petController.adoptPet(req, res)
);
router.get("filter", (req, res) =>
  petController.searchPetByGenericFIeld(req, res)
);

export default router;
