<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

use App\Entity\Animal;
use App\Enum\Iucn;


class AnimalFixtures extends Fixture
{

    public const ANIMAL_REFS = [];




    public function load(ObjectManager $manager): void
    {
        $animals = [
            [
                'nom_commun' => 'Renard roux',
                'nom_savant' => 'Vulpes vulpes',
                'ordre' => 'Carnivora',
                'classe' => 'Mammalia',
                'famille' => 'Canidae',
                'genre' => 'Vulpes',
                'embranchement' => 'Chordata',
                'sous_ordre' => 'Caniformia',
                'iucn' => Iucn::LC,
                'description' => 'Le renard roux est un mammifère de la famille des canidés.'
            ],
            [
                'nom_commun' => 'Loup gris',
                'nom_savant' => 'Canis lupus',
                'ordre' => 'Carnivora',
                'classe' => 'Mammalia',
                'famille' => 'Canidae',
                'genre' => 'Canis',
                'embranchement' => 'Chordata',
                'sous_ordre' => 'Caniformia',
                'iucn' => Iucn::LC,
                'description' => 'Le loup gris est un prédateur emblématique.'
            ],
            [
                'nom_commun' => 'Panda roux',
                'nom_savant' => 'Ailurus fulgens',
                'ordre' => 'Carnivora',
                'classe' => 'Mammalia',
                'famille' => 'Ailuridae',
                'genre' => 'Ailurus',
                'embranchement' => 'Chordata',
                'sous_ordre' => 'Caniformia',
                'iucn' => Iucn::EN,
                'description' => 'Le panda roux est un petit mammifère arboricole originaire de l’Himalaya, menacé par la déforestation.'
            ],
            [
                'nom_commun' => 'Chat domestique',
                'nom_savant' => 'Felis silvestris catus',
                'ordre' => 'Carnivora',
                'classe' => 'Mammalia',
                'famille' => 'Felidae',
                'genre' => 'Felis',
                'embranchement' => 'Chordata',
                'sous_ordre' => 'Feliformia',
                'iucn' => Iucn::LC,
                'description' => 'Le chat domestique est un petit félin largement répandu, compagnon de l’homme depuis des millénaires.'
            ],
            [
                'nom_commun' => 'Écureuil roux',
                'nom_savant' => 'Sciurus vulgaris',
                'ordre' => 'Rodentia',
                'classe' => 'Mammalia',
                'famille' => 'Sciuridae',
                'genre' => 'Sciurus',
                'embranchement' => 'Chordata',
                'sous_ordre' => 'Sciuromorpha',
                'iucn' => Iucn::LC,
                'description' => 'L’écureuil roux est un rongeur arboricole commun en Europe, reconnaissable à sa queue touffue.'
            ],
            [
                'nom_commun' => 'Capybara',
                'nom_savant' => 'Hydrochoerus hydrochaeris',
                'ordre' => 'Rodentia',
                'classe' => 'Mammalia',
                'famille' => 'Caviidae',
                'genre' => 'Hydrochoerus',
                'embranchement' => 'Chordata',
                'sous_ordre' => 'Hystricomorpha',
                'iucn' => Iucn::LC,
                'description' => 'Le capybara est le plus grand rongeur du monde, vivant près des zones humides en Amérique du Sud.'
            ],
            [
                'nom_commun' => 'Chameau de Bactriane',
                'nom_savant' => 'Camelus bactrianus',
                'ordre' => 'Artiodactyla',
                'classe' => 'Mammalia',
                'famille' => 'Camelidae',
                'genre' => 'Camelus',
                'embranchement' => 'Chordata',
                'sous_ordre' => 'Tylopoda',
                'iucn' => Iucn::LC,
                'description' => 'Le chameau de Bactriane est un grand mammifère domestique à deux bosses, adapté aux climats arides.'
            ],
            [
                'nom_commun' => 'Orque',
                'nom_savant' => 'Orcinus orca',
                'ordre' => 'Cetacea',
                'classe' => 'Mammalia',
                'famille' => 'Delphinidae',
                'genre' => 'Orcinus',
                'embranchement' => 'Chordata',
                'sous_ordre' => 'Odontoceti',
                'iucn' => Iucn::LC,
                'description' => 'L’orque est un cétacé marin carnivore, facilement reconnaissable à sa livrée noire et blanche.'
            ],
            [
                'nom_commun' => 'Dragon de Komodo',
                'nom_savant' => 'Varanus komodoensis',
                'ordre' => 'Squamata',
                'classe' => 'Reptilia',
                'famille' => 'Varanidae',
                'genre' => 'Varanus',
                'embranchement' => 'Chordata',
                'sous_ordre' => 'Autarchoglossa',
                'iucn' => Iucn::EN,
                'description' => 'Le dragon de Komodo est le plus grand lézard vivant, endémique de certaines îles indonésiennes.'
            ],
            [
                'nom_commun' => 'Panthère',
                'nom_savant' => 'Panthera pardus',
                'ordre' => 'Carnivora',
                'classe' => 'Mammalia',
                'famille' => 'Felidae',
                'genre' => 'Panthera',
                'embranchement' => 'Chordata',
                'sous_ordre' => 'Feliformia',
                'iucn' => Iucn::VU,
                'description' => 'La panthère est un grand félin agile et discret, vivant dans divers habitats en Afrique et en Asie.'
            ],
            
        ];

        foreach ($animals as $i => $data) {
            $animal = new Animal();
            $animal
                ->setNomCommun($data['nom_commun'])
                ->setNomSavant($data['nom_savant'])
                ->setOrdre($data['ordre'])
                ->setClasse($data['classe'])
                ->setFamille($data['famille'])
                ->setGenre($data['genre'])
                ->setEmbranchement($data['embranchement'])
                ->setSousOrdre($data['sous_ordre'])
                ->setIucn($data['iucn'])
                ->setDescription($data['description']);

            $manager->persist($animal);
            $this->addReference('animal_' . $i, $animal);
        }




        $manager->flush();
    }
}
