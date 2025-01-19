export type Speaker = {
  picture: string;
  name: string;
  role: string;
  networks?: {
    facebook?: string;
    instagram?: string;
    x?: string;
    linkedin?: string;
  };
};

export type Speakers = Speaker[];
