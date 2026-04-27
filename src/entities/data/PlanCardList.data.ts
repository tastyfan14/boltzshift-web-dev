import type { PlanCardList } from "@entities/types/PlanCardList.types";

export const PLANCARDLIST_DATA: PlanCardList[] = [
    { id: 'basic', title: 'BASIC', price: 49, items: ['Weekly updates', 'Secure and Reliable', 'Limited data points', '10+ Free Templates', 'No Support', 'Budget-friendly pricing'], variant: 'secondary' },
    { id: 'pro', title: 'PRO', price: 249, items: ['Daily updates', 'Secure and Reliable', 'Hosting + Domain setup', 'Website design & development', 'Priority support', 'For businesses and professionals who need more features', '1M data points', 'More Templates', 'VIP status'], variant: 'primary' },
    { id: 'enterprise', title: 'ENTERPRISE', price: 499, items: ['For Enterprises', 'Secure and Reliable', 'Real-time data updates', 'Comprehensive data points', 'Priority support', 'Budget-friendly pricing for enterprises', 'For businesses and professionals'], variant: 'secondary' },
]