
import { NewsItem, Publication, Project, CoffeeLog } from './types';

export const NEWS_DATA: NewsItem[] = [
  {
    date: "May, 2026",
    content: "New IEEE Xplore article published: Analyzing Media Narratives of the 2024 Bangladesh Mass Movement Using Topic Modeling, Machine Learning, and Explainable AI.",
    link: "https://doi.org/10.1109/ICCIT68739.2025.11491590",
    linkText: "DOI"
  },
  {
    date: "Dec, 2025",
    content: "Completed research work with Dr. Mahdy Rahman Chowdhury’s research group at North South University, focusing on NLP-based media narrative analysis.",
    link: "https://ece.northsouth.edu/people/mahdy-rahman-chowdhury/",
    linkText: "Research Group"
  },
  {
    date: "Nov, 2025",
    content: "Early results from my MSc thesis were accepted as a contributory poster at ICASDS 2025, ISRT, University of Dhaka.",
    link: "https://drive.google.com/file/d/1Vbw1o4vFOR0WLpyWd4SCFBom7apPF8Y2/view?usp=drive_link",
    linkText: "Poster"
  },
  {
    date: "Jan, 2025",
    content: "Started as Graduate Researcher at Statistics Discipline, Khulna University",
    link: "https://ku.ac.bd/",
    linkText: "Khulna University"
  }
];

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: "pub-2026-1",
    title: "Ensemble Model for Predicting Depression among School Teachers: A Cross-sectional Study in Rajshahi and Khulna Regions of Bangladesh",
    authors: "Hossain, M. G., & Maniruzzaman, M.",
    venue: "Journal manuscript, manuscript in preparation",
    year: 2026,
    thumbnail: "MS",
    type: "PDF"
  },
  {
    id: "pub-2026-2",
    title: "Development of Predictive Models for Gallstone Disease Using Machine Learning Techniques",
    authors: "Nahin, M. H., Barman, S. K., Hossain, M. G., & Maniruzzaman, M. (2026, Jun)",
    venue: "PECCII 2026, accepted",
    year: 2026,
    thumbnail: "PECCII",
    type: "PDF"
  },
  {
    id: "pub-2026-3",
    title: "An Interpretable Fake News Detection Framework: From Classical Machine Learning to Transformers with LIME",
    authors: "Hossain, M. G., Shozol, S. A., Hossain, K. S., & Barna, S. D. (2026, Jan)",
    venue: "1st International Conference on Multidisciplinary Research in Sciences (ICMRS 2026), abstract",
    year: 2026,
    thumbnail: "ICMRS",
    type: "PDF",
    pdfUrl: "https://drive.google.com/file/d/1k7BR2LLhrurkOHtvaVKtgAl_lrVqNA3_/view?usp=sharing"
  },
  {
    id: "pub-2025-1",
    title: "Analyzing Media Narratives of the 2024 Bangladesh Mass Movement Using Topic Modeling, Machine Learning, and Explainable AI",
    authors: "Shozol, S. A., Hossain, M. G., & Chowdhury, M. R. (2025, Dec)",
    venue: "28th International Conference on Computer and Information Technology (ICCIT 2025), IEEE",
    year: 2025,
    thumbnail: "ICCIT",
    type: "DOI",
    doi: "10.1109/ICCIT68739.2025.11491590",
    pdfUrl: "https://doi.org/10.1109/ICCIT68739.2025.11491590"
  },
  {
    id: "pub-2025-2",
    title: "Trends and determinants of antenatal care use and quality in Bangladesh: Insights from demographic and health survey data",
    authors: "Barna, S. D., Quayyum, M. A., Hossain, M. G., Islam, M. A., & Rahman, F. (2025)",
    venue: "PLOS ONE",
    year: 2025,
    thumbnail: "PLOS ONE",
    type: "DOI",
    doi: "10.1371/journal.pone.0337449",
    pdfUrl: "https://doi.org/10.1371/journal.pone.0337449"
  },
  {
    id: "pub-2025-3",
    title: "Developing an Ensemble Model for Predicting Depression among School Teachers: A Cross-sectional Study in Rajshahi and Khulna Regions of Bangladesh",
    authors: "Hossain, M. G., Hossain, M. S., Arfin, M. S., Zaman, M. S., Asadujjaman, M., Roy, T. K., Alauddin, S., & Maniruzzaman, M. (2025, Aug)",
    venue: "International Conference on Applied Statistics and Data Science 2025 (ICASDS 2025), University of Dhaka",
    year: 2025,
    thumbnail: "ICASDS",
    type: "POSTER",
    pdfUrl: "https://drive.google.com/file/d/1GyQWHf9g5NomTS_nc7z55uOaM5Q60Q5A/view?usp=drive_link"
  },
  {
    id: "pub-2025-4",
    title: "Cross-national Media Framing of Mass Movements: A Comparative Study of the July 2024 Uprising in South Asia",
    authors: "Shozol, S. A., & Hossain, M. G. (2025, Jul)",
    venue: "1st International Conference on the July Revolution (ICJR-I 2025), University of Dhaka",
    year: 2025,
    thumbnail: "ICJR-I",
    type: "POSTER",
    pdfUrl: "https://drive.google.com/file/d/1Gfj0enSRqMXsfgCoGK_5BCRaPM6uMO_s/view?usp=drive_link"
  }
];
export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    title: "Depression Severity Predictor",
    description: "proof-of-concept (PoC) for predicting multiclass depression severity among school teachers in Bangladesh.",
    category: "Featured Project",
    imageText: "DEPRESSION",
    githubUrl: "https://github.com/Goffar-dp/depression_severity_predictor",
    demoUrl: "https://huggingface.co/spaces/goooofar/depression-severity-predictor/"
  }
];

export const COFFEE_LOGS: CoffeeLog[] = [
  {
    id: "log-1",
    title: "Log #1 — Local Coffee Potential in Bangladesh",
    date: "20 December 2025",
    tldr: "Exploring whether Bangladesh’s emerging local coffee beans can support a thoughtful, premium coffee brand.",
    content: [
      "The coffee market in Bangladesh is still relatively small, but it is changing. While tea remains dominant, coffee consumption—especially in urban areas—is steadily growing. Cafés, home brewers, and specialty coffee spaces are becoming more common, yet the underlying supply chain remains largely dependent on imported beans.",
      "At present, most premium coffee consumed in Bangladesh is sourced from countries such as Ethiopia, Brazil, and Vietnam. These imports define both the flavor expectations and the pricing structure of the market. While imported beans often deliver consistent quality, they also introduce higher costs, logistical complexity, and vulnerability to currency and supply fluctuations.",
      "This dependency raises an important question: can local coffee play a meaningful role in filling this gap?",
      "### Emerging Local Regions",
      "Recent discussions and early experiments point to regions such as Bandarban and Sylhet as potential coffee-growing areas. Although still in early stages, these regions show distinct characteristics. Beans from Bandarban are often described as more balanced and earthy, while Sylhet-grown beans tend to lean brighter and fruit-forward.",
      "These profiles are not yet standardized, and consistency remains a challenge. However, the presence of identifiable regional traits suggests that local coffee has the potential to develop its own identity rather than imitate imported profiles.",
      "### Market Opportunity",
      "The current market appears polarized. On one end, instant and low-grade coffee dominates everyday consumption. On the other, fully imported specialty coffee occupies a premium niche that is often expensive and inaccessible to many consumers.",
      "A locally sourced, carefully roasted coffee could occupy a middle ground: premium in quality, but grounded in local production. Such an approach could reduce reliance on imports while allowing for greater experimentation with roasting profiles, freshness, and process control.",
      "### Project Direction",
      "The O-H-H-O project is an exploration of this possibility. The focus is not on rapid scaling, but on understanding fundamentals: sourcing, roasting behavior, flavor development, and consistency when working with local beans. Each step is treated as an experiment rather than a finished product.",
      "### Looking Ahead",
      "This log marks the starting point. Future entries will examine specific regions in more detail, explore roasting trials, and reflect on the practical challenges of working with local supply chains. The goal is to document what is learned over time—both limitations and opportunities—without assumptions.",
      "For now, this project remains an open question worth exploring."
    ]
  }
];
