export type Project = {
  title: string;
  /*category: "Personal" | "Company";*/
  category: "Company";
  description: string;
  tags: string[];
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    title: "IGP",
    category: "Company",
    description:
      "A large-scale gifting and e-commerce Android application with 5M+ downloads. Contributed to end-to-end Android development, REST API integration, analytics, payment gateways, and scalable application architecture.",
    tags: [
      "Kotlin",
      "Java",
      "Android SDK",
      "MVVM",
      "Retrofit",
      "Firebase",
      "Mixpanel",
      "AppsFlyer",
      "Netcore",
      "ARCore",
      "Payment Integration",
    ],
    links: [
      {
        label: "Google Play Store",
        url: "https://play.google.com/store/apps/details?id=com.igp.android&hl=en&gl=US",
      },
    ],
  },
  {
    title: "Interflora",
    category: "Company",
    description:
      "An online flower and gifting application with 50K+ downloads. Worked on Android application development, API integration, product features, analytics, and application performance.",
    tags: [
      "Kotlin",
      "Java",
      "Android SDK",
      "MVVM",
      "Retrofit",
      "Glide",
      "Firebase",
      "Analytics",
    ],
    links: [
      {
        label: "Google Play Store",
        url: "https://play.google.com/store/apps/details?id=com.interflora.android&hl=en&gl=US",
      },
    ],
  },
  {
    title: "Localramu Partner",
    category: "Company",
    description:
      "A service partner application with 10K+ downloads, designed to help service providers manage customer requests and business operations. Contributed to Android development, API integration, and payment functionality.",
    tags: [
      "Java",
      "Kotlin",
      "Android SDK",
      "Analytics",
      "Retrofit",
      "Glide",
      "Razorpay",
     ],
    links: [
      {
        label: "Google Play Store",
        url: "https://play.google.com/store/apps/details?id=com.localramu.venapp",
      },
    ],
  },
  {
    title: "Localramu User",
    category: "Company",
    description:
      "A service booking Android application with 10K+ downloads, enabling users to discover and book local services. Worked on UI development, REST API integration, payment gateway integration, and application maintenance.",
    tags: [
      "Java",
      "Android SDK",
      "Analytics",
      "Retrofit",
      "Glide",
      "Razorpay",
      ],
    links: [
      {
        label: "Google Play Store",
        url: "",
      },
    ],
  },
];