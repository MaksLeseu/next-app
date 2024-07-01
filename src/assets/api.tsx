import {RickAndMortyApi} from "@/assets/rick-and-morty-api";
import {instance} from "@/assets/instances";
import {instanceRick} from "@/assets/instances";

const rickAndMortyApi = new RickAndMortyApi(instanceRick);
/*const nextJsApi = new NextJsApi(instance);*/

export const API = {
    rickAndMorty: rickAndMortyApi,
    /*nextJs: nextJsApi,*/
};