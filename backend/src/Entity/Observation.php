<?php

namespace App\Entity;


use ApiPlatform\Metadata\ApiResource;

use App\Repository\ObservationRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;




#[ORM\Entity(repositoryClass: ObservationRepository::class)]
#[ApiResource (
    operations: [
        new GetCollection(),
        new Post(denormalizationContext: ['groups' => ['observation:write']], security: "is_granted('ROLE_ADMIN')"),
        new Get(),
        new Put(uriTemplate: '/observations/{id}', input: Observation::class, output: Observation::class), 
        new Patch(uriTemplate: '/observations/{id}', input: Observation::class, output: Observation::class), // Ajout de PATCH
        new Delete()
    ]
)]
class Observation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $date_heure = null;

    #[ORM\Column]
    private ?float $latitude = null;

    #[ORM\Column]
    private ?float $longitude = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Animal $ref_animal = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateHeure(): ?\DateTimeInterface
    {
        return $this->date_heure;
    }

    public function setDateHeure(\DateTimeInterface $date_heure): static
    {
        $this->date_heure = $date_heure;

        return $this;
    }

    public function getLatitude(): ?float
    {
        return $this->latitude;
    }

    public function setLatitude(float $latitude): static
    {
        $this->latitude = $latitude;

        return $this;
    }

    public function getLongitude(): ?float
    {
        return $this->longitude;
    }

    public function setLongitude(float $longitude): static
    {
        $this->longitude = $longitude;

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

    public function getRefAnimal(): ?Animal
    {
        return $this->ref_animal;
    }

    public function setRefAnimal(?Animal $ref_animal): static
    {
        $this->ref_animal = $ref_animal;

        return $this;
    }
}
