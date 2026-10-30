export enum IUCN {
  LC = 'LC',
  NT = 'NT',
  VU = 'VU',
  EN = 'EN',
  CR = 'CR',
  DD = 'DD'
}


export interface Animal {
    id?: number;
    nom_commun: string;
    nom_savant: string;
    embranchement: string;
    classe: string;
    ordre: string;
    sous_ordre: string;
    famille: string;
    genre: string;
    iucn: IUCN;
    description: string;
  }
  