import { Filtro } from './filtro';
import { Genre } from './genre';
import { Artist } from './artist';


export const FILTROS: Filtro[] = [
    { id: 1, tipo: 'Genre'},
    { id: 2, tipo: 'Artist'}

];

export const GENRES: Genre[] = [
    {id: 1, nombre: 'Pop'},
    {id: 2, nombre: 'Rock'}

];

export const ARTISTS: Artist[] = [
    {id: 1, nombre: 'Backstreet Boys'},
    {id: 2, nombre: 'Spice Girls'}
];