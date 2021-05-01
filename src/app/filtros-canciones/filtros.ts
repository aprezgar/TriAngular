import { Filtro } from './filtro';
import { Genre } from './genre';
import { Artist } from './artist';


export const FILTROS: Filtro[] = [
    { id: 1, tipo: 'Genre'},
    { id: 2, tipo: 'Artist'},
    { id: 3, tipo: 'Close'}
];

export const GENRES: Genre[] = [
    {id: 1, nombre: 'Pop'},
    {id: 2, nombre: 'Soul'}

];

export const ARTISTS: Artist[] = [
    {id: 1, nombre: 'Backstreet Boys'},
    {id: 2, nombre: 'Spice Girls'},
    {id: 3, nombre: 'Amy Winehouse'},
    {id: 4, nombre: 'Pink'}

];

