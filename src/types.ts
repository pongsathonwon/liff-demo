export type TProfile = {
    userId: string;
    displayName: string;
    pictureUrl?: string;
    statusMessage?: string;
}

export type TDate = { day: number | `${number}`; month: number | `${number}`; year: number | `${number}` };

export interface IWithId {
    id: string | number
}
export type TSpent = 'spend' | 'pay'
export type TBalance = { desc: string; date: string; amount: number, type: TSpent } & IWithId;
export type TBalanceFormData = Omit<TBalance, "id" | "date">;