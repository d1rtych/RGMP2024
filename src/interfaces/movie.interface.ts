export interface Movie {
  "title": string,
  "tagline": string,
  "vote_average": number | string,
  "vote_count": number,
  "release_date": string,
  "poster_path": string,
  "overview": string,
  "budget": number,
  "revenue": number,
  "runtime": number | string,
  "genres": string[],
  "id"?: number,
}
