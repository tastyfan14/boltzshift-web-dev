export default function RightTopArrow({ ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="19" cy="19" r="18" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M13 25L25 13M25 13V25M25 13H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}