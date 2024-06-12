const badWords = [
  "nigger",
  "nigga",
  "shemale",
  "faggot",
  "asshole",
  "bitch",
  "pussy",
  "cunt",
  "dick",
  "whore",
  "cock",
  "dildo",
  "penis",
  "vagina",
  "masturbate",
  "masturbating",
  "masturbates",
  "masturbating",
  "masturbation",
  "masturbations",
  "xxx",
  "sex",
  "porn",
  "porno",
  "nsfw",
];

export const filterSearchWords = (search: string) => {
  return badWords.some((badWord) => search.toLowerCase().includes(badWord));
};
