/**
 * Centralized content configuration for the professional portfolio.
 *
 * IMPORTANT:
 * - Keep client-specific information here rather than hardcoding it
 *   inside individual components.
 * - Only publish factual claims that have been verified by the client
 *   or are clearly supported by supplied client material.
 * - Temporary empty values are intentional where the client has not
 *   yet supplied the exact information in this conversation.
 */

export type CareerMilestone = {
    year: string;
    title: string;
    description: string;
    details: string[];
};

export type Service = {
    title: string;
    description: string;
    details: string[];
    benefit?: string;
};

export type Achievement = {
    category: string;
    title: string;
    description: string;
    details: string[];
};

export type GalleryItem = {
    title: string;
    description: string;
    image: string;
    alt: string;
    category: string;
    video?: string;
};

export type ContactFormField = {
    name: string;
    label: string;
    type: "text" | "tel" | "email" | "textarea";
    placeholder: string;
    required: boolean;
};

export const siteData = {
    /*
     * ============================================================
     * GLOBAL IDENTITY
     * ============================================================
     */

    global: {
        name: "Mrs. Darshanee Pravin Lokhande",
        designation:
            "Certified Financial Planner, Tax Consultant & Insurance Advisor",
        title:
            "Certified Financial Planner, Tax Consultant & Insurance Advisor",
        tagline: "We Assure Our Best To Serve You...",
        description:
            "Professional financial planning, insurance and advisory services built around informed decisions, protection and long-term client support.",
        location: "",
    },

    /*
     * ============================================================
     * NAVIGATION
     * ============================================================
     *
     * The final section structure will be refined after the real
     * content is integrated.
     */

    navigation: {
        links: [
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "LIC", href: "#lic" },
            { label: "Expertise", href: "#services" },
            { label: "Recognition", href: "#achievements" },
            { label: "Gallery", href: "#gallery" },
            { label: "Approach", href: "#approach" },
        ],
        ctaLabel: "Get in Touch",
    },

    /*
     * ============================================================
     * HERO
     * ============================================================
     */

    hero: {
        eyebrow: "CERTIFIED FINANCIAL PLANNER · TAX CONSULTANT · INSURANCE ADVISOR",
        headline: "Experience.\nGuidance. Confidence.",
        description:
            "Helping individuals, families and businesses approach financial protection and insurance decisions with clarity and professional guidance.",
        primaryCta: {
            label: "Get in Touch",
            action: "contact",
        },
        secondaryCta: {
            label: "Explore Expertise",
            href: "#services",
        },
        image:
            "https://res.cloudinary.com/djblsvzgm/image/upload/hero-portrait_cbocoq",
        imageAlt:
            "Mrs. Darshanee Pravin Lokhande, Certified Financial Planner, Tax Consultant and Insurance Advisor",
    },

    /*
     * ============================================================
     * CREDIBILITY SNAPSHOT
     * ============================================================
     *
     * Do not use the numerical claims from the promotional poster
     * until the client confirms that they are current and approved
     * for website publication.
     */

    stats: [
        {
            value: "2013",
            label: "Started With LIC",
        },
        {
            value: "MDRT",
            label: "2024 Recognition",
        },
        {
            value: "LIC",
            label: "Insurance Advisory",
        },
        {
            value: "Team Lakshya",
            label: "Professional Practice",
        },
    ],

    /*
     * ============================================================
     * ABOUT / PROFESSIONAL PROFILE
     * ============================================================
     */

    about: {
        eyebrow: "PROFESSIONAL PROFILE",
        headline: "Professional Guidance.\nBuilt on Experience.",
        introduction:
            "Mrs. Darshanee Pravin Lokhande is a Certified Financial Planner, Tax Consultant and Insurance Advisor associated with Team Lakshya.",
        paragraphs: [
            "She began her professional association with LIC in 2013 as an Insurance Consultant, building her practice around insurance guidance and client support.",
            "Her professional services extend across life insurance, financial and investment consultancy, business risk management and a range of general and health insurance needs.",
        ],
        highlights: [
            "Certified Financial Planner",
            "Tax Consultant",
            "Insurance Advisor",
            "Associated With LIC Since 2013",
        ],
        readMoreTitle: "Professional Profile",
        readMoreContent: [
            "Mrs. Darshanee Pravin Lokhande is a Certified Financial Planner, Tax Consultant and Insurance Advisor working with Team Lakshya.",
            "She started her professional association with LIC in 2013 as an Insurance Consultant.",
            "Her practice covers insurance, financial planning, investment-related guidance, business risk management and several areas of general insurance.",
            "The website will continue to be updated with verified qualifications, professional details and client-approved information as those materials are provided.",
        ],
        image:
            "https://res.cloudinary.com/djblsvzgm/image/upload/professional-event.jpg_uaxa3l",
        imageAlt:
            "Mrs. Darshanee Pravin Lokhande at a professional event",
    },

    /*
     * ============================================================
     * EXPERIENCE
     * ============================================================
     *
     * Kept temporarily for compatibility with the current
     * Sections.tsx.
     *
     * This is NOT intended to become a traditional career-story
     * timeline. The final Sections.tsx pass will replace this
     * presentation with a professional profile / experience
     * section.
     */

    experienceIntro: {
        eyebrow: "PROFESSIONAL EXPERIENCE",
        title: "Over a Decade of Professional Practice.",
        description:
            "Her professional association with LIC began in 2013 as an Insurance Consultant, forming the foundation of her work in insurance and financial advisory services.",
    },

    experience: [
        {
            year: "2013",
            title: "Started With LIC",
            description:
                "Started her professional association with LIC in 2013 as an Insurance Consultant.",
            details: [
                "Began her professional work in insurance consultancy through her association with LIC.",
                "The current website focuses on her professional expertise and client services rather than presenting an invented chronological career story.",
            ],
        },
    ] satisfies CareerMilestone[],

    /*
     * ============================================================
     * LIC ASSOCIATION
     * ============================================================
     */

    lic: {
        eyebrow: "LIC ASSOCIATION",
        title: "Professional Association With LIC",
        description:
            "Her professional association with LIC began in 2013, forming an important foundation of her work as an Insurance Consultant and advisor.",
        role: "INSURANCE CONSULTANT",
        associationSince: "2013",
        highlights: [
            "Insurance Consultancy",
            "Professional Client Guidance",
            "Insurance Planning",
            "LIC Association Since 2013",
        ],
        detailedContent: [
            "Mrs. Darshanee Pravin Lokhande started her professional association with LIC in 2013 as an Insurance Consultant.",
            "Her work involves helping clients understand insurance and protection-related requirements and supporting them through relevant insurance decisions.",
            "Further exact LIC designation, branch information and other professional details will be added once confirmed by the client.",
        ],
        officialLink: "https://licindia.in/",
        payment: {
            eyebrow: "LIC PAYMENT",
            title: "Need to Make Your LIC Premium Payment?",
            description:
                "Access the official LIC payment facility using the payment link provided by the consultant.",
            buttonLabel: "Make LIC Payment",
            paymentLink: "https://ebiz.licindia.in/D2CPM/?_ga=2.14442098.435873440.1760265622-558406503.1741608006&_gac=1.192926296.1760265622.Cj0KCQjwo63HBhCKARIsAHOHV_XpVCw9UNhazc2hdXGgfdkXQ_p0Zrf7A-a9pd-EeMIwMOADt8Fqf2waAoANEALw_wcB#DirectPay",
            opensInNewTab: true,
        },
        image:
            "https://res.cloudinary.com/djblsvzgm/image/upload/professional-felicitation.jpg_zns4xg",
        imageAlt:
            "Professional LIC-related moment featuring Mrs. Darshanee Pravin Lokhande",
    },

    /*
     * ============================================================
     * EXPERTISE / SERVICES
     * ============================================================
     *
     * The original promotional material contains a large service
     * list. It is reorganized into meaningful professional groups
     * instead of presenting a long brochure-style list.
     */

    servicesIntro: {
        eyebrow: "EXPERTISE",
        title: "Professional Guidance Across Financial Needs.",
        description:
            "A broad range of insurance, financial and risk-management services designed around individual, family and business requirements.",
    },

    services: [
        {
            title: "Life Insurance & Protection",
            description:
                "Guidance around life insurance and financial protection for individuals and families.",
            details: [
                "Life insurance",
                "Portfolio management",
                "Family protection planning",
                "Existing insurance policy claim support",
            ],
            benefit:
                "Greater clarity around protection requirements and available insurance options.",
        },
        {
            title: "Financial & Investment Consultancy",
            description:
                "Professional guidance related to financial planning, investments and wealth creation.",
            details: [
                "Financial and investment consultancy",
                "Wealth creation",
                "Investment options",
                "Mutual fund updates",
            ],
            benefit:
                "A clearer understanding of financial and investment choices.",
        },
        {
            title: "Business Risk Management",
            description:
                "Insurance and risk-management solutions relevant to businesses and their people.",
            details: [
                "Business risk management",
                "Employer / employee insurance",
                "Key person retention policy",
                "Business-related protection requirements",
            ],
            benefit:
                "Better visibility into risks that can affect business continuity and people.",
        },
        {
            title: "Health & Family Protection",
            description:
                "Insurance guidance focused on health, family security and specific protection requirements.",
            details: [
                "Health / Mediclaim",
                "Non-attachable family trust",
                "Family-oriented protection planning",
                "Existing policy claim support",
            ],
            benefit:
                "Greater preparedness for important health and family-related financial risks.",
        },
        {
            title: "General Insurance",
            description:
                "Insurance support across vehicles, property, transit and other general-risk requirements.",
            details: [
                "Car insurance",
                "Property / fire insurance",
                "Transit insurance",
                "Pet / farmer insurance",
            ],
            benefit:
                "Professional guidance across a wider range of general insurance needs.",
        },
        {
            title: "Specialized Financial Support",
            description:
                "Additional support for specific financial and insurance-related requirements.",
            details: [
                "Finding lost shares",
                "Gold / money / dollar-related insurance",
                "Mutual fund updates",
                "Investment options",
                "Existing insurance policy claim support",
            ],
            benefit:
                "Practical support for specific financial and insurance requirements.",
        },
    ] satisfies Service[],

    /*
     * ============================================================
     * ACHIEVEMENTS / CREDENTIALS
     * ============================================================
     */

    achievementsIntro: {
        eyebrow: "PROFESSIONAL RECOGNITION",
        title: "Recognition That Reflects Professional Achievement.",
        description:
            "Selected professional recognition and credentials provide a glimpse into the work and achievements behind the practice.",
    },

    achievements: [
        {
            category: "Recognition",
            title: "MDRT 2024",
            description:
                "Professional recognition represented by the supplied MDRT 2024 trophy and event photographs.",
            details: [
                "MDRT 2024 is visibly identified on the supplied recognition trophy.",
                "The supplied trophy plaque identifies Lokhande Darshanee Pravin and LIC.",
                "The exact formal wording of the MDRT recognition should be confirmed by the client before final publication.",
            ],
        },
        {
            category: "Professional Association",
            title: "LIC Since 2013",
            description:
                "Started her professional association with LIC in 2013 as an Insurance Consultant.",
            details: [
                "Professional association with LIC began in 2013.",
                "The website will present this as professional experience rather than an extended fictional career timeline.",
            ],
        },
        {
            category: "Professional Practice",
            title: "Team Lakshya",
            description:
                "Works professionally under Team Lakshya as presented in the supplied profile material.",
            details: [
                "Team Lakshya is identified in the supplied professional profile material.",
            ],
        },
    ] satisfies Achievement[],

    /*
     * ============================================================
     * PROFESSIONAL GALLERY
     * ============================================================
     *
     * These filenames are the planned optimized names for the
     * supplied client assets. The files will be placed in
     * public/images during the asset-integration phase.
     */

    galleryIntro: {
        eyebrow: "PROFESSIONAL MOMENTS",
        title: "Recognition. People. Professional Moments.",
        description:
            "A selection of moments from professional events and recognitions that reflect the work behind the practice.",
    },

    gallery: [
        {
            title: "MDRT 2024 Recognition",
            description:
                "Recognition trophy presented with LIC and MDRT identification.",
            image:
                "https://res.cloudinary.com/djblsvzgm/image/upload/mdrt-2024-trophy.jpg_ysowo5",
            alt: "MDRT 2024 recognition trophy for Lokhande Darshanee Pravin",
            category: "RECOGNITION",
        },
        {
            title: "MDRT Pune DO-1",
            description:
                "Professional event moment from the supplied MDRT Pune DO-1 photographs.",
            image:
                "https://res.cloudinary.com/djblsvzgm/image/upload/mdrt-pune-stage.jpg_hblmtb",
            alt: "MDRT Pune DO-1 professional recognition event",
            category: "EVENT",
        },
        {
            title: "Professional Recognition",
            description:
                "A professional event photograph featuring Darshanee with her recognition.",
            image:
                "https://res.cloudinary.com/djblsvzgm/image/upload/professional-event.jpg_uaxa3l",
            alt: "Professional group photograph featuring Darshanee Lokhande",
            category: "PROFESSIONAL",
        },
        {
            title: "A Moment of Recognition",
            description:
                "A personal professional moment with the MDRT recognition.",
            image:
                "https://res.cloudinary.com/djblsvzgm/image/upload/mdrt-trophy-moment.jpg_feayb1",
            alt: "Darshanee Lokhande with professional recognition trophy",
            category: "RECOGNITION",
        },
        {
            title: "Professional Event",
            description:
                "A professional recognition and felicitation moment.",
            image:
                "https://res.cloudinary.com/djblsvzgm/image/upload/professional-felicitation.jpg_zns4xg",
            alt: "Darshanee Lokhande receiving professional recognition",
            category: "EVENT",
        },
        {
            title: "MDRT Event Video",
            description:
                "A short video moment from the supplied professional recognition event.",
            image:
                "https://res.cloudinary.com/djblsvzgm/image/upload/mdrt-pune-stage.jpg_hblmtb",
            video:
                "https://res.cloudinary.com/djblsvzgm/video/upload/mdrt-event.mp4_qkch8g",
            alt: "MDRT professional recognition event video",
            category: "VIDEO",
        },
    ] satisfies GalleryItem[],

    /*
     * ============================================================
     * PROFESSIONAL APPROACH
     * ============================================================
     */

    approach: {
        eyebrow: "HER APPROACH",
        title: "Clear Guidance. Thoughtful Decisions.",
        description:
            "Professional guidance begins with understanding the client's requirements and explaining relevant choices clearly.",
        principles: [
            {
                title: "Listen",
                description:
                    "Understand the client's circumstances, priorities and concerns before discussing relevant options.",
            },
            {
                title: "Explain",
                description:
                    "Make insurance, financial and investment concepts easier to understand.",
            },
            {
                title: "Guide",
                description:
                    "Help clients understand their options and approach important financial decisions with greater clarity.",
            },
            {
                title: "Support",
                description:
                    "Continue supporting clients with relevant insurance and policy-related requirements, including claim support where applicable.",
            },
        ],
    },

    /*
     * ============================================================
     * LIC PAYMENT
     * ============================================================
     *
     * Exact client-provided universal LIC payment URL should be
     * inserted here once supplied in text.
     */

    payment: {
        eyebrow: "LIC PAYMENT",
        title: "Need to Make Your LIC Premium Payment?",
        description:
            "Access the official LIC payment facility using the payment link provided by the consultant.",
        buttonLabel: "Make LIC Payment",
        paymentLink:
            "https://ebiz.licindia.in/D2CPM/?_ga=2.14442098.435873440.1760265622-558406503.1741608006&_gac=1.192926296.1760265622.Cj0KCQjwo63HBhCKARIsAHOHV_XpVCw9UNhazc2hdXGgfdkXQ_p0Zrf7A-a9pd-EeMIwMOADt8Fqf2waAoANEALw_wcB#DirectPay",
        opensInNewTab: true,
    },

    /*
     * ============================================================
     * CONTACT
     * ============================================================
     */

    contact: {
        eyebrow: "GET IN TOUCH",
        headline: "Let's Start a Conversation.",
        description:
            "Have a question about insurance, financial planning or your existing policy? Get in touch for a professional conversation.",
        phone: "+91 99216 68123",
        whatsapp: "+91 99216 68123",
        email: "darshaneeplokhande@gmail.com",
        location:
            "Gheewala Complex, II nd Floor, Chinchwad Station Rd, Opposite Ramkrishna More Natyagruha, Chinchwad, Pune, Maharashtra 411033",

        mapsLink:
            "https://www.google.com/maps/search/?api=1&query=Gheewala+Complex%2C+II+nd+Floor%2C+Chinchwad+Station+Rd%2C+Opposite+Ramkrishna+More+Natyagruha%2C+Chinchwad%2C+Pune%2C+Maharashtra+411033",

        form: {
            eyebrow: "REQUEST A CONSULTATION",
            title: "Request a Consultation",
            description:
                "Share a few details and we'll get back to you.",
            submitLabel: "Send Enquiry",

            fields: [
                {
                    name: "name",
                    label: "Your Name",
                    type: "text",
                    placeholder: "Enter your name",
                    required: true,
                },
                {
                    name: "phone",
                    label: "Phone Number",
                    type: "tel",
                    placeholder: "Enter your phone number",
                    required: true,
                },
                {
                    name: "email",
                    label: "Email Address",
                    type: "email",
                    placeholder: "Enter your email address",
                    required: false,
                },
                {
                    name: "requirement",
                    label: "Requirement",
                    type: "text",
                    placeholder: "What would you like to discuss?",
                    required: true,
                },
                {
                    name: "message",
                    label: "Message",
                    type: "textarea",
                    placeholder: "Tell us a little more...",
                    required: false,
                },
            ] satisfies ContactFormField[],
        },
    },

    /*
     * ============================================================
     * FOOTER
     * ============================================================
     */

    footer: {
        description:
            "Professional financial planning, insurance and advisory services built around experience, clarity and client support.",
        disclaimer:
            "This website represents an independent professional consultant and is not the official website of LIC.",
        copyrightName: "Mrs. Darshanee Pravin Lokhande",
    },
} as const;