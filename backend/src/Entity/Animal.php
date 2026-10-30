<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Enum\Iucn;
use App\Repository\AnimalRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;


use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;

#[ORM\Entity(repositoryClass: AnimalRepository::class)]
#[ApiResource (
    operations: [
        new GetCollection(),
        new Post(denormalizationContext: ['groups' => ['animal:write']], security: "is_granted('ROLE_ADMIN')"),
        new Get(),
        new Put(uriTemplate: '/animals/{id}', input: Animal::class, output: Animal::class),
        new Patch(uriTemplate: '/animals/{id}', input: Animal::class, output: Animal::class), // Ajout de PATCH
        new Delete()
    ]
)]
class Animal
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom_commun = null;

    #[ORM\Column(length: 255)]
    private ?string $nom_savant = null;

    #[ORM\Column(length: 255)]
    private ?string $embranchement = null;

    #[ORM\Column(length: 255)]
    private ?string $classe = null;

    #[ORM\Column(length: 255)]
    private ?string $ordre = null;

    #[ORM\Column(length: 255)]
    private ?string $sous_ordre = null;

    #[ORM\Column(length: 255)]
    private ?string $famille = null;

    #[ORM\Column(length: 255)]
    private ?string $genre = null;

    #[ORM\Column(enumType: Iucn::class)]
    private ?Iucn $iucn = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomCommun(): ?string
    {
        return $this->nom_commun;
    }

    public function setNomCommun(string $nom_commun): static
    {
        $this->nom_commun = $nom_commun;

        return $this;
    }

    public function getNomSavant(): ?string
    {
        return $this->nom_savant;
    }

    public function setNomSavant(string $nom_savant): static
    {
        $this->nom_savant = $nom_savant;

        return $this;
    }

    public function getEmbranchement(): ?string
    {
        return $this->embranchement;
    }

    public function setEmbranchement(string $embranchement): static
    {
        $this->embranchement = $embranchement;

        return $this;
    }

    public function getClasse(): ?string
    {
        return $this->classe;
    }

    public function setClasse(string $classe): static
    {
        $this->classe = $classe;

        return $this;
    }

    public function getOrdre(): ?string
    {
        return $this->ordre;
    }

    public function setOrdre(string $ordre): static
    {
        $this->ordre = $ordre;

        return $this;
    }

    public function getSousOrdre(): ?string
    {
        return $this->sous_ordre;
    }

    public function setSousOrdre(string $sous_ordre): static
    {
        $this->sous_ordre = $sous_ordre;

        return $this;
    }

    public function getFamille(): ?string
    {
        return $this->famille;
    }

    public function setFamille(string $famille): static
    {
        $this->famille = $famille;

        return $this;
    }

    public function getGenre(): ?string
    {
        return $this->genre;
    }

    public function setGenre(string $genre): static
    {
        $this->genre = $genre;

        return $this;
    }

    public function getIucn(): ?Iucn
    {
        return $this->iucn;
    }

    public function setIucn(Iucn $iucn): static
    {
        $this->iucn = $iucn;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }
}
