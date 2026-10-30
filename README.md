## DEMARRAGE DU PROJET 
 1. Clonage du dépôt git 
 2. Décompression de l’archive ct2024.zip
 3. git add-A
 4. git commit-m "Code fourni"
 5. git push 


 ## Membres du groupe 
 Seffar Nordine    nordine.seffar@etu.univ-orleans.fr
 Gahlas Aicha      aicha.gahlas@etu.univ-orleans.fr
 Aissat Fatima     fatima.aissat@etu.univ-orleans.fr
 Mimoun Ali        ali.mimoun@etu.univ-orleans.fr


 ## Question 1 : les Observations : 

  
   les informations des observations sont implémentées sous forme de propriétes comme suit  
      
       *** Propriétés implémentées :

     Nom Propriété -- Type  -- Description 
     Id -- int              -- l'id de l'observation 
     dateHeure -- datetime  -- la date et l'heure  de l'observation 
     Latitude -- float     --  Latitude GPS du lieu d’observation
     Longitude -- float    -- Longitude GPS du lieu d’observation
     Description -- text   -- Description textuelle de l’observation
     animalId -- integer    -- clé Etrangere vers Animal 

       *** Explication 
          1. **Découpage des coordonnées de la localisation de GPS ** :
              - Deux propriétés distinctes (`Latitude`/`Longitude`) 
              - Toutes deux en 'float'
          2. ** Relations** 
              - `animalId` comme clé étrangère simple (ManyToOne)
              - Pas de collection pour respecter "un seul animal par observation"

 ## Question 2 :

  docker compose build
  docker compose up -d
  docker exec -ti server_symfony bash

  symfony console doctrine:database:create

  php bin/console make:entity Animal

  symfony console make:entity Observation

  php bin/console make:migration

  php bin/console doctrine:migrations:migrate

  symfony server:start --no-tls --listen-ip=0.0.0.0 --d

 
 
  ## Question 3

  composer require --dev orm-fixtures fakerphp/faker

  php bin/console make:fixture AnimalFixtures
  php bin/console make:fixture ObservationFixtures

  php bin/console doctrine:fixtures:load



  ## Question 4

  docker compose up -d
  docker attach angular_server

  ng generate component about --standalone

  npm install tslib --save

  ng serve --host 0.0.0.0 &


  ## Question 5

  ng generate service services/animal

  ng generate service services/observation


  ## Question 6
  ng generate component animal/animal-list --standalone
  ng generate component animal/animal-detail --standalone
  ng generate component animal/animal-form --standalone



  ## Question 7
  ng generate component observation/observation-list --standalone
  ng generate component observation/observation-detail --standalone
  ng generate component observation/observation-form --standalone
  

  ## Question 8
  ng add @angular/material
  ng generate component navigation --standalone --inline-template --inline-style

  ## Question 9

  symfony console make:user
  symfony console make:controller Api/Auth

  ng add @angular/material
  ng g c auth/login --standalone
  ng g c auth/register --standalone
  ng g s services/auth




