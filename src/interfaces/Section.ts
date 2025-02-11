import { Article } from "./Aricle";

export default interface Section {
  id?: string;
  title?: string;
  articles?: Article[];
}
