export interface WireRequest {
    id: number | string;
    destinyAcc: string;
    sourceAcc: string;
    amount: number;
    logDateTime: Date;
}
