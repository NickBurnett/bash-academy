export interface APIResponse<T> {
    code: number;
    data?: T;
}