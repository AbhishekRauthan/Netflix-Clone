export interface MdData {
  original_name:string,
  poster_path:string,
  overview:string,
  backdrop_path:string,
  name:string,
  title:string
}

export interface Res {
  results : MdData[]
}