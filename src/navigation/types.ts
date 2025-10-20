import { Book } from "../models/Book";

export type RootStackParamList = {
  Login: undefined;
  Books: undefined;
  BookInfo: {item: Book};

  BookDetails: { bookId: string };
};
