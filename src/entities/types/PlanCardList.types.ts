export type PlanCardList = {
    id: string;
    title: string;
    price: number;
    items: string[];
    variant: 'primary' | 'secondary';
}