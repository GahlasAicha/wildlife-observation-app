<?php

namespace App\Enum;

enum Iucn: string
{
    case EX = 'Éteint';
    case EW = 'Éteint à l\'état sauvage';
    case CR = 'En danger critique';
    case EN = 'En danger';
    case VU = 'Vulnérable';
    case NT = 'Quasi menacé';
    case LC = 'Préoccupation mineure';
    case DD = 'Données insuffisantes';
    case NE = 'Non évalué';
}
