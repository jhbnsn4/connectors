import { Time } from "@angular/common";
import { IUser } from "./user";

export interface IReview {
    author: IUser,
    stars: number,
    text: string,
    submitted: Date
}