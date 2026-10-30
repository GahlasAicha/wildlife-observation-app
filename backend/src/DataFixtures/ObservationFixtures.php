<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Observation;
use App\Entity\Animal;
use Faker\Factory;

class ObservationFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        
        for ($i = 0; $i < 15; $i++) {
            $observation = new Observation();
            $observation
                ->setDateHeure($faker->dateTimeBetween('-2 years', 'now'))
                ->setLatitude($faker->latitude)
                ->setLongitude($faker->longitude)
                ->setDescription($faker->sentence(12))
                ->setRefAnimal($this->getReference('animal_' . $faker->numberBetween(0, 9), Animal::class))
                ;

            $manager->persist($observation);
        }


        //les animaux plus fréquents
        for ($i = 0; $i < 35; $i++) {
            $observation = new Observation();
            $observation
                ->setDateHeure($faker->dateTimeBetween('-2 years', 'now'))
                ->setLatitude($faker->latitude)
                ->setLongitude($faker->longitude)
                ->setDescription($faker->sentence(12))
                ->setRefAnimal($this->getReference('animal_' . $faker->numberBetween(0, 4), Animal::class))
            ;

            $manager->persist($observation);
        }


        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [
            AnimalFixtures::class,  
        ];
    }
}
