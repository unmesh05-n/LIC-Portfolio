/**
 * Centralized content configuration for
 * Mrs. Darshanee Pravin Lokhande's professional website.
 *
 * SOURCE OF TRUTH:
 * Client-provided Home, About, Insurance, Life Insurance,
 * Health Insurance, General Insurance and Gallery documents.
 *
 * IMPORTANT:
 * - Client wording is preserved wherever supplied.
 * - Only obvious spelling / grammatical errors are corrected.
 * - Empty client placeholders remain empty.
 * - No unsupported product benefits, returns, guarantees,
 *   testimonials, URLs or claims are invented.
 */

export type ContactFormField = {
    name: string;
    label: string;
    type: "text" | "tel" | "email" | "textarea";
    placeholder: string;
    required: boolean;
};

export type GalleryItem = {
    title: string;
    description: string;
    image: string;
    alt: string;
    category: string;
    video?: string;
};

export type FormItem = {
    title: string;
    description: string;
    fileLabel: string;
    file: string;
};

export const siteData = {
    /* ====================================================================== */
    /* GLOBAL IDENTITY                                                        */
    /* ====================================================================== */

    global: {
        name: "Mrs. Darshanee Pravin Lokhande",
        designation:
            "Certified Financial Planner, Tax Consultant & Insurance Advisor",
        title:
            "Certified Financial Planner, Tax Consultant & Insurance Advisor",
        tagline: "We Assure Our Best To Serve You...",
        location: "India and PCMC",
        city: "Pune",
    },

    /* ====================================================================== */
    /* NAVIGATION                                                             */
    /* ====================================================================== */

    navigation: {
        links: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "About",
                href: "/about",
            },
            {
                label: "Insurance",
                href: "/insurance",
            },
            {
                label: "Life Insurance",
                href: "/life-insurance",
            },
            {
                label: "Health Insurance",
                href: "/health-insurance",
            },
            {
                label: "General Insurance",
                href: "/general-insurance",
            },
            {
                label: "Gallery",
                href: "/gallery",
            },
        ],

        ctaLabel: "Get in Touch",

        utilityLinks: [
            {
                label: "Forms",
                href: "#forms",
            },
            {
                label: "LIC Payment",
                href: "#payment",
            },
        ],
    },

    /* ====================================================================== */
    /* HOME — HERO                                                            */
    /* ====================================================================== */

    hero: {
        eyebrow:
            "CERTIFIED FINANCIAL PLANNER · TAX CONSULTANT · INSURANCE ADVISOR",

        headline: "Protect. Plan. Invest. Prepare.",

        description:
            "Helping You Protect What Matters, Plan What Matters, and Prepare for What Comes Next.",

        primaryCta: {
            label: "Book a Free Consultation",
            href: "#contact",
        },

        secondaryCta: {
            label: "WhatsApp Us",
            href: "https://wa.me/919921668123",
        },

        image:
            "https://res.cloudinary.com/djblsvzgm/image/upload/hero-portrait_cbocoq",

        imageAlt:
            "Mrs. Darshanee Pravin Lokhande, Certified Financial Planner, Tax Consultant and Insurance Advisor",
    },

    /* ====================================================================== */
    /* HOME — TRUST / ACHIEVEMENT HIGHLIGHTS                                  */
    /* ====================================================================== */

    stats: [
        {
            value: "13 Years",
            label: "Years of Experience",
        },
        {
            value: "1000+",
            label: "Clients / Families Served",
        },
        {
            value: "PDRT, MDRT, BM Club, Star Galaxy",
            label: "Awards / Recognition",
        },
        {
            value: "Trusted Insurance and Investment Partner",
            label: "Other Verified Highlight",
        },
    ],

    /* ====================================================================== */
    /* HOME — CORE SERVICES                                                   */
    /* ====================================================================== */

    homeServices: [
        {
            title: "Life Insurance",
            description: "",
            href: "/life-insurance",
        },
        {
            title: "Mutual Funds / SIP",
            description: "",
            href: "/insurance",
        },
        {
            title: "Health Insurance",
            description: "",
            href: "/health-insurance",
        },
        {
            title: "General Insurance",
            description: "",
            href: "/general-insurance",
        },
    ],

    /* ====================================================================== */
    /* HOME — WHY CHOOSE / WHY CONNECT                                        */
    /* ====================================================================== */

    whyChoose: {
        eyebrow: "WHY CHOOSE / WHY CONNECT",
        title: "A Relationship Built on Trust and Service.",
        description: "",

        items: [
            {
                title: "Trust & Transparency",
                description:
                    "Clear communication and transparent transactions.",
            },
            {
                title: "Customer-First Approach",
                description:
                    "Understanding your requirement before discussing solutions.",
            },
            {
                title: "Financial Awareness",
                description:
                    "Helping you understand financial concepts in simple language.",
            },
            {
                title: "Long-Term Relationship",
                description:
                    "Support that continues beyond the purchase.",
            },
            {
                title: "Regular Review",
                description:
                    "Your financial needs change. Your plan should be reviewed too.",
            },
            {
                title: "After-Sales Service",
                description:
                    "Renewals, documentation, claims and policy-related assistance.",
            },
        ],
    },

    /* ====================================================================== */
    /* HOME — APPROACH                                                        */
    /* ====================================================================== */

    approach: {
        eyebrow: "OUR APPROACH",
        title: "Understand. Analyse. Explain. Recommend. Implement. Review.",
        description: "",

        steps: [
            {
                title: "Understand",
                description: "",
            },
            {
                title: "Analyse",
                description: "",
            },
            {
                title: "Explain",
                description: "",
            },
            {
                title: "Recommend",
                description: "",
            },
            {
                title: "Implement",
                description: "",
            },
            {
                title: "Review",
                description: "",
            },
        ],

        principles: [
            {
                title: "Understand",
                description: "",
            },
            {
                title: "Analyse",
                description: "",
            },
            {
                title: "Explain",
                description: "",
            },
            {
                title: "Recommend",
                description: "",
            },
            {
                title: "Implement",
                description: "",
            },
            {
                title: "Review",
                description: "",
            },
        ],

        closingLine:
            "You decide. We help you understand and plan.",
    },

    /* ====================================================================== */
    /* HOME — POLICY / INVESTMENT REVIEW                                     */
    /* ====================================================================== */

    policyReview: {
        eyebrow: "POLICY & INVESTMENT REVIEW",

        title: "Already Have Insurance or Investments?",

        description:
            "Your financial needs change over time. Let us review your existing policies and investments and help you understand whether they continue to align with your goals.",

        buttonLabel: "Request a Free Review",
        href: "#contact",
    },

    /* ====================================================================== */
    /* HOME — ACHIEVEMENTS                                                    */
    /* ====================================================================== */

    achievementsIntro: {
        eyebrow: "ACHIEVEMENTS",
        title: "Experience. Recognition. Trust.",
        description: "",
    },

    achievements: [
        {
            icon: "🏆",
            title: "MDRT",
            description: "",
        },
        {
            icon: "🏆",
            title: "LIC Awards",
            description: "",
        },
        {
            icon: "🏆",
            title: "Division Manager Recognition",
            description: "",
        },
        {
            icon: "🏆",
            title: "Branch Manager Recognition",
            description: "",
        },
    ],

    /* ====================================================================== */
    /* HOME — TESTIMONIALS                                                    */
    /* ====================================================================== */

    testimonials: [],

    /* ====================================================================== */
    /* HOME — FINAL CTA                                                       */
    /* ====================================================================== */

    finalCta: {
        eyebrow: "",
        title: "Let's Plan Your Financial Future.",

        description:
            "Whether you are protecting your family, planning for your child’s education, building wealth or preparing for retirement — let's start with a conversation.",

        primaryCta: {
            label: "Book a Free Consultation",
            href: "#contact",
        },

        secondaryCta: {
            label: "WhatsApp Us",
            href: "https://wa.me/919921668123",
        },
    },

    /* ====================================================================== */
    /* HOME — QUICK ENQUIRY                                                   */
    /* ====================================================================== */

    quickEnquiry: {
        heading: "",
        supportingText: "",

        fields: [
            "Name",
            "Mobile",
            "City",
            "Service Required",
            "Preferred Call Time",
        ],

        ctaLabel: "Request a Call",
    },

    /* ====================================================================== */
    /* ABOUT PAGE                                                             */
    /* ====================================================================== */

    about: {
        eyebrow: "ABOUT",

        headline: "About Mrs. Darshanee P Lokhande",

        fullName: "Mrs. Darshanee Pravin Lokhande",

        professionalDesignation: "Guaranteed Income Planner",

        yearsOfExperience: "13 Years",

        startedCareer: "2013",

        cityAreaServed: "India and PCMC",

        title: "About Mrs. Darshanee P Lokhande – CEO Sindhudeep Consultancy",

        introduction: "Hi,",

        paragraphs: [
            "She is your trusted and guaranteed income planner.",

            "Life is beautiful, but it is also unpredictable. True financial Freedom isn’t just about earning well - Its is about Ensuring that the people you love are protected, no matter what tomorrow brings.",

            "For 13 Years She has helped thousands of families. Turn financial anxiety into absolute peace of mind. Backed by the rock-solid trust and sovereign guarantee of the Life Insurance Corporation of India (LIC), She designed smart personalized saving and protection plans that adapt to your budget and match your biggest dreams.",

            "Operating from Pune (The Heart of Maharashtra), with a clientele spread across the country and abroad, we cater to a wide spectrum of investors—from individual clients to High Net Worth Individuals (HNIs)—by offering personalized investment solutions tailored to their unique needs.",

            "What makes us different is our personalized and complete financial solutions. We carefully understand your portfolio and focus on safety, returns, liquidity, and tax benefits.",

            "Our goal is to help you make better financial decisions and build a secure and prosperous future. With simple processes, teamwork, and proper execution, we have helped many clients move closer to their financial goals and freedom.",

            "Our doorstep services, regular portfolio reviews, and personal touch ensure that your financial journey remains smooth and rewarding. And when the time comes, our unwavering commitment extends to the most important stage—claim settlement, where we ensure care, efficiency, and trust.",
        ],

        readMoreTitle: "Read More",

        highlights: [
            "Guaranteed Income Planner",
            "13 Years of Experience",
            "Started Career in 2013",
            "India and PCMC",
            "CEO Sindhudeep Consultancy",
        ],

        image:
            "https://res.cloudinary.com/djblsvzgm/image/upload/professional-event.jpg_uaxa3l",

        imageAlt:
            "Mrs. Darshanee Pravin Lokhande at a professional event",
    },

    /* ====================================================================== */
    /* ABOUT — PROFESSIONAL CERTIFICATIONS                                    */
    /* ====================================================================== */

    professionalCertifications: [
        "Diploma in Accounting and Taxation",
        "Advance in Insurance and Finance",
        "Combination Master",
        "Fundamentals of Life Insurance",
        "Retirement Solution",
    ],

    /* ====================================================================== */
    /* ABOUT — PROFESSIONAL JOURNEY / RECOGNITION                             */
    /* ====================================================================== */

    professionalJourney: {
        mdrt: {
            title: "MDRT for Production Year 2024",
            achievement: "MDRT Achievement – 2024",

            description:
                "Achieving MDRT (Million Dollar Round Table) qualification in 2024 was an important milestone in our professional journey.",

            paragraphs: [
                "This achievement reflects our commitment to professional excellence, ethical service, and putting clients’ financial needs first. MDRT is a globally recognized standard in the financial services profession, and qualifying for it represents dedication to serving clients with knowledge, discipline, and professionalism.",

                "For us, this achievement is not just a recognition—it is a responsibility to continue providing honest guidance, personalized financial solutions, and long-term support to every client.",

                "We remain committed to helping individuals and families plan better, protect their financial future, and work towards their financial goals.",
            ],
        },

        bmClub: {
            title: "BM Club Member",

            description:
                "Being a BM Club Member is another important milestone in our professional journey. This recognition reflects our consistent performance, dedication, and commitment to providing quality financial services to our clients.",

            paragraphs: [
                "It motivates us to continuously improve our knowledge, service standards, and client experience. We believe that every client has different financial goals, and our role is to understand their needs and provide simple, suitable, and personalized financial solutions.",

                "Our membership in the BM Club inspires us to maintain high standards of professionalism and continue building long-term relationships based on trust and service.",
            ],
        },
    },

    /* ====================================================================== */
    /* ABOUT — VISION                                                         */
    /* ====================================================================== */

    vision: {
        title: "Our Vision",

        description:
            "To become a trusted financial partner for individuals and families by helping them make informed financial decisions, protect their future, and achieve their long-term financial goals.",

        closing:
            "We aim to build lasting relationships with our clients through trust, transparency, personalized advice, and professional service.",
    },

    /* ====================================================================== */
    /* ABOUT — MISSION                                                        */
    /* ====================================================================== */

    mission: {
        title: "Our Mission",

        description:
            "Our mission is to understand each client’s unique financial needs and provide simple, personalized, and practical financial solutions.",

        commitments: [
            "Helping clients protect themselves and their families through proper insurance planning.",
            "Guiding clients towards suitable investment opportunities based on their goals and needs.",
            "Helping clients plan for important goals such as children’s education, retirement, and wealth creation.",
            "Building long-term relationships based on trust, honesty, and transparency.",
            "Continuously improving our knowledge and service to provide better financial guidance.",
            "Making financial planning simple, clear, and accessible for every client.",
        ],
    },

    /* ====================================================================== */
    /* ABOUT — MESSAGE                                                       */
    /* ====================================================================== */

    message: {
        title: "A Message from Darshanee",

        greeting: "Dear Clients and Well-Wishers,",

        paragraphs: [
            "Thank you for trusting us and giving us the opportunity to be a part of your financial journey.",

            "I believe that financial planning is not just about choosing an investment or buying an insurance policy. It is about protecting your family, planning for your dreams, and building a financially secure future.",

            "Every individual and family has different needs and goals. Our approach is therefore to first understand your financial situation, priorities, and aspirations, and then provide simple, transparent, and personalized solutions.",

            "Our journey has been built on trust, honesty, professional knowledge, and long-term relationships. Achievements such as MDRT 2024 qualification and BM Club membership motivate us to continuously improve and serve our clients better.",

            "Whether you are already our client or are considering working with us for the first time, we look forward to being your trusted financial partner and supporting you at every stage of your financial journey.",

            "Thank you for your trust and support.",
        ],

        closing: "Warm Regards,",
    },

    /* ====================================================================== */
    /* INSURANCE MAIN HUB                                                     */
    /* ====================================================================== */

    insurance: {
        eyebrow: "INSURANCE",
        title: "Insurance",
        description: "",

        categories: [
            {
                title: "Life Insurance",
                description: "",
                href: "#life-insurance",
                cta: "Explore Life Insurance",
            },
            {
                title: "Health Insurance",
                description: "",
                href: "#health-insurance",
                cta: "Get Health Quote",
            },
            {
                title: "General Insurance",
                description: "",
                href: "#general-insurance",
                cta: "Explore General Insurance",
            },
        ],

        lifeInsuranceIntro: "",

        healthInsuranceIntro: "",

        generalInsuranceIntro: "",

        generalInformation: {
            whatIsInsurance: "",
            whyIsInsuranceImportant: "",
            howToChooseAppropriateCover: "",
        },

        disclaimer: "",
    },

    /* ====================================================================== */
    /* INSURER LOGOS                                                          */
    /* ====================================================================== */

    insurers: {
        eyebrow: "INSURANCE PROVIDERS",
        title: "Insurance Providers",
        description: "",

        items: [
            {
                name: "HDFC ERGO",
                logo: "https://res.cloudinary.com/djblsvzgm/image/upload/HDFC_ERGO_fs2lfj",
                alt: "HDFC ERGO",
            },
            {
                name: "Star Health Insurance",
                logo: "https://res.cloudinary.com/djblsvzgm/image/upload/Star_Health_tsvkvm",
                alt: "Star Health Insurance",
            },
            {
                name: "TATA AIG",
                logo: "https://res.cloudinary.com/djblsvzgm/image/upload/TATA_AIG_rpflw7",
                alt: "TATA AIG",
            },
            {
                name: "Care Health Insurance",
                logo: "https://res.cloudinary.com/djblsvzgm/image/upload/Care_Health_on5d4w",
                alt: "Care Health Insurance",
            },
            {
                name: "ICICI Lombard",
                logo: "https://res.cloudinary.com/djblsvzgm/image/upload/ICICI_Lombard_x0hdkn",
                alt: "ICICI Lombard",
            },
            {
                name: "Niva Bupa",
                logo: "https://res.cloudinary.com/djblsvzgm/image/upload/Niva_Bupa_gcfu4f",
                alt: "Niva Bupa",
            },
            {
                name: "Bajaj Health",
                logo: "https://res.cloudinary.com/djblsvzgm/image/upload/Bajaj_Health_amzkuy",
                alt: "Bajaj Health",
            },
            {
                name: "ManipalCigna",
                logo: "https://res.cloudinary.com/djblsvzgm/image/upload/ManipalCigna_kuqoox",
                alt: "ManipalCigna",
            },
        ],
    },

    /* ====================================================================== */
    /* LIFE INSURANCE PAGE                                                    */
    /* ====================================================================== */

    lifeInsurance: {
        eyebrow: "LIFE INSURANCE",
        title: "Protect What Matters Most.",

        description:
            "Life Insurance solutions designed to protect your family, support your goals and prepare you for the future.",

        introductionTitle: "Why Life Insurance",

        introductionParagraphs: [
            "Looking for Investing in a Life Insurance product? But not sure exactly how it works?",

            "Well this page is aimed to give you a complete understanding on how it works and what you need to understand to choose the products that suits you the best. As at every life stage, everyone has a set of primary needs that requires sufficient funds to fulfill them. This is where life insurance comes into the picture - as it offers tailor made products to cover every aspect at different stages of life.",

            "There is no doubt that life insurance is a must have for everyone. Hence its very crucial to have a complete understanding of the value a life insurance policy can bring in to your life and that of your loved ones.",

            "A life insurance policy is actually a contract with an insurance company. A lump sum amount is provided, in exchange for premium payments, known as the death benefits, to the nominees or beneficiaries upon the death of the insurer.",

            "While choosing a life insurance, the advisor will help you to map its needs & goals. This will help you pick out the options that suits you the best.",
        ],

        whatDoesItOfferTitle: "What Does It Offer?",

        whatDoesItOffer: [
            "Insurance has lot to offer in terms financial security and peace of mind. It ensures that your family is taken care of in your absence. It not only helps in providing coverage for all sorts of risks, but builds an opportunity to help you grow your investments. Life insurance is a long term investment tool that helps you meet future costs like children's education expenses, retirement expenses etc.",

            "There are plenty of life insurance plans available, depending on an individuals needs, many of these plans can also be customized to meet their likes.",
        ],

        typesOfInsurance: [
            {
                title: "Term Life Insurance",
                description:
                    "The most affordable form of life insurance, premiums of plan under this category are cheap compared to other life insurance products.",

                details: [
                    "In the event of an unfortunate demise during the policy term, Nominees will receive the ‘Sum Assured’.",
                ],
            },

            {
                title: "Whole Life Policy",
                description:
                    "As in the name, this type of policy covers an individual for his/her entire life. This type of insurance covers insurance and investment components.",

                details: [
                    "The insurance part covers the nominee in the event of death of the policyholder and the investment component helps the holder to borrow or withdraw against.",
                ],
            },

            {
                title: "Endowment Plan",
                description:
                    "One main difference that Endowment Plans offer from term plans is the Maturity Benefit.",

                details: [
                    "This type of plan pays out sum assured along with profits under both scenarios - death & survival. The profits that are availed in such plans are the result of investment in equities & debt.",
                ],
            },

            {
                title: "Unit Linked Insurance Plans (ULIPs)",
                description:
                    "As the name suggests, this plan is linked to the markets.",

                details: [
                    "This type of plan is a variant of traditional endowment plan and pays out a certain sum assured on death or maturity, whichever is earlier.",
                ],
            },

            {
                title: "Money Back Policy",
                description:
                    "This type of policy gives out periodic payments over the policy term.",

                details: [
                    "In case of the death of the policy holder, the beneficiaries get the full sum assured and if the holder survives the policy term, he/she gets the balance amount (sum assured).",
                ],
            },
        ],

        benefitsTitle: "Benefits Of Insurance",

        benefits: [
            "Most of us often tend to ignore the importance of sound policy as we think it not required and what could possibly happen to us.",

            "This leads us to believe that life insurance is not worth the money for but a sudden mishap/accident leaves us feeling fearful of the future-for us & our family.",

            "There is no two way about what an individual wants- financial security & protection; for which life insurance is the best option available. There are multiple advantages to availing a life insurance plan, let us glance at them:",
        ],

        services: [
            {
                title: "Term Insurance",
                icon: "🛡️",
                description:
                    "High life cover designed primarily for family income protection.",
                detailsTitle: "What is Term Insurance?",
                details:
                    "Term insurance is a life insurance solution primarily designed to provide financial protection to the family in the event of the insured person's death, subject to policy terms.",

                suitableFor: [
                    "Working professionals",
                    "Parents",
                    "Business owners",
                    "Individuals with financial dependants",
                    "People with loans/liabilities",
                ],

                consider:
                    "Income, liabilities, family responsibilities, existing cover and future goals.",

                cta: "Check My Life Cover",
            },

            {
                title: "Savings & Endowment Plans",
                icon: "💰",
                description:
                    "Life insurance solutions combining protection with long-term savings-oriented benefits, subject to policy terms.",

                details: [
                    "What is an Endowment Plan?",
                    "Who may consider it?",
                    "Long-term savings",
                    "Life protection",
                    "Maturity benefits as applicable",
                    "Premium payment options",
                    "Policy term",
                    "Important conditions",
                ],

                cta: "Discuss My Requirement",
            },

            {
                title: "Money Back Plans",
                icon: "🔄",
                description:
                    "Life insurance solutions that may provide survival benefits at specified intervals during the policy term, subject to applicable terms.",

                details: [],

                cta: "Discuss My Requirement",
            },

            {
                title: "Child Education Planning",
                icon: "🎓",
                description:
                    "Plan today for the education and future aspirations of your child.",

                details: [
                    "Education goal",
                    "Time horizon",
                    "Current age of child",
                    "Future education cost",
                    "Protection requirement",
                    "Savings/investment approach",
                    "Periodic review",
                ],

                cta: "Plan My Child's Future",
            },

            {
                title: "Daughter's Future / Kanyadan Planning",
                icon: "👧🎓",
                description:
                    "A goal-based financial planning approach for your daughter's education, marriage or other important future milestones.",

                details: [
                    "Education",
                    "Higher studies",
                    "Marriage goal",
                    "Long-term savings",
                    "Life protection",
                    "Time horizon",
                ],

                cta: "Plan for My Daughter's Future",
            },

            {
                title: "Retirement & Pension Planning",
                icon: "👴",
                description:
                    "Prepare for financial independence and regular income after retirement.",

                details: [
                    "Retirement age",
                    "Required retirement corpus",
                    "Expected expenses",
                    "Inflation",
                    "Existing retirement savings",
                    "Pension / income requirement",
                    "Life insurance-based retirement solutions",
                    "SIP/investment-based retirement planning",
                ],

                cta: "Plan My Retirement",
            },

            {
                title: "Family Protection Planning",
                icon: "👨‍👩‍👧‍👦",
                description:
                    "Protect your family's financial needs against the unexpected.",

                details: [
                    "Family income",
                    "Existing life cover",
                    "Loans",
                    "Children's needs",
                    "Monthly expenses",
                    "Future goals",
                    "Emergency requirements",
                ],

                cta: "Check My Family Protection",
            },

            {
                title: "Long-Term Savings & Financial Planning",
                icon: "📈",
                description:
                    "Long-term savings and financial planning for important financial goals.",

                details: [
                    "PPF",
                    "Long-term savings",
                    "Goal planning",
                    "Retirement-oriented savings",
                    "Other applicable financial options",
                ],

                cta: "Discuss My Requirement",
            },
        ],

        trustStrip: [
            "Family Protection",
            "Child Planning",
            "Savings",
            "Retirement",
            "Policy Services",
        ],

        planningSection: {
            title: "What Are You Planning For?",

            options: [
                "Protect My Family",
                "Child's Education",
                "Daughter's Future",
                "Long-Term Savings",
                "Retirement",
                "Review My Existing Policy",
            ],
        },

        customerService: {
            title: "Need Help With Your Existing Policy?",

            subtitle:
                "Our relationship doesn't end after the policy is purchased.",

            items: [
                {
                    title: "Premium / Renewal",
                    icon: "🔄",
                    description:
                        "Need help with your upcoming premium?",
                    cta: "Request Assistance",
                },
                {
                    title: "Tax Statement",
                    icon: "📄",
                    description:
                        "Need your policy-related tax statement/document?",
                    cta: "Request Document",
                },
                {
                    title: "Policy Review",
                    icon: "🔍",
                    description:
                        "Not sure whether your existing policy still fits your needs?",
                    cta: "Request Review",
                },
                {
                    title: "Policy Revival",
                    icon: "🔁",
                    description: "Your policy has lapsed?",
                    cta: "Get Revival Assistance",
                },
                {
                    title: "Nomination",
                    icon: "👤",
                    description:
                        "Need help regarding nomination?",
                    cta: "Get Assistance",
                },
                {
                    title: "Policy Documents",
                    icon: "📑",
                    description:
                        "Need help with policy-related documentation?",
                    cta: "Request Support",
                },
                {
                    title: "Claim Assistance",
                    icon: "🏥",
                    description:
                        "Need guidance regarding a claim?",
                    cta: "Get Claim Assistance",
                },
            ],
        },

        serviceForms: {
            policyReview: [
                "Name",
                "Mobile Number",
                "Policy Type",
                "Policy Number — Optional",
                "Year of Policy Purchase",
                "Last Policy Review Date",
                "What would you like to review?",
                "Upload Policy Document — Optional",
            ],

            premiumPaymentAssistance: [
                "Name",
                "Mobile",
                "Policy Number",
                "Due Date",
                "Message",
            ],

            taxStatement: [
                "Name",
                "Mobile",
                "Policy Number",
                "Financial Year",
                "Document Required",
            ],

            claimAssistance: [
                "Name",
                "Mobile",
                "Policy Number",
                "Claim Type",
                "Claimant Name",
                "Message",
                "Upload Document — Optional",
            ],
        },

        documentsRequired: {
            title: "What Documents May Be Required?",

            policyReview: [
                "Existing policy document",
                "Premium receipt",
                "Existing policy details",
                "Nomination details, if relevant",
            ],

            claimAssistance: [
                "Policy document",
                "Claim-related documents",
                "Identity/address documents as applicable",
                "Medical/hospital documents where applicable",
            ],

            policyRevival: [
                "Policy details",
                "Applicable revival requirements",
                "Identity/documents as required by insurer",
            ],

            nomination: [
                "Policy details",
                "Nominee details",
                "Applicable KYC/supporting documents",
            ],

            finalNote:
                "Document requirements may vary depending on the service, insurer and case. We will guide you regarding the applicable documents.",
        },

        oldPolicyReview: {
            title: "Have an Old Life Insurance Policy?",

            description:
                "Your policy may have been purchased years ago. Your income, family responsibilities and financial goals may have changed since then.",

            question: "When was your policy last reviewed?",

            options: [
                "Never",
                "More than 3 years ago",
                "1–3 years ago",
                "Within the last year",
                "Not Sure",
            ],

            buttonLabel: "Get a Free Policy Review",

            message:
                "Bring your existing policy documents. We will help you understand your current coverage, benefits, premium, policy term and whether it still aligns with your current needs.",
        },

        leadForm: {
            heading: "Need help choosing a Life Insurance solution?",

            fields: [
                "Name",
                "Age",
                "Mobile",
                "City",
                "Goal",
                "Preferred Call Time",
            ],

            cta: "Request Guidance",
        },

        finalCta: {
            title: "Not Sure Which Life Insurance Solution You Need?",

            description:
                "Tell us about your requirement. We will help you understand your options.",

            buttons: [
                "Book a Free Consultation",
                "WhatsApp Us",
            ],
        },

        developerRule:
            "Do not publish product benefits, returns, premium examples, tax claims or guarantees unless verified from current official product material and approved for website use.",
    },

    /* ====================================================================== */
    /* HEALTH INSURANCE PAGE                                                  */
    /* ====================================================================== */

    healthInsurance: {
        eyebrow: "HEALTH INSURANCE",

        title: "Protect Your Health. Protect Your Savings.",

        description:
            "A good health insurance plan can help protect your family from the financial impact of unexpected medical expenses.",

        shortLine:
            "Explore Health Insurance, Critical Illness, Super Top-up, Personal Accident and other protection solutions based on your needs.",

        heroButtons: [
            "Get a Health Insurance Quote",
            "Talk to an Advisor",
        ],

        heroImage: "",

        quickServices: [
            {
                icon: "🏥",
                title: "Hospitalisation Cover",
                href: "#health-categories",
            },
            {
                icon: "👨‍👩‍👧",
                title: "Family Health Cover",
                href: "#health-categories",
            },
            {
                icon: "❤️",
                title: "Critical Illness",
                href: "#health-categories",
            },
            {
                icon: "➕",
                title: "Super Top-up",
                href: "#health-categories",
            },
            {
                icon: "🛡️",
                title: "Personal Accident",
                href: "#health-categories",
            },
        ],

        whyHealthInsurance: {
            title: "Why Do You Need Health Insurance?",

            description:
                "Medical treatment costs can affect your savings, income and long-term financial goals. Health insurance can provide financial protection against eligible medical expenses, subject to policy terms and conditions.",

            cards: [
                {
                    icon: "🏥",
                    title: "Hospitalisation Expenses",
                },
                {
                    icon: "💰",
                    title: "Protect Your Savings",
                },
                {
                    icon: "👨‍👩‍👧",
                    title: "Family Protection",
                },
                {
                    icon: "🧠",
                    title: "Financial Preparedness",
                },
            ],
        },

        services: [
            {
                title: "Hospitalisation Cover",
                description:
                    "Individual / Family Health Insurance",
            },
            {
                title: "Family Protection",
                description: "Family Floater",
            },
            {
                title: "Senior Citizen",
                description:
                    "Senior-focused health insurance",
            },
            {
                title: "Critical Illness",
                description:
                    "Specified serious illnesses",
            },
            {
                title: "Super Top-up",
                description:
                    "Additional protection over base cover",
            },
            {
                title: "Personal Accident",
                description:
                    "Accidental death / disablement protection",
            },
            {
                title: "Maternity",
                description:
                    "Applicable maternity solutions",
            },
            {
                title: "International / Travel",
                description:
                    "Applicable travel health solutions",
            },
        ],

        categories: [
            {
                icon: "🏥",
                title: "Hospitalisation",
                description:
                    "Individual / Family Health Insurance",
            },
            {
                icon: "👨‍👩‍👧",
                title: "Family Protection",
                description: "Family Floater",
            },
            {
                icon: "👴",
                title: "Senior Citizen",
                description:
                    "Senior-focused health insurance",
            },
            {
                icon: "❤️",
                title: "Critical Illness",
                description:
                    "Specified serious illnesses",
            },
            {
                icon: "➕",
                title: "Super Top-up",
                description:
                    "Additional protection over base cover",
            },
            {
                icon: "🛡️",
                title: "Personal Accident",
                description:
                    "Accidental death / disablement protection",
            },
            {
                icon: "🤰",
                title: "Maternity",
                description:
                    "Applicable maternity solutions",
            },
            {
                icon: "✈️",
                title: "International / Travel",
                description:
                    "Applicable travel health solutions",
            },
        ],

        productCardTemplate: {
            fields: [
                "Product Name",
                "Who may consider it",
                "Key Benefits",
                "Coverage highlights",
                "Waiting periods",
                "Important exclusions",
                "Eligibility",
                "Brochure",
                "Customer Information Sheet",
                "Get Quote",
            ],

            officialSourceNote:
                "Care itself publishes brochures, customer information sheets and policy terms for its products, so these should be linked to the latest official documents rather than reproducing every policy condition on your website.",
        },

        addOns: {
            title: "Enhance Your Protection With Available Add-ons",

            items: [
                {
                    icon: "🛡️",
                    title: "Care Shield Add-on",
                },
                {
                    icon: "➕",
                    title: "Protect Plus",
                },
                {
                    icon: "🏥",
                    title: "Applicable Health Add-ons",
                },
                {
                    icon: "❤️",
                    title: "Critical Illness Options",
                },
            ],

            buttonLabel: "Check Available Add-ons",

            note:
                "Available add-ons. Each add-on may not apply to every product.",
        },

        protectionSelector: {
            title: "What Are You Looking to Protect?",

            options: [
                "My Hospitalisation Expenses",
                "My Family",
                "My Parents",
                "Critical Illness Risk",
                "My Existing Health Cover",
                "Accidental Risk",
                "My Child's Future",
            ],
        },

        quote: {
            title: "Get a Personalised Health Insurance Quote",

            description:
                "Share a few details and we will help you explore suitable health insurance options based on your requirements.",

            buttons: [
                "Get Quote Online",
                "Submit Details on WhatsApp",
            ],
        },

        googleForm: {
            title: "Prefer to Send Your Details?",

            description:
                "Fill out our Health Insurance Quote Form and we will contact you.",

            buttonLabel: "Fill Health Insurance Quote Form",

            url: "",
        },

        quoteForm: {
            basicDetails: [
                "Full Name",
                "Mobile Number",
                "City",
                "Pincode",
                "Email — Optional",
            ],

            whoNeedsInsurance: [
                "Self",
                "Self + Spouse",
                "Family",
                "Parents",
                "Senior Citizens",
                "Child",
            ],

            personalDetails: [
                "Age",
                "Gender",
                "Number of Family Members",
            ],

            healthDetails: [
                "Existing Health Insurance? Yes/No",
                "Existing Sum Insured",
                "Any Pre-existing Disease? Yes/No",
                "Current Medication? Optional",
                "Previous Hospitalisation? Yes/No",
            ],

            requirement: [
                "Individual",
                "Family Floater",
                "Senior Citizen",
                "Critical Illness",
                "Super Top-up",
                "Personal Accident",
                "Maternity",
                "Other",
            ],

            preferredSumInsured: [
                "₹5 Lakh",
                "₹10 Lakh",
                "₹15 Lakh",
                "₹25 Lakh",
                "₹50 Lakh+",
                "Not Sure",
            ],

            finalField: "Additional Message",

            submitLabel: "Submit Quote Request",

            privacyNotice:
                "Health information is sensitive; collect only what is genuinely needed, secure it appropriately, and display a privacy notice before submission.",
        },

        customerService: {
            title: "Need Help With Your Health Insurance?",

            items: [
                {
                    icon: "🔄",
                    title: "Policy Renewal",
                    description: "Need help with renewal?",
                    cta: "Get Assistance",
                },
                {
                    icon: "🔍",
                    title: "Policy Review",
                    description:
                        "Not sure whether your current health cover is adequate?",
                    cta: "Request Review",
                },
                {
                    icon: "🔁",
                    title: "Portability",
                    description:
                        "Thinking about porting your existing health policy?",
                    cta: "Talk to Us",
                },
                {
                    icon: "🏥",
                    title: "Claim Assistance",
                    description:
                        "Need guidance regarding a health insurance claim?",
                    cta: "Get Claim Support",
                },
                {
                    icon: "📄",
                    title: "Policy Documents",
                    description:
                        "Need help with policy-related documents?",
                    cta: "Request Support",
                },
                {
                    icon: "🏥",
                    title: "Network Hospital",
                    description:
                        "Need help locating a network hospital?",
                    cta: "Find Assistance",
                },
                {
                    icon: "🧾",
                    title: "Premium / Receipt",
                    description:
                        "Need help with payment or policy documents?",
                    cta: "Request Support",
                },
            ],
        },

        review: {
            title:
                "Already Have Health Insurance? Review It Before You Need It.",

            checklist: [
                "Sum Insured",
                "Waiting Period",
                "Room Rent",
                "Co-payment",
                "Network Hospitals",
                "Pre-existing Disease Conditions",
                "Exclusions",
                "Restoration/Reinstatement features",
                "Critical Illness protection",
                "Family coverage",
            ],

            buttonLabel: "Request a Free Health Insurance Review",
        },

        claimAssistance: {
            title: "Need Help With a Health Insurance Claim?",

            steps: [
                "Understand the Situation",
                "Check Applicable Policy Terms",
                "Guide You on Required Documents",
                "Help With the Service Process",
                "Follow Up Where Applicable",
            ],

            disclaimer:
                "Claim assistance does not guarantee claim approval. Claims are subject to the insurer's applicable policy terms, conditions and assessment.",
        },

        documentChecklist: {
            title: "What Documents May Be Required?",

            forQuote: [
                "Basic personal details",
                "Age",
                "Family details",
                "Health information",
                "Existing policy details, if any",
            ],

            forPolicyReview: [
                "Existing policy document",
                "Policy schedule",
                "Renewal notice / premium details",
                "Existing coverage details",
            ],

            forClaimAssistance: [
                "Policy details",
                "Claim form",
                "Hospital documents",
                "Bills / receipts",
                "Discharge summary",
                "Medical reports",
                "Identity/KYC documents as applicable",
            ],

            forPortability: [
                "Existing policy details",
                "Renewal information",
                "Current insurer documents",
                "Applicable portability documents",
            ],

            finalNote:
                "Required documents may vary depending on the insurer, product, service and individual case.",
        },

        whyChoose: {
            title:
                "Why Choose Health Insurance Through Rushiraj?",

            subtitle:
                "We Don't Just Help You Buy a Policy. We Help You Understand It.",

            items: [
                {
                    title: "Understand",
                    description:
                        "We explain important policy features in simple language.",
                },
                {
                    title: "Compare",
                    description:
                        "We help you compare relevant options based on your needs.",
                },
                {
                    title: "Choose",
                    description:
                        "The final decision remains yours.",
                },
                {
                    title: "Support",
                    description:
                        "We remain available for renewals, reviews, service and claim-related assistance.",
                },
            ],
        },

        faq: [
            "What is a Family Floater?",
            "How much health insurance cover should I consider?",
            "What is a waiting period?",
            "What is a pre-existing disease?",
            "What is a Super Top-up?",
            "What is Critical Illness Cover?",
            "Can I review or port my existing health insurance?",
            "What is the difference between health insurance and personal accident insurance?",
        ],

        careHealth: {
            title: "Care Health Insurance Solutions",

            logo: "/images/insurers/care-health.png",

            description:
                "We offer assistance with selected Care Health Insurance solutions, subject to product availability, eligibility and applicable policy terms.",

            products: [
                "Care Supreme",
                "Ultimate Care",
                "Care Advantage",
                "Care Enhance / Secure Child / Critical Illness",
            ],

            sourceNote:
                "Care Health Insurance is the official source for the current product brochures, terms and customer information sheets.",

            brandNote:
                "Care logo/brand assets should be used according to Care Health Insurance's official brand-usage requirements. Logo should not be recreated.",
        },

        updates: {
            title: "Latest Health Insurance Updates",

            cards: [
                "New Product / Product Update",
                "Policy / Service Update",
                "Health Insurance Awareness",
            ],

            cardFields: [
                "Date",
                "Short Title",
                "Read More",
            ],

            sourceRule:
                "Only official insurer / IRDAI / verified sources should be used.",
        },

        finalCta: {
            title: "Not Sure Which Health Insurance You Need?",

            description:
                "Tell us about your family, health protection needs and existing coverage. We'll help you understand the available options.",

            buttons: [
                "Get Health Insurance Quote",
                "Book Free Consultation",
                "WhatsApp Us",
            ],
        },
    },

    /* ====================================================================== */
    /* GENERAL INSURANCE PAGE                                                 */
    /* ====================================================================== */

    generalInsurance: {
        eyebrow: "GENERAL INSURANCE",

        title:
            "Motor • Fire • WC • Business • Property and Other General Insurance",

        description: "",

        introduction: "",

        services: [
            {
                title: "Car Insurance",
                whatIsIt: "",
                whoMayNeedIt: "",
                keyConsiderations: "",
                coverageKeyFeatures: "",
                importantConditionsExclusions: "",
                documentsInformationRequired: "",
                cta: "Get a Quote",
            },
            {
                title: "Two-Wheeler Insurance",
                whatIsIt: "",
                whoMayNeedIt: "",
                keyConsiderations: "",
                coverageKeyFeatures: "",
                importantConditionsExclusions: "",
                documentsInformationRequired: "",
                cta: "Get a Quote",
            },
            {
                title: "Commercial Vehicle Insurance",
                whatIsIt: "",
                whoMayNeedIt: "",
                keyConsiderations: "",
                coverageKeyFeatures: "",
                importantConditionsExclusions: "",
                documentsInformationRequired: "",
                cta: "Get a Quote",
            },
            {
                title: "Fire Insurance",
                whatIsIt: "",
                whoMayNeedIt: "",
                keyConsiderations: "",
                coverageKeyFeatures: "",
                importantConditionsExclusions: "",
                documentsInformationRequired: "",
                cta: "Get a Quote",
            },
            {
                title: "Workers’ Compensation (WC)",
                whatIsIt: "",
                whoMayNeedIt: "",
                keyConsiderations: "",
                coverageKeyFeatures: "",
                importantConditionsExclusions: "",
                documentsInformationRequired: "",
                cta: "Get a Quote",
            },
            {
                title: "Shop / Business Insurance",
                whatIsIt: "",
                whoMayNeedIt: "",
                keyConsiderations: "",
                coverageKeyFeatures: "",
                importantConditionsExclusions: "",
                documentsInformationRequired: "",
                cta: "Get a Quote",
            },
            {
                title: "Property Insurance",
                whatIsIt: "",
                whoMayNeedIt: "",
                keyConsiderations: "",
                coverageKeyFeatures: "",
                importantConditionsExclusions: "",
                documentsInformationRequired: "",
                cta: "Get a Quote",
            },
            {
                title: "Travel Insurance",
                whatIsIt: "",
                whoMayNeedIt: "",
                keyConsiderations: "",
                coverageKeyFeatures: "",
                importantConditionsExclusions: "",
                documentsInformationRequired: "",
                cta: "Get a Quote",
            },
            {
                title: "Marine Insurance",
                whatIsIt: "",
                whoMayNeedIt: "",
                keyConsiderations: "",
                coverageKeyFeatures: "",
                importantConditionsExclusions: "",
                documentsInformationRequired: "",
                cta: "Get a Quote",
            },
            {
                title: "Other",
                whatIsIt: "",
                whoMayNeedIt: "",
                keyConsiderations: "",
                coverageKeyFeatures: "",
                importantConditionsExclusions: "",
                documentsInformationRequired: "",
                cta: "Get a Quote",
            },
        ],

        productDetailTemplate: {
            fields: [
                "Product / Category Name",
                "What is it?",
                "Who may need it?",
                "Coverage / Key Features",
                "Important Conditions / Exclusions",
                "Documents / Information Required",
            ],

            cta: "Get a Quote / Request a Call",
        },

        quoteForm: {
            fields: [
                "Name",
                "Mobile",
                "City",
                "Insurance Type",
                "Vehicle / Business / Property Details (as applicable)",
                "Preferred Call Time",
            ],

            cta: "Get a General Insurance Quote",
        },

        visuals: {
            hero: "",
            motorInsurance: "",
            businessFireProperty: "",
        },

        disclaimer: "",
    },

    /* ====================================================================== */
    /* GALLERY PAGE                                                           */
    /* ====================================================================== */

    galleryIntro: {
        eyebrow: "GALLERY",
        title: "Professional Photos • Awards • Events • Activities",
        description: "",
    },

    galleryCategories: [
        {
            title: "Professional Profile",
            numberOfImages: "",
            notes: "",
        },
        {
            title: "Office / Client Meetings",
            numberOfImages: "",
            notes: "",
        },
        {
            title: "Awards & Recognition",
            numberOfImages: "",
            notes: "",
        },
        {
            title: "Training / Seminars",
            numberOfImages: "",
            notes: "",
        },
        {
            title: "Events",
            numberOfImages: "",
            notes: "",
        },
        {
            title: "Community / Social Activities",
            numberOfImages: "",
            notes: "",
        },
    ],

    gallery: [
        {
            title: "Professional Profile",
            description: "",
            image:
                "https://res.cloudinary.com/djblsvzgm/image/upload/hero-portrait_cbocoq",
            alt: "Mrs. Darshanee Pravin Lokhande",
            category: "PROFESSIONAL PROFILE",
        },
        {
            title: "Professional Event",
            description: "",
            image:
                "https://res.cloudinary.com/djblsvzgm/image/upload/professional-event.jpg_uaxa3l",
            alt: "Mrs. Darshanee Pravin Lokhande at a professional event",
            category: "EVENTS",
        },
        {
            title: "Professional Felicitation",
            description: "",
            image:
                "https://res.cloudinary.com/djblsvzgm/image/upload/professional-felicitation.jpg_zns4xg",
            alt: "Professional felicitation moment",
            category: "AWARDS & RECOGNITION",
        },
        {
            title: "MDRT Trophy Moment",
            description: "",
            image:
                "https://res.cloudinary.com/djblsvzgm/image/upload/mdrt-trophy-moment.jpg_aa268q",
            alt: "MDRT trophy recognition moment",
            category: "AWARDS & RECOGNITION",
        },
        {
            title: "MDRT 2024 Trophy",
            description: "",
            image:
                "https://res.cloudinary.com/djblsvzgm/image/upload/mdrt-2024-trophy.jpg_ysowo5",
            alt: "MDRT 2024 trophy",
            category: "AWARDS & RECOGNITION",
        },
        {
            title: "MDRT Pune Stage",
            description: "",
            image:
                "https://res.cloudinary.com/djblsvzgm/image/upload/mdrt-pune-stage.jpg_hblmtb",
            alt: "MDRT Pune professional event",
            category: "EVENTS",
        },
        {
            title: "MDRT Event",
            description: "",
            image:
                "https://res.cloudinary.com/djblsvzgm/image/upload/mdrt-pune-stage.jpg_hblmtb",
            video:
                "https://res.cloudinary.com/djblsvzgm/video/upload/mdrt-event.mp4_qkch8g",
            alt: "MDRT professional event",
            category: "EVENTS",
        },
    ] satisfies GalleryItem[],

    galleryRequirements: [
        "High-resolution originals preferred",
        "Avoid screenshots",
        "Mix landscape and portrait images",
        "Optimise to WebP",
        "Obtain permission for client photographs",
    ],

    /* ====================================================================== */
    /* FORMS                                                                  */
    /* ====================================================================== */

    formsIntro: {
        eyebrow: "FORMS",
        title: "LIC Forms & Documents",
        description:
            "Download the required form directly and complete it as applicable to your policy or requirement.",
    },

    forms: [
        {
            title: "Change / Update Nominee",
            description: "Change / Update Nominee Form 3750.",
            fileLabel: "Download Form 3750",
            file: "/forms/change-nomination-form-3750.pdf",
        },
        {
            title: "First Time Nomination",
            description: "First Time Nomination Form 3264.",
            fileLabel: "Download Form 3264",
            file: "/forms/first-time-nomination-form-3264.pdf",
        },
        {
            title: "DAB Adding Form",
            description:
                "To add Double Accident Benefit (DAB) in policy documents.",
            fileLabel: "Download DAB Form",
            file: "/forms/dab-adding-form.pdf",
        },
        {
            title: "Juvenile FMR",
            description:
                "Required when a higher sum assured insurance policy is taken on the life of a minor life assured.",
            fileLabel: "Download Juvenile FMR",
            file: "/forms/juvenile-fmr.pdf",
        },
        {
            title: "NEFT Mandate Form",
            description: "To add banking details in the policy.",
            fileLabel: "Download NEFT Mandate",
            file: "/forms/neft-mandate-form.pdf",
        },
        {
            title: "PFQ Personal Financial Questionnaire",
            description:
                "Required for new policy completion if the proposer does not have ITRs.",
            fileLabel: "Download PFQ",
            file: "/forms/pfq-personal-financial-questionnaire.pdf",
        },
    ] satisfies FormItem[],

    /* ====================================================================== */
    /* LIC PAYMENT                                                            */
    /* ====================================================================== */

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

    /* ====================================================================== */
    /* CONTACT                                                                */
    /* ====================================================================== */

    contact: {
        eyebrow: "GET IN TOUCH",

        headline: "Let's Start a Conversation.",

        description:
            "Have a question, need guidance or simply want to understand your options? Get in touch for a conversation.",

        phone: "9921668123",

        whatsapp: "9921668123",

        email: "darshaneeplokhande@gmail.com",

        location:
            "Gheewala Complex, II nd Floor, Chinchwad Station Rd, Opposite Ramkrishna More Natyagruha, Chinchwad, Pune, Maharashtra 411033",

        mapsLink:
            "https://www.google.com/maps/search/?api=1&query=Gheewala+Complex%2C+II+nd+Floor%2C+Chinchwad+Station+Rd%2C+Opposite+Ramkrishna+More+Natyagruha%2C+Chinchwad%2C+Pune%2C+Maharashtra+411033",

        form: {
            eyebrow: "QUICK ENQUIRY",

            title: "Request a Call",

            description:
                "Share your details and we will get back to you.",

            submitLabel: "Request a Call",

            fields: [
                {
                    name: "name",
                    label: "Name",
                    type: "text",
                    placeholder: "Enter your name",
                    required: true,
                },
                {
                    name: "mobile",
                    label: "Mobile",
                    type: "tel",
                    placeholder: "Enter your mobile number",
                    required: true,
                },
                {
                    name: "city",
                    label: "City",
                    type: "text",
                    placeholder: "Enter your city",
                    required: true,
                },
                {
                    name: "service",
                    label: "Service Required",
                    type: "text",
                    placeholder: "What would you like help with?",
                    required: true,
                },
                {
                    name: "preferredCallTime",
                    label: "Preferred Call Time",
                    type: "text",
                    placeholder: "Preferred time for a call",
                    required: false,
                },
                {
                    name: "message",
                    label: "Message",
                    type: "textarea",
                    placeholder: "Additional details",
                    required: false,
                },
            ] satisfies ContactFormField[],
        },
    },

    /* ====================================================================== */
    /* FOOTER                                                                 */
    /* ====================================================================== */

    footer: {
        description:
            "Professional financial planning, insurance and advisory services built around informed decisions, protection and long-term client support.",

        disclaimer:
            "This website represents an independent professional consultant and is not the official website of LIC.",

        copyrightName: "Mrs. Darshanee Pravin Lokhande",
    },

    /* ====================================================================== */
    /* LEGACY / COMPATIBILITY DATA                                            */
    /* ====================================================================== */
    /*
     * These fields keep the current components from breaking while
     * Sections.tsx is being upgraded to consume the complete document
     * structure above.
     */

    experienceIntro: {
        eyebrow: "PROFESSIONAL JOURNEY",
        title: "13 Years of Professional Experience",
        description:
            "Started Career / Year: 2013",
    },

    experience: [
        {
            year: "2013",
            title: "Started Career",
            description:
                "Started her professional association with LIC in 2013 as an Insurance Consultant.",
            details: [
                "Started Career / Year: 2013",
                "City / Area Served: India and PCMC",
            ],
        },
    ],

    lic: {
        eyebrow: "LIC ASSOCIATION",
        title: "Professional Association With LIC",
        description:
            "Started her professional association with LIC in 2013 as an Insurance Consultant.",
        role: "Insurance Consultant",
        associationSince: "2013",

        highlights: [
            "Insurance Consultancy",
            "Professional Client Guidance",
            "Insurance Planning",
            "LIC Association Since 2013",
        ],

        detailedContent: [
            "Started her professional association with LIC in 2013 as an Insurance Consultant.",
        ],

        officialLink: "https://licindia.in/",

        paymentLink:
            "https://ebiz.licindia.in/D2CPM/?_ga=2.14442098.435873440.1760265622-558406503.1741608006&_gac=1.192926296.1760265622.Cj0KCQjwo63HBhCKARIsAHOHV_XpVCw9UNhazc2hdXGgfdkXQ_p0Zrf7A-a9pd-EeMIwMOADt8Fqf2waAoANEALw_wcB#DirectPay",

        image:
            "https://res.cloudinary.com/djblsvzgm/image/upload/professional-felicitation.jpg_zns4xg",

        imageAlt:
            "Professional LIC-related moment featuring Mrs. Darshanee Pravin Lokhande",
    },

    servicesIntro: {
        eyebrow: "PROFESSIONAL SERVICES",
        title: "Professional Guidance Across Financial Needs.",
        description:
            "Personalized and complete financial solutions focused on understanding your portfolio and your financial goals.",
    },

    services: [
        {
            title: "Life Insurance",
            description:
                "Life insurance and protection planning.",
            details: [
                "Life Insurance",
            ],
            benefit: "",
        },
        {
            title: "Mutual Funds / SIP",
            description:
                "Investment-related guidance.",
            details: [
                "Mutual Funds / SIP",
            ],
            benefit: "",
        },
        {
            title: "Health Insurance",
            description:
                "Health and medical insurance guidance.",
            details: [
                "Health Insurance",
            ],
            benefit: "",
        },
        {
            title: "General Insurance",
            description:
                "General insurance guidance.",
            details: [
                "General Insurance",
            ],
            benefit: "",
        },
    ],

    /* ====================================================================== */
    /* ROOT-LEVEL HELPERS USED BY CURRENT COMPONENTS                          */
    /* ====================================================================== */

    insuranceCategories: [
        {
            title: "Life Insurance",
            description: "",
            href: "#life-insurance",
        },
        {
            title: "Health Insurance",
            description: "",
            href: "#health-insurance",
        },
        {
            title: "General Insurance",
            description: "",
            href: "#general-insurance",
        },
    ],
} as const;