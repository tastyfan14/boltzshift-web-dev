export type SERVICES_TYPES = {
    id: string;
    title: string;
    desc: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    variant: 'primary' | 'secondary';
}