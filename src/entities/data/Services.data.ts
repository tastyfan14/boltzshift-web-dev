import Icon1 from "@components/svgs/icons/Icon1";
import Icon2 from "@components/svgs/icons/Icon2";
import Icon3 from "@components/svgs/icons/Icon3";
import Icon4 from "@components/svgs/icons/Icon4";
import type { SERVICES_TYPES } from "@entities/types/Services.types";

export const SERVICES_DATA: SERVICES_TYPES[] = [
    { id: 'branding', title: 'Branding', desc: 'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.', icon: Icon1, variant: 'primary' },
    { id: 'design', title: 'Design', desc: 'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites. Good design is a good business', icon: Icon2, variant: 'secondary' },
    { id: 'development', title: 'Development', desc: 'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.', icon: Icon3, variant: 'secondary' },
    { id: 'art-direction', title: 'Art Direction', desc: 'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites. Ephemeral art direction & Art Direction', icon: Icon4, variant: 'secondary' },
]